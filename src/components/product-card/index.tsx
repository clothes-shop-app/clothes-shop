import Image from 'next/image'
import { Card, CardContent, CardTitle } from '../ui/card'

export const ProductCard = () => {
  return (
    <Card className="text-center hover:outline">
      <Image
        src="/brunello-vest.webp"
        alt="Product photo"
        width="300"
        height="500"
      />
      <CardTitle>Brunello Cucinelli</CardTitle>
      <CardContent>
        <p>Вязаный жилет в полоску</p>
        <p>949 300 тг</p>
      </CardContent>
    </Card>
  )
}
