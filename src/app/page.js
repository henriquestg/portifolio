import { NavBar } from '@/components/NavBar'
import './page.scss'
import { Profile } from '@/components/Profile'
import { Mytech } from '@/components/MyTech'
import { AboutMe } from '@/components/AboutMe'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <main>
        <NavBar />
        <Profile />
        <Mytech />
        <AboutMe />
        <Projects />
    </main>
  )
}
