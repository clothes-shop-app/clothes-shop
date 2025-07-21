'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createUser } from '@/lib/actions/create-user'
import { useActionState } from 'react'

export default function Register() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, createUserAction, isPending] = useActionState(createUser, {})

  return (
    <div className="container p-8 flex flex-col">
      <div className="w-[500px] mx-auto p-8 flex flex-col gap-4">
        <p className="text-sm text-gray-600">
          We use phone number authentication, if this your first you will be
          automatically redirected to register page.
        </p>
        <div className="flex flex-col w-full max-w-sm items-center gap-2">
          <form action={createUserAction} className="flex flex-col gap-2">
            <Input type="text" placeholder="Name" name="name" required />
            <Input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              required
            />
            <Input type="text" placeholder="Address" name="address" />
            <Button type="submit" variant="outline" disabled={isPending}>
              {isPending ? 'Registering...' : 'Register'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
