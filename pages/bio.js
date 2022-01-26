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
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />
      <div className="bio_headline">
        <h1>Designer / Developer / Dendrophile</h1>
        <p>Namaste! I am <span>Praveen Suhag.</span></p>
      </div>
      <div className="bio">
        <div className="bio_content">
          <p>I’m a <span>product designer</span> creating lucid, pragmatic, and delightful user experiences.</p>
          <p>Design is, for me, an <span>‘intention’</span> to achieve a unique expectation.</p>
          <p>I grew up in a small town in <span>India</span> surrounded by farmland, largely exploring the outdoors and gaining free-ranging insights about nature. This profound affinity developed a <span>creative expression</span> in me providing a sense of identity and belonging within the grand world of existence. Driven by the imagination of a creative world, I was drawn to make connections between facts and possibilities, thereby pursuing an <span>engineering degree.</span></p>
          <p>After graduation, I set out my career as a freelance <span>front-end developer,</span> simultaneously evolving as a designer by crafting product experiences.</p>
          <p>In 2017, I joined <span>Gojek,</span> Indonesia’s largest hyper-local company, with the responsibility to <span>lead motion and prototyping</span> for 20+ products serving millions of customers across Transport, Food, Payments, and Entertainment. This role involved building a team from ground up, laying its foundation and principles.</p>
          <p>Equipped with complementing skills of interface design, motion design, and technology, I was approached to solve the unique challenges of building a large-scale data platform within Gojek, in 2019. Since then, I am <span>leading the data experience team</span> to design Enterprise, Experimentation, Analytics, and Customer data platforms. These platforms empower the Gojek workforce to make data-driven decisions.</p>
          
          <p>It’s been a stellar ride so far, and I’ve had the opportunity to work with some remarkable individuals. I am excited to see what lies ahead.</p>
          
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