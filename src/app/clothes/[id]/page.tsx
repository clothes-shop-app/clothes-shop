import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { BaggageClaim, Container, Truck } from 'lucide-react'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'

export default function ClothesIdPage() {
  return (
    <div>
      <div className="md:flex md:justify-center gap-4">
        <div className="flex justify-center border-b">
          <Image
            className="max-w-md md:min-w-2xl"
            src="/brunello-vest.webp"
            alt="Product photo"
            width="300"
            height="500"
          />
        </div>
        <div className="md:w-xl md:p-8">
          <div className="flex flex-col items-center p-4 gap-2 border-b">
            <h2 className="leading-none font-semibold text-xl">
              Brunello Cucinelli
            </h2>
            <p>Вязаный жилет в полоску</p>
            <p>949 300 тг</p>
          </div>
          <div className="p-4 border-b flex gap-4">
            <Button>Add to cart</Button>
            <Button variant="outline">Add to favorites</Button>
          </div>
          <div className="border-b md:border-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex gap-4">
                    <BaggageClaim width={24} height={24} /> Description
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Straight jeans with a medium fit made of thick denim. A button
                  and zipper closure, a classic five-pocket model, a metal plate
                  with an embossed brand logo on the back, arrows on the
                  trousers, a slight scuff effect.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex gap-4">
                    <Container width={24} height={24} /> Details
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Size: 40 <br />
                  Color: Navy <br />
                  Sex: Women
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="flex gap-4">
                    <Truck width={24} height={24} />
                    Delivery
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Delivery is free for purchases over 25,000 KZT across
                  Kazakhstan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p>You might be interested:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  )
}
