import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InfoIcon } from 'lucide-react'

export default function Page() {
  async function upload(formData: FormData) {
    'use server'

    console.log(formData.entries())
  }

  return (
    <div className="flex items-center md:py-8">
      <form
        action={upload}
        className="flex flex-col gap-4 p-4 bg-white w-full md:max-w-xl"
      >
        <h2 className="text-xl font-bold">Upload a new product</h2>
        <p className="text-gray-500 text-sm bg-gray-100 p-2">
          <InfoIcon size={20} strokeWidth={1} className="block mb-2"></InfoIcon>
          Make sure every picture is high-quality, description is thorough,
          price is correct, your item will be going through moderation first.
        </p>
        <Input name="name" placeholder="Name" type="text" />
        <Input name="brand" placeholder="Brand" type="text" />
        <Input name="price" placeholder="Price" type="number" />
        <Input
          name="images"
          placeholder="Images"
          type="file"
          multiple
          accept="image/*"
        />
        <Textarea name="description" placeholder="Description" />
        <Textarea name="metadata" placeholder="Metadata" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
