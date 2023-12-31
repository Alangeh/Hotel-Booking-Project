import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'


const inter = Inter({ subsets: ['latin'] })
const font = Nunito({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: 'Lions Booker',
  description: 'Airbnb Clone',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
