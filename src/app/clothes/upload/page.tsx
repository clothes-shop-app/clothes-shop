'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { InfoIcon } from 'lucide-react'
import { uploadProduct } from '@/lib/actions/upload-product'
import ImageUpload from './components/image-upload'
import { useActionState } from 'react'

export default function Page() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, uploadProductAction, isPending] = useActionState(
    uploadProduct,
    { error: null, success: null }
  )

  return (
    <div className="flex items-center md:py-8">
      <form
        action={uploadProductAction}
        className="flex flex-col gap-4 p-4 bg-white w-full md:max-w-xl"
      >
        <h2 className="text-xl font-bold">Upload a new product</h2>
        <p className="text-gray-500 text-sm bg-gray-100 p-2">
          <InfoIcon size={20} strokeWidth={1} className="block mb-2"></InfoIcon>
          Make sure every picture is high-quality, description is thorough,
          price is correct, your item will be going through moderation first.
        </p>

        <Input name="name" placeholder="Name" type="text" required />
        <Textarea name="description" placeholder="Description" required />
        <Input name="categoryId" placeholder="Category ID" type="text" />
        <Input name="price" placeholder="Price" type="number" required />

        <ImageUpload />

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
