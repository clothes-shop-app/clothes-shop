import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createUser } from '@/lib/actions/create-user'

export default function Register() {
  return (
    <div className="container p-8 flex flex-col">
      <div className="w-[500px] mx-auto p-8 flex flex-col gap-4">
        <p className="text-sm text-gray-600">
          We use phone number authentication, if this your first you will be
          automatically redirected to register page.
        </p>
        <div className="flex flex-col w-full max-w-sm items-center gap-2">
          <form action={createUser} className="flex flex-col gap-2">
            <Input type="text" placeholder="Name" name="name" required />
            <Input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              required
            />
            <Input type="text" placeholder="Address" name="address" />
            <Button type="submit" variant="outline">
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
