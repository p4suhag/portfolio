import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';


export default function Navbar() {
  const router = useRouter();
    
  function toggleMobileNav() {
    var navLinks = document.getElementById('navbar_links_mobile'),
      navStyle = window.getComputedStyle(navLinks),
      navDisplay = navStyle.getPropertyValue('display');
    // window.addEventListener('resize', handleResize);
    if (navDisplay == 'none') {
      document.getElementById('navbar_links_mobile').style.display = 'flex';
    } else {
      document.getElementById('navbar_links_mobile').style.display = 'none';
    }
  }

  function handleresize() {
    console.log('resize');
  }

  return (
    <div className="navbar">
      <Link href="/" legacyBehavior><p className={router.pathname.includes('/case') ? "navbar_logo hide" : "navbar_logo"}>Praveen Suhag</p></Link>
      <Link href="/" legacyBehavior>
        <div className={router.pathname.includes('/case') ? "back_home" : "back_home hide"} >
          <div className="nav_back_icon"><Image src="/back_arrow.svg" width={24} height={24} /></div>
          <p>Back Home</p>
        </div>
      </Link>
      <div className="navbar_links" id="navbar_links">
        <Link href="/" className={router.pathname == "/" ? "active" : ""}>Work</Link>
        <Link href="/bio" className={router.pathname == "/bio" ? "active" : ""}>Bio</Link>
        <Link href="/connect" className={router.pathname == "/connect" ? "active" : ""}>Connect</Link>
      </div>
      <div className="menu_icon" id="menu_icon" onClick={toggleMobileNav}><Image src="/menu.svg" height={24} width={28} /></div>
      <div className="navbar_links_mobile" id="navbar_links_mobile">
        <div className="cross_icon" id="cross_icon" onClick={toggleMobileNav}><Image src="/cross.svg" width={24} height={24} /></div>
        <Link
          href="/"
          className={router.pathname == "/" ? "active" : ""}
          onClick={toggleMobileNav}>Work</Link>
        <Link
          href="/bio"
          className={router.pathname == "/bio" ? "active" : ""}
          onClick={toggleMobileNav}>Bio</Link>
        <Link
          href="/connect"
          className={router.pathname == "/connect" ? "active" : ""}
          onClick={toggleMobileNav}>Connect</Link>
      </div>
    </div>
  );
}