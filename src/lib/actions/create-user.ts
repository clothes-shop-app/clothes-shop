'use server'

import 'server-only'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

interface State {
  success?: string
  error?: string
}

export async function createUser(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const res = await fetch(`${process.env.BACKEND_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.get('name'),
      phone: formData.get('phone'),
      address: formData.get('address')
    })
  })

  const data = await res.json()

  if (!data.user) {
    return { error: 'Failed to create user' }
  }

  if (data.token) {
    const cookieStore = await cookies()
    cookieStore.set('token', data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    })
  }

  redirect('/')
}
