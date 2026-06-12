"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  function toggleMobileNav() {
    var navLinks = document.getElementById("navbar_links_mobile"),
      navStyle = window.getComputedStyle(navLinks),
      navDisplay = navStyle.getPropertyValue("display");
    // window.addEventListener('resize', handleResize);
    if (navDisplay == "none") {
      document.getElementById("navbar_links_mobile").style.display = "flex";
    } else {
      document.getElementById("navbar_links_mobile").style.display = "none";
    }
  }

  function handleresize() {
    console.log("resize");
  }

  return (
    <div className="navbar">
      <Link
        href="/"
        className={
          pathname.includes("/case") ? "navbar_logo hide" : "navbar_logo"
        }
      >
        Praveen Suhag
      </Link>
      <Link
        href="/"
        className={pathname.includes("/case") ? "back_home" : "back_home hide"}
      >
        <div className="nav_back_icon">
          <Image alt="" src="/back_arrow.svg" width={24} height={24} />
        </div>
        <p>Back Home</p>
      </Link>
      <div className="navbar_links" id="navbar_links">
        <Link href="/" className={pathname == "/" ? "active" : ""}>
          Work
        </Link>
        <Link href="/bio" className={pathname == "/bio" ? "active" : ""}>
          Bio
        </Link>
        <Link
          href="/connect"
          className={pathname == "/connect" ? "active" : ""}
        >
          Connect
        </Link>
      </div>
      <div className="menu_icon" id="menu_icon" onClick={toggleMobileNav}>
        <Image alt="" src="/menu.svg" height={24} width={28} />
      </div>
      <div className="navbar_links_mobile" id="navbar_links_mobile">
        <div className="cross_icon" id="cross_icon" onClick={toggleMobileNav}>
          <Image alt="" src="/cross.svg" width={24} height={24} />
        </div>
        <Link
          href="/"
          className={pathname == "/" ? "active" : ""}
          onClick={toggleMobileNav}
        >
          About
        </Link>
        <Link
          href="/bio"
          className={pathname == "/bio" ? "active" : ""}
          onClick={toggleMobileNav}
        >
          Projects
        </Link>
        <Link
          href="/connect"
          className={pathname == "/connect" ? "active" : ""}
          onClick={toggleMobileNav}
        >
          Writing
        </Link>
        <Link
          href="/connect"
          className={pathname == "/connect" ? "active" : ""}
          onClick={toggleMobileNav}
        >
          Craft
        </Link>
      </div>
    </div>
  );
}
