import {
  accessories,
  productAccessories,
  productImages,
  products,
} from "@/lib/data"
import { db } from "@vercel/postgres"

const client = await db.connect()

async function seedProducts() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS products CASCADE`
  await client.sql/*sql*/ `
    CREATE TABLE IF NOT EXISTS products (
        id VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL,
        category VARCHAR NOT NULL,
        preview_text TEXT,
        description TEXT,
        price NUMERIC NOT NULL,
        is_new BOOLEAN
    )`

  await Promise.all(
    products.map(
      (product) => client.sql/*sql*/ `
        INSERT INTO products (
            id,
            name,
            category,
            preview_text,
            description,
            price,
            is_new
        )
        VALUES (
          ${product.id},
          ${product.name},
          ${product.category},
          ${product.preview_text},
          ${product.description},
          ${product.price},
          ${product.is_new}
        )`,
    ),
  )
}

async function seedAccessories() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS accessories CASCADE`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS accessories (
        id VARCHAR PRIMARY KEY,
        name VARCHAR NOT NULL UNIQUE
    )`

  await Promise.all(
    accessories.map(
      (accessory) => client.sql/*sql*/ `
          INSERT INTO accessories (
            id,
            name
          )
          VALUES (
            ${accessory.id},
            ${accessory.name}
          )
        `,
    ),
  )
}

async function seedProductImages() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS product_images`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS product_images (
        id VARCHAR PRIMARY KEY,
        product_id VARCHAR NOT NULL,
        url TEXT NOT NULL,
        is_main BOOLEAN DEFAULT false,
        FOREIGN KEY (product_id) REFERENCES products(id)
    )`

  await Promise.all(
    productImages.map(
      (image) => client.sql/*sql*/ `
          INSERT INTO product_images (
            id,
            product_id,
            url,
            is_main
          )
          VALUES (
            ${image.id},
            ${image.product_id},
            ${image.url},
            ${image.is_main}
          )`,
    ),
  )
}

async function seedProductAccessories() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS product_accessories`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS product_accessories (
        id VARCHAR PRIMARY KEY,
        product_id VARCHAR NOT NULL,
        accessory_id VARCHAR NOT NULL,
        quantity INTEGER DEFAULT 1,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (accessory_id) REFERENCES accessories(id)
    )`

  await Promise.all(
    productAccessories.map(
      (accessoryList) => client.sql/*sql*/ `
        INSERT INTO product_accessories (
          id,
          product_id,
          accessory_id,
          quantity
        )
        VALUES (
          ${accessoryList.id},
          ${accessoryList.product_id},
          ${accessoryList.accessory_id},
          ${accessoryList.quantity}
        )`,
    ),
  )
}

export async function GET() {
  try {
    await client.sql/*sql*/ `BEGIN`
    await seedProducts()
    await seedAccessories()
    await seedProductImages()
    await seedProductAccessories()
    await client.sql/*sql*/ `COMMIT`

    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      {
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    await client.sql/*sql*/ `ROLLBACK`
    return Response.json({ error }, { status: 500 })
  } finally {
    client.release()
  }
}
