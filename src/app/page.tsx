import Link from 'next/link'

export default function Home() {
  return (
    <div className="my-8 space-y-4">
      <Link href="/" className="text-sm text-gray-700">
        Главная
      </Link>
      <h2 className="text-center text-xl font-bold">Каталог</h2>
      <div className="flex border-t border-b">
        <div className="w-[300px] p-4">
          <p>Фильтры</p>
        </div>
        <div className="grow border-l h-[1000px]"></div>
      </div>
    </div>
  )
}
