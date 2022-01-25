import Link from 'next/link'
import Image from 'next/image'
import SocialIcons from '../components/socialicons';


export default function Footer() {
  return (
    <div className="footer">
      <p>Code and pixed by Praveen Suhag</p>
      <SocialIcons />   
    </div>
  )
}