import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Info() {
  async function upload(formData: FormData) {
    'use server'

    console.log(formData.entries())
  }

  return (
    <div className="md:py-8">
      <form
        action={upload}
        className="mx-auto flex flex-col gap-4 p-4 bg-white w-full md:max-w-xl"
      >
        <h2 className="text-xl font-bold">User Information</h2>
        <Input name="name" placeholder="Name" type="text" />
        <Input
          name="avatar"
          placeholder="Avatar"
          type="file"
          accept="image/*"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
