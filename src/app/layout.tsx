import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Clothes Shop',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} antialiased`}>
        <Header />
        <div className="container mx-auto">{children}</div>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
