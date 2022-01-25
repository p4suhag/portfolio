import Link from 'next/link'
import Image from 'next/image'


export default function SocialIcons() {
  return (
    <div className="social_links">
        <a href="https://dribbble.com/p4suhag" target="_blank"><Image src="/social/dribbble.svg" height={20} width={20} /></a>
        <a href="https://twitter.com/p4suhag" target="_blank"><Image src="/social/twitter.svg" height={20} width={20} /></a>
        <a href="https://www.linkedin.com/in/p4suhag/" target="_blank"><Image src="/social/linkedin.svg" height={20} width={20} /></a>
        <a href="https://www.instagram.com/p4suhag/" target="_blank"><Image src="/social/instagram.svg" height={20} width={20} /></a>
        <a href="https://github.com/p4suhag" target="_blank"><Image src="/social/github.svg" height={20} width={20} /></a>
    </div>
    
  )
}