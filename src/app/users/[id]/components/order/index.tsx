import Image from 'next/image'

export default function Order() {
  return (
    <div className="flex flex-col gap-2 border hover:border-gray-300 p-4">
      <h3 className="font-semibold">Brunello Cucinelli Vest</h3>
      <p>500 $</p>
      <p>2025-01-01</p>
      <Image
        src="/brunello-vest.webp"
        alt="Product photo"
        width="150"
        height="150"
        className="mx-auto"
      />
    </div>
  )
}
