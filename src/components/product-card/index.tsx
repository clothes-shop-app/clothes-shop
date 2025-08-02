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
      <Card className="relative hover:outline hover:z-20 z-10">
        <Image
          src={product.images?.[0]}
          alt="Product photo"
          width="300"
          height="300"
          className="block w-full h-[300px] object-cover object-top"
        />
        <CardTitle className="px-4 text-lg">{product.name}</CardTitle>
        <CardContent className="px-4">
          <p>{product.description}</p>
          <p>{product.price}$</p>
        </CardContent>
      </Card>
    </Link>
  )
}
