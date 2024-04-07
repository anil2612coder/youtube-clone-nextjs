import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/navigation/Navigation'
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";


const roboto = Roboto({ subsets: ['latin'], weight:["100",'300',"400","500","700"] })

export const metadata: Metadata = {
  title: 'Youtube',
  description: 'Broadcast Yourself',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={roboto.className}>
      <CurrentUserProvider user={currentUser}>
      <Navigation />
         <div className="pt-16">{children}</div>
         </CurrentUserProvider>
       </body>
    </html>
  )
}
