'use server'

interface State {
  error?: string | null
  success?: string | null
}

export async function uploadProduct(
  _prevState: State,
  formData: FormData
): Promise<State> {
  const raw = await fetch(`${process.env.BACKEND_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: formData.get('name'),
      description: formData.get('description'),
      price: Number(formData.get('price')),
      categoryId: formData.get('categoryId'),
      images: formData.get('images')?.toString().split(',')
    })
  })

  const res = await raw.json()

  if (res.error) {
    return { error: res.error }
  }

  return { success: res.success }
}
