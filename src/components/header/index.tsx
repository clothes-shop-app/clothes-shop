import Link from 'next/link'
import { UserCircleIcon, ShoppingCartIcon, BellIcon } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: ['400']
})

export const Header = () => {
  return (
    <header className="border-b border-gray-500">
      <div className="flex justify-between items-end container mx-auto pt-8 pb-4">
        <nav className="flex gap-8 flex-1">
          <Link href="/">Каталог</Link>
          <Link href="#">Новинки</Link>
          <Link href="#">Скидки</Link>
          <Link href="#">О нас</Link>
        </nav>
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <h1 className={`text-4xl ${playfairDisplay.className}`}>Clothes</h1>
          </Link>
        </div>
        <div className="flex gap-4 flex-1 justify-end">
          <UserCircleIcon width={20} height={20} />
          <ShoppingCartIcon width={20} height={20} />
          <BellIcon width={20} height={20} />
        </div>
      </div>
    </header>
  )
}
