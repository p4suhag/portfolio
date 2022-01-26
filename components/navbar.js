import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Navbar() {
  const router = useRouter();
  return (
    <div className="navbar">
      <p className={router.pathname == "/case/litmus" ? "navbar_logo hide" : "navbar_logo"}>Praveen Suhag</p>
      <Link href="/">
        <div className={router.pathname == "/case/litmus" ? "back_home" : "back_home hide"}>
          <div className="nav_back_icon"><Image src="/back_arrow.svg" width={24} height={24} /></div>
          <p>Back Home</p>
        </div>
      </Link>
      <div className="navbar_links">
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""}>Work</a></Link>
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""}>Bio</a></Link>
        <Link href="/connect"><a className={router.pathname == "/connect" ? "active" : ""}>Connect</a></Link>
      </div>
    </div>
  )
}