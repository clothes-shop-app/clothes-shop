'use client'

import Link from 'next/link'
import { UserCircleIcon, ShoppingCartIcon, BellIcon } from 'lucide-react'
import Image from 'next/image'
import useUser from '@/lib/hooks/use-user'

export const Header = () => {
  const { token } = useUser()

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
            <Image src="/logos.png" width="150" height="50" alt="logo" />
          </Link>
        </div>
        <div className="gap-4 flex-1 justify-end flex px-4 md:p-0">
          <Link href={token ? `/users/1` : '/login'}>
            <UserCircleIcon width={20} height={20} strokeWidth={1} />
          </Link>
          <Link href="/cart">
            <ShoppingCartIcon width={20} height={20} strokeWidth={1} />
          </Link>
          <BellIcon width={20} height={20} strokeWidth={1} />
        </div>
      </div>
    </header>
  )
}
