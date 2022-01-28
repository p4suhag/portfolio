import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Navbar() {
  const router = useRouter();
  // var navLinks = document.getElementById('navbar_links'),
  //     navStyle = window.getComputedStyle(navLinks),
  //     navDisplay = navStyle.getPropertyValue('display');
  
  function test() {
    var navLinks = document.getElementById('navbar_links'),
      navStyle = window.getComputedStyle(navLinks),
      navDisplay = navStyle.getPropertyValue('display');
    
    if (navDisplay == 'none') {
      document.getElementById('navbar_links').style.display = 'flex';
    } else {
      document.getElementById('navbar_links').style.display = 'none';
    }
  }

  function closeNavbar() {
    document.getElementById('navbar_links').style.display = 'none';
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
        <div className="cross_icon" id="cross_icon" onClick={test}><Image src="/cross.svg" width={24} height={24} /></div>
        <Link href="/"><a className={router.pathname == "/" ? "active" : ""} onClick={test} >Work</a></Link>
        <Link href="/bio"><a className={router.pathname == "/bio" ? "active" : ""} onClick={test} >Bio</a></Link>
        <Link href="/connect"><a className={router.pathname == "/connect" ? "active" : ""} onClick={test} >Connect</a></Link>
      </div>
      <div className="menu_icon" id="menu_icon" onClick={test}><Image src="/menu.svg" height={24} width={28} /></div>
    </div>
  )
}