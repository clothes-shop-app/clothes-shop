import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { cookies } from 'next/headers'
import CartItem from '@/lib/types/cart-item'
import { redirect } from 'next/navigation'

export default async function Cart() {
  const cookieStore = await cookies()
  console.log(cookieStore.get('token'))

  const res = await fetch(`${process.env.BACKEND_URL}/cart`, {
    cache: 'no-store',
    headers: {
      Cookie: cookieStore.toString()
    }
  })

  const data = await res.json()

  if (data.error) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto text-sm my-4 space-y-4">
      <div className="py-4 text-center md:text-left">
        <Link href="/" className="text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Cart</span>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 border divide-y p-4 space-y-4">
          {data?.map((item: CartItem) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 gap-4"
            >
              <div className="flex gap-4">
                <Image
                  src={item.image}
                  alt="Product photo"
                  className="w-[150px] h-[150px] object-contain bg-gray-200"
                  width="150"
                  height="150"
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price} $</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p>{item.price * item.quantity} $</p>
                <Button className="w-full">Checkout</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-sm border p-4 space-y-2 md:self-start">
          <ul className="space-y-2">
            <li className="flex gap-4 justify-between">
              <p>Total: </p>
              <p>100 $</p>
            </li>
            <li className="flex gap-4 justify-between">
              <p>Promo: </p>
              <p>25 $</p>
            </li>
            <li className="flex gap-4 justify-between border-t">
              <p>Pay: </p>
              <p>75 $</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
