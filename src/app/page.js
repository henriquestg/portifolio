import { NavBar } from '@/components/NavBar'
import './page.scss'
import { Profile } from '@/components/Profile'
import { Mytech } from '@/components/MyTech'

export default function Home() {
  return (
    <main>
        <NavBar />
        <Profile />
        <Mytech />
    </main>
  )
}
