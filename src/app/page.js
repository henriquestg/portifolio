import { NavBar } from '@/components/NavBar'
import './page.scss'
import { Profile } from '@/components/Profile'

export default function Home() {
  return (
    <main>
        <NavBar />
        <Profile />
    </main>
  )
}
