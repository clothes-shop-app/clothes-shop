'use server'

import { cookies } from 'next/headers'

export async function addToCart(formData: FormData) {
  const productId = formData.get('productId')

  const cookieStore = await cookies()

  const res = await fetch(`${process.env.BACKEND_URL}/cart/add/${productId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieStore.toString()
    },
    body: JSON.stringify({ productId })
  })

  return res.json()
}
