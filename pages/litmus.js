import Head from 'next/head'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Litmus() {
  return (
    <div className="container">
      <Head>
        <title>Litmus Case Study</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div>
        <h1>Litmus</h1>
        <p>Litmus is an experimentation platform designed for Gojek to try out new ideas and validate hypothesis. It helps the organisation in making data informed decisions.</p>
        
      </div>
      
      <Footer />

      
    </div>
  )
}
