import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/navigation/Navigation'

const roboto = Roboto({ subsets: ['latin'], weight:["100",'300',"400","500","700"] })

export const metadata: Metadata = {
  title: 'Youtube',
  description: 'Broadcast Yourself',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation/>
        <div className='pt-16'>
        {children}</div></body>
    </html>
  )
}
