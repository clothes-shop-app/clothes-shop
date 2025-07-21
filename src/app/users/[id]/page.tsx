export const dynamic = 'force-dynamic'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'
import Orders from './components/tabs/orders'
import Refunds from './components/tabs/refunds'
import Info from './components/tabs/info'

export default function UserPage() {
  return (
    <div className="container mx-auto text-sm my-4 space-y-4">
      <div className="py-4 text-center md:text-left">
        <Link href="/" className="text-gray-700">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>User Profile</span>
      </div>
      <div className="border-t">
        <div className="py-4 space-y-4">
          <div className="flex justify-center items-center">
            <div className="w-[100px] h-[100px] bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex justify-center items-center">
            <p>John Doe</p>
          </div>
        </div>
        <div className="flex justify-center w-full flex-col gap-4">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="refunds">Refunds</TabsTrigger>
              <TabsTrigger value="info">Info</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <Orders />
            </TabsContent>
            <TabsContent value="refunds">
              <Refunds />
            </TabsContent>
            <TabsContent value="info">
              <Info />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
