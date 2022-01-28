import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="work_page">
      <Head>
        <title>Praveen Suhag</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className="container"><Navbar /></div>

      <main>
        <div className="work_cover">
          <h1 className="work_title">I’m an experience designer advocating for user-centric data products.</h1>  
        </div>
        
        <div className="container">
          <div className="project_tile litmus_cover">
            <div className="project_tile_content">
              <h2>Litmus</h2>
              <p>Litmus is an experimentation platform designed to solve use case of running experiments across Gojek.</p>
              <Link href="/case/litmus">
                <span className="case_study_button">
                  <p>Open Case Study</p>
                  <div className="case_study_button_icon"><Image src="/forward_arrow.svg" width={24} height={24}/></div>
                </span>
              </Link>
            </div>
            <div className="project_tile_image">
              <Image src="/litmus/analysis.png" width={640} height={486} />
            </div>
          </div>

          <div className="project_tile cosmos_cover">
            <div className="project_tile_content">
              <h2>Cosmos</h2>
              <p>Cosmos is a platform designed to solve metrics and analytics related use cases.</p>
              <Link href="/case/cosmos">
                <span className="case_study_button">
                  <p>Open Case Study</p>
                  <div className="case_study_button_icon"><Image src="/forward_arrow.svg" width={24} height={24}/></div>
                </span>
              </Link>
            </div>
            <div className="project_tile_image">
              <Image src="/litmus/exp_reach.png" width={640} height={486} />
            </div>
          </div>

          <div className="project_tile console_cover">
            <div className="project_tile_content">
              <h2>Console</h2>
              <p>Data Console is a platform designed to solve all data needs across Gojek and make it self serve for everyone.</p>
              <Link href="/case/console">
                <span className="case_study_button">
                  <p>Open Case Study</p>
                  <div className="case_study_button_icon"><Image src="/forward_arrow.svg" width={24} height={24}/></div>
                </span>
              </Link>
            </div>
            <div className="project_tile_image">
              <Image src="/litmus/rules.png" width={640} height={486} />
            </div>
          </div>
        </div>
          
      </main>

      <div className="container"><Footer /></div>

      
    </div>
  )
}
