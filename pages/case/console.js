import Head from 'next/head'
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Console() {
  return (
    <div className="case_study">
      <Head>
        <title>Console Case Study</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container">
        <Navbar />
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Console</h2>
          <p>This project is under NDA, please reach out to <span>p4suhag@gmail.com</span> to know more about it.</p>
        </div>
      </div>

      

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}