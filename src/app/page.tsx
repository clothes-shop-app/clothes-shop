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
import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-8 space-y-4">
      <Link href="/" className="text-sm text-gray-700 p-4">
        Home
      </Link>
      <h2 className="text-center">Catalog</h2>
      <div className="md:flex border-t">
        <div className="w-[300px] p-4 hidden md:block">
          <p>Filters</p>
        </div>
        <div className="grow border-l grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
