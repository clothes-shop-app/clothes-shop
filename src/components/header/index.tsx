import Link from 'next/link'
import { UserCircleIcon, ShoppingCartIcon, BellIcon } from 'lucide-react'

export const Header = () => {
  return (
    <header className="border-b">
      <div className="flex justify-between items-end container mx-auto pt-8 pb-4">
        <nav className="gap-8 flex-1 hidden md:flex text-sm">
          <Link href="/">Catalog</Link>
          <Link href="#">New</Link>
          <Link href="#">Promo</Link>
          <Link href="#">About</Link>
        </nav>
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <h1 className={`text-4xl`}>Clothes</h1>
          </Link>
        </div>
        <div className="gap-4 flex-1 justify-end flex px-4 md:p-0">
          <UserCircleIcon width={20} height={20} strokeWidth={1} />
          <ShoppingCartIcon width={20} height={20} strokeWidth={1} />
          <BellIcon width={20} height={20} strokeWidth={1} />
        </div>
      </div>
    </header>
  )
}
