import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Navbar() {
  const router = useRouter();
    
  function toggleMobileNav() {
    var navLinks = document.getElementById('navbar_links_mobile'),
      navStyle = window.getComputedStyle(navLinks),
      navDisplay = navStyle.getPropertyValue('display');
    
    if (navDisplay == 'none') {
      document.getElementById('navbar_links_mobile').style.display = 'flex';
    } else {
      document.getElementById('navbar_links_mobile').style.display = 'none';
    }
  }

  return (
    <div className="navbar">
      <Link href="/"><p className={router.pathname.includes('/case') ? "navbar_logo hide" : "navbar_logo"}>Praveen Suhag</p></Link>
      <Link href="/">
        <div className={router.pathname.includes('/case') ? "back_home" : "back_home hide"} >
          <div className="nav_back_icon"><Image src="/back_arrow.svg" width={24} height={24} /></div>
          <p>Back Home</p>
        </div>
      </Link>
      <div className="navbar_links" id="navbar_links">
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""} >Work</a></Link>
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""} >Bio</a></Link>
        <Link href="/connect"><a className={router.pathname == "/connect" ? "active" : ""} >Connect</a></Link>
      </div>
      <div className="menu_icon" id="menu_icon" onClick={toggleMobileNav}><Image src="/menu.svg" height={24} width={28} /></div>
      <div className="navbar_links_mobile" id="navbar_links_mobile">
        <div className="cross_icon" id="cross_icon" onClick={toggleMobileNav}><Image src="/cross.svg" width={24} height={24} /></div>
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""} onClick={toggleMobileNav} >Work</a></Link>
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""} onClick={toggleMobileNav} >Bio</a></Link>
        <Link href="/connect"><a className={router.pathname == "/connect" ? "active" : ""} onClick={toggleMobileNav} >Connect</a></Link>
      </div>
    </div>
  )
}