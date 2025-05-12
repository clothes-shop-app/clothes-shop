import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export const ProductCard = () => {
  return (
    <Link href="/clothes/123">
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
    </Link>
  )
}
