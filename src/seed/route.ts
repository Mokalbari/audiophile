import { db } from "@vercel/postgres"

const client = await db.connect()

async function createExtensions() {
  await client.sql/*sql*/ `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
}

async function seedProducts() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS products CASCADE`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS products (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR NOT NULL,
        category VARCHAR NOT NULL,
        preview_text TEXT,
        description TEXT,
        price NUMERIC NOT NULL
    )`
}

async function seedAccessories() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS accessories CASCADE`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS accessories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR NOT NULL UNIQUE
    )`
}

async function seedProductImages() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS product_images`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS product_images (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID NOT NULL,
        url TEXT NOT NULL,
        is_main BOOLEAN DEFAULT false,
        FOREIGN KEY (product_id) REFERENCES products(id)
    )`
}

async function seedProductAccessories() {
  await client.sql/*sql*/ `DROP TABLE IF EXISTS product_accessories`
  await client.sql/*sql*/ `
    
    CREATE TABLE IF NOT EXISTS product_accessories (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        product_id UUID NOT NULL,
        accessory_id UUID NOT NULL,
        quantity INTEGER DEFAULT 1,
        FOREIGN KEY (product_id) REFERENCES products(id),
        FOREIGN KEY (accessory_id) REFERENCES accessories(id)
    )`
}

export async function GET() {
  try {
    await client.sql/*sql*/ `BEGIN`
    await createExtensions()
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
