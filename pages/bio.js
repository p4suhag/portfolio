import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Bio() {
  return (
    <div className="container bio_page">
      <Head>
        <title>Praveen Suhag - Bio</title>
        <meta name="description" content="Praveen Suhag's Bio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="bio_headline">
        <h1>Designer / Tinkerer / Absurdist</h1>
        <p>Namaste! I am <span>Praveen Suhag.</span></p>
      </div>
      <div className="bio">
        <div className="bio_content">
          <p>I’m a <span>product designer</span> creating thoughtful experiences which are simple and delightful.</p>
          <p>I am from a small town in <span>India,</span> with a background in electronic engineering. After graduation I started my career as a freelance <span>front-end developer</span> for a year and then somehow evolved into a designer.</p>
          <p>In 2017, I started my full time role as a <span>motion designer</span> at <span>Gojek</span> with the responsibility to evolve motion & prototyping at the organisation.</p>
          <p>After leading motion design for 2 years, my curious soul and challenges data engineering team at Gojek had on their plate inspired me to explore new dimensions.</p>
          <p>Since then, I am <span>leading data experience team</span> at Gojek to build user-centric data products.</p>
          <p>After leading motion design for 2 years, my curious soul and challenges data engineering team at Gojek had on their plate inspired me to explore new dimensions.</p>
          <p>In 2017, I started my full time role as a <span>motion designer</span> at <span>Gojek</span> with the responsibility to evolve motion & prototyping at the organisation.</p>
        </div>
        <div className="dp_container">
          <div className="dp"></div>
        </div>  
      </div>
      <div className="sun"><Image src="/sun.svg" width={160} height={158} /></div>
      <div className="testimony">
        <h4>What others say</h4>
        <div className="testimony_thumbnails">
          <div className="faces thumbnail_active"><Image src="/testimony/face1.png" height={40} width={40} className="custom_face" /></div>
          <div className="faces"><Image src="/testimony/face2.png" height={40} width={40} className="custom_face" /></div>
          <div className="faces"><Image src="/testimony/face3.png" height={40} width={40} className="custom_face" /></div>
          <div className="faces"><Image src="/testimony/face4.png" height={40} width={40} className="custom_face" /></div>
          <div className="faces"><Image src="/testimony/face5.png" height={40} width={40} className="custom_face" /></div>
        </div>
        <div className="testimony_content">
          <div className="testimony_content_header">
            <div className="testimony_content_face"><Image src="/testimony/face1.png" height={80} width={80} className="testimony_content_face_custom" /></div>
            <div>
              <p className="testimony_content_name">Jennie Ruby Jane</p>
              <p className="testimony_content_role">Design Lead at Gojek</p>
            </div>
          </div>
          <p className="testimony_content_body">If you’re looking for an exceptional product designer, I highly recommend reaching out to Praveen. He’s been a great extension of our team, and has already delivered a ton of great ideas and concepts in a short amount of time. He’s hardworking, creative, and most importantly a joy to work with.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}