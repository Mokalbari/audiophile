export type Products = {
  id: string
  name: string
  category: "headphones" | "earphones" | "speakers"
  preview_text: string
  description: string
  price: number
  is_new: boolean
}

export type Accessories = {
  id: string
  name: string
}

export type ProductAccessories = {
  id: string
  product_id: string
  accessory_id: string
  quantity: number
}

export type ProductImages = {
  id: string
  product_id: string
  url: string
  is_main: boolean
}
