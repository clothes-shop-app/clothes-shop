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
