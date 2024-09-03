import './globals.scss'
import { Inter } from 'next/font/google'
 
const inter = Inter({
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
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
