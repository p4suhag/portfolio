import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import Navbar from '../components/navbar';
import Footer from '../components/footer';


export default function Bio() {
  function changeTestimony(e) {
    var item_number = e.target.attributes['data-number'].value;
    var parent_elem = e.target.parentElement.parentElement;
    var faces_items = document.getElementsByClassName('faces');
    for (var i = faces_items.length - 1; i >= 0; i--) {
      faces_items[i].classList.remove("thumbnail_active");
    }
    var testimony = {
      1: {
        name: 'Bhawna Joshi',
        role: 'Product Designer at Gojek',
        body: 'Praveen in one word is a perfectionist. He is very passionate about problem solving as a whole. For him its never about finishing a task it’s about conquering it. He also a visionary who knows where to take a product. I personally have learnt a lot, because he makes sure others also get the benefits of his knowledge. He is a humble collaborator who is patient with you. He also makes sure others understand his intentions are to genuinely help the product grow. That makes anyone trust his work.',
        img: '/testimony/bhawna.png'
      },
      2: {
        name: 'Roy Hemsworth',
        role: 'Design Manager at Gojek',
        body: 'Praveen Suhag is an illustrator who thinks like a computer, who works with machine-like precision but with the heart of a human being. She’s living in the modern world, using what her hands do best and making this wonderful synthesis, a precise blend.',
        img: '/testimony/face2.png'
      },
      3: {
        name: 'William Stark',
        role: 'Product Manager at Gojek',
        body: 'If you’re looking for an exceptional product designer, I highly recommend reaching out to Praveen. He’s been a great extension of our team, and has already delivered a ton of great ideas and concepts in a short amount of time. He’s hardworking, creative, and most importantly a joy to work with.',
        img: '/testimony/face3.png'
      },
      4: {
        name: 'Bhawna Joshi',
        role: 'Product Designer at Gojek',
        body: 'Praveen in one word is a perfectionist. He is very passionate about problem solving as a whole. For him its never about finishing a task it’s about conquering it. He also a visionary who knows where to take a product. I personally have learnt a lot, because he makes sure others also get the benefits of his knowledge. He is a humble collaborator who is patient with you. He also makes sure others understand his intentions are to genuinely help the product grow. That makes anyone trust his work.',
        img: '/testimony/bhawna.png'
      },
      5: {
        name: 'Vidya Mandir',
        role: 'Engineering at Gojek',
        body: 'If you’re looking for an exceptional product designer, I highly recommend reaching out to Praveen. He’s been a great extension of our team, and has already delivered a ton of great ideas and concepts in a short amount of time. He’s hardworking, creative, and most importantly a joy to work with.',
        img: '/testimony/face5.png'
      }
    }


    document.getElementById("testimony_content_name").innerHTML = testimony[item_number].name;
    document.getElementById("testimony_content_role").innerHTML = testimony[item_number].role;
    document.getElementById("testimony_content_body").innerHTML = testimony[item_number].body;
    parent_elem.classList.add("thumbnail_active");

    document.getElementById("testimony_content_face_custom").src = testimony[item_number].img;
    
  }


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
          <div className="faces thumbnail_active" onClick={changeTestimony}><Image src="/testimony/bhawna.png" height={40} width={40} className="custom_face" data-number="1"/></div>
          <div className="faces" onClick={changeTestimony}><Image src="/testimony/face2.png" height={40} width={40} className="custom_face" data-number="2"/></div>
          <div className="faces" onClick={changeTestimony}><Image src="/testimony/face3.png" height={40} width={40} className="custom_face" data-number="3"/></div>
          <div className="faces" onClick={changeTestimony}><Image src="/testimony/face2.png" height={40} width={40} className="custom_face" data-number="4"/></div>
          <div className="faces" onClick={changeTestimony}><Image src="/testimony/face5.png" height={40} width={40} className="custom_face" data-number="5"/></div>
        </div>
        <div className="testimony_content">
          <div className="testimony_content_header">
            <div className="testimony_content_face"><img src="/testimony/bhawna.png" height={80} width={80} className="testimony_content_face_custom" id="testimony_content_face_custom" /></div>
            <div>
              <p className="testimony_content_name" id="testimony_content_name">Jennie Ruby Jane</p>
              <p className="testimony_content_role" id="testimony_content_role">Design Lead at Gojek</p>
            </div>
          </div>
          <p className="testimony_content_body" id="testimony_content_body">If you’re looking for an exceptional product designer, I highly recommend reaching out to Praveen. He’s been a great extension of our team, and has already delivered a ton of great ideas and concepts in a short amount of time. He’s hardworking, creative, and most importantly a joy to work with.</p>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}