import Head from 'next/head'
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Apsara() {
  return (
    <div className="case_study">
      <Head>
        <title>Apsara Design System</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container">
        <Navbar />
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Apsara</h2>
          <p>Apsara is a Design System created to power the projects of the Open DataOps Foundation. It helps manage design at scale and provides a cohesive experience across all data products.</p>
          <div className="case_study_image"><Image src="/apsara/banner.png" width={1040} height={790} /></div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Why use a Design System?</h3>
          <p>The scale and speed at which data products were growing also required a continuous and faster way of delivering UI screens. Every single product in ODPF have a handful of screens and use cases so to fulfil this gap and other benefits a design system brings to the table we started Apsara.</p>
          <p>These are few of the benefits a design system provides:</p>
          <ul>
            <li>Provides a cohesive experience across products.</li>
            <li>Design and development work can be created quickly.</li>
            <li>Reusable components allow the team to focus on more complex problems.</li>
          </ul>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Principles</h3>
          <p>These are the guiding principles that help us on our journey.</p>
          <div className="case_study_info pain_points">
            <div className="case_study_info_cell">
              <p>Human</p>
              <p>We aim to provide a sense of joy by placing customer needs first. We are committed to solving the right problem in the simplest way possible.</p>
            </div>
            <div className="case_study_info_cell">
              <p>Clear</p>
              <p>We aim to provide clarity and focus to our users. No unnecessary element or fancy behaviour to distract a user from what’s important.</p>
            </div>
            <div className="case_study_info_cell">
              <p>Efficient</p>
              <p>Time is very precious and we aim to design our system to reuse, collaborate & build efficiently.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Colors</h3>
          <p>Apsara colors are designed to be clear and accessible available in light and dark themes. It includes a set of custom colors for data representation use case.</p>
          <p>Colors are defined as base color like primary, secondary, primary container, error and then there is color defined for content that sits on top of base color like on primary, on secondary, on error etc. This takes care of colors accessibility and maintains high standards.</p>
          <div className="case_study_sub_section">
            <h5>Light Theme</h5>
            <div className="color_card_container">
              <img src="/apsara/light/card1.svg" />
              <img src="/apsara/light/card2.svg" />
              <img src="/apsara/light/card3.svg" />
              <img src="/apsara/light/card4.svg" />
              <img src="/apsara/light/card5.svg" />
              <img src="/apsara/light/card6.svg" />
              <img src="/apsara/light/card7.svg" />
              <img src="/apsara/light/card8.svg" />
              <img src="/apsara/light/card9.svg" />
              <img src="/apsara/light/card10.svg" />
              <img src="/apsara/light/card11.svg" />
              <img src="/apsara/light/card12.svg" />
              <img src="/apsara/light/card13.svg" />
              <img src="/apsara/light/card14.svg" />
              <img src="/apsara/light/card15.svg" />
              <img src="/apsara/light/card16.svg" />
              <img src="/apsara/light/card17.svg" />
              <img src="/apsara/light/card18.svg" />
              <img src="/apsara/light/card19.svg" />
              <img src="/apsara/light/card20.svg" />
              <img src="/apsara/light/card21.svg" />
              <img src="/apsara/light/card22.svg" />
              <img src="/apsara/light/card23.svg" />
            </div>
          </div>
          <div className="case_study_sub_section">
            <h5>Dark Theme</h5>
            <div className="color_card_container">
              <img src="/apsara/dark/card1.svg" />
              <img src="/apsara/dark/card2.svg" />
              <img src="/apsara/dark/card3.svg" />
              <img src="/apsara/dark/card4.svg" />
              <img src="/apsara/dark/card5.svg" />
              <img src="/apsara/dark/card6.svg" />
              <img src="/apsara/dark/card7.svg" />
              <img src="/apsara/dark/card8.svg" />
              <img src="/apsara/dark/card9.svg" />
              <img src="/apsara/dark/card10.svg" />
              <img src="/apsara/dark/card11.svg" />
              <img src="/apsara/dark/card12.svg" />
              <img src="/apsara/dark/card13.svg" />
              <img src="/apsara/dark/card14.svg" />
              <img src="/apsara/dark/card15.svg" />
              <img src="/apsara/dark/card16.svg" />
              <img src="/apsara/dark/card17.svg" />
              <img src="/apsara/dark/card18.svg" />
              <img src="/apsara/dark/card19.svg" />
              <img src="/apsara/dark/card20.svg" />
              <img src="/apsara/dark/card21.svg" />
              <img src="/apsara/dark/card22.svg" />
              <img src="/apsara/dark/card23.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Typography</h2>
          <p>Typography helps present content clearly and efficiently. It brings consistency across products & platforms.</p>
          <div className="case_study_image"><Image src="/apsara/typography.svg" width={1040} height={790} /></div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Components</h2>
          <p>Components are like building blocks, when combined together they make patterns, templates and screens. Every component is designed in a way to provide full flexibility and control to users.</p>
          <div className="component_card_container">
            <img src="/apsara/component/button.svg" />
            <img src="/apsara/component/avatar.svg" />
            <img src="/apsara/component/input.svg" />
            <img src="/apsara/component/checkbox.svg" />
            <img src="/apsara/component/radio.svg" />
            <img src="/apsara/component/switch.svg" />
            <img src="/apsara/component/slider.svg" />
            <img src="/apsara/component/dropdown.svg" />
            <img src="/apsara/component/chips.svg" />
            <img src="/apsara/component/tabs.svg" />
          </div>
          <p>We are working on patterns, templates and elements for data visualisation. Stay tuned and check out the project on <a href="https://github.com/odpf/apsara" target="_blank">Github.</a></p>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}