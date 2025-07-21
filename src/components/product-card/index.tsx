import Image from 'next/image'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Product } from '@/lib/types'

interface IProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <Link href={`/clothes/${product.id}`}>
      <Card className="text-center hover:outline">
        <Image
          src={product.images?.[0]}
          alt="Product photo"
          width="300"
          height="300"
          className="mx-auto w-[300px] h-[300px] object-cover"
        />
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardContent>
          <p>{product.description}</p>
          <p>{product.price}$</p>
        </CardContent>
      </Card>
    </Link>
  )
}
