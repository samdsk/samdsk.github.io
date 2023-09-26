import '../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome | Sam. K.',
  description: 'Sam. K. github page.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500'>{children}</body>
    </html>
  )
}
