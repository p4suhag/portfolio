import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar';
import SocialIcons from '../components/socialicons';


export default function Connect() {
  return (
    <div className="container">
      <Head>
        <title>Praveen Suhag - Connect</title>
        <meta name="description" content="Praveen Suhag's Contact" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="connect">
        <div className="connect_content">
          <h1>Let's get in touch</h1>
          <p>Say hello at: <span> p4suhag@gmail.com</span></p>
          <p>I like to meet people and make meaningful connections. Feel free to reach out to discuss something or just a friendly hello.</p>
          <SocialIcons />
        </div>
        <div className="telephone_container">
          <Image className="telephone" src="/telephone.svg" width={240} height={180} />
        </div>
        
      </div>
    </div>
  )
}