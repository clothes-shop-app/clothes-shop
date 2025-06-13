import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
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
          <div className="flex items-center justify-between p-4 gap-4">
            <div className="flex">
              <Image
                src="/brunello-vest.webp"
                alt="Product photo"
                width="150"
                height="150"
              />
              <div className="flex flex-col justify-center gap-2">
                <h3 className="text-lg font-bold">Brunello Cucinelli</h3>
                <p className="text-sm text-gray-500">Woven Sleeveless Top</p>
                <p className="text-sm text-gray-500">500$</p>
              </div>
            </div>
            <div>x 2</div>
            <div>1000 $</div>
          </div>
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
          <div className="w-full">
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
