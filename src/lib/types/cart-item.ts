export default interface CartItem {
  id: string
  userId: string
  productId: string
  name: string
  image: string
  price: number
  quantity: number
  createdAt: Date
}
