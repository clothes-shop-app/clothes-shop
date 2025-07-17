'use server'

export async function uploadProduct(formData: FormData) {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
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

  return res.json()
}
