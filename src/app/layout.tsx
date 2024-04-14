import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/shared/navigation/Navigation'
import CurrentUserProvider from "@/context/CurrentUserContext";
import getCurrentUser from "@/actions/getCurrentUser";
import CreateChannelModalProvider from '@/context/CreateChannelModelContext';
import CreateChannelModel from '@/components/shared/Model/CreateChannelModel';
import { Toaster } from 'react-hot-toast';


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
        <CreateChannelModalProvider>
          <Toaster toastOptions={{position:"bottom-left"}}/>
          <CreateChannelModel/>
      <CurrentUserProvider user={currentUser}>
      <Navigation />
         <div className="pt-16">{children}</div>
         </CurrentUserProvider>
   
         </CreateChannelModalProvider>
       </body>
    </html>
  )
}
