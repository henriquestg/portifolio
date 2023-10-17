import './globals.scss'
import { Roboto } from 'next/font/google'
 
const inter = Roboto({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Henrique Rigoni',
  description: 'Henrique Portifolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
