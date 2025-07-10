export const dynamic = 'force-dynamic'

import { ProductCard } from '@/components/product-card'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import { Product } from '@/lib/types'
import Link from 'next/link'

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/products?page=1&limit=10`)
  const products: Product[] = await res.json()

  return (
    <div className="my-4 space-y-4 text-sm">
      <div className="py-4 text-center md:text-left">
        <Link href="/" className="text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Catalog</span>
      </div>
      <div className="md:flex border-t">
        <div className="w-[300px] py-4 hidden md:block">
          <p>Filters (Soon)</p>
        </div>
        <div className="grow border-l grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
