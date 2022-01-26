import Head from 'next/head'
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Litmus() {
  return (
    <div className="case_study">
      <Head>
        <title>Litmus Case Study</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container">
        <Navbar />
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Litmus</h2>
          <p>Litmus is an experimentation platform designed for Gojek to try out new ideas and validate hypotheses. It helps the organisation in making data-informed decisions.<br/> This case study is about how we evolved a product by taking a user-centric approach.</p>
        </div>
        <div className="cover_image">
          <div className="cover_image_back"><Image src="/litmus/rules.png" width={798} height={608} /></div>
          <div className="cover_image_front"><Image src="/litmus/analysis.png" width={798} height={608} /></div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Background</h3>
          <p>In early 2019, a decision was made to build an in house experimentation platform so that people at Gojek can scientifically validate what works and what doesn’t. I got to know about this product on a fine morning when I was going through my emails and it was there in one of the product updates.</p>
          <p>You are not going to believe me but bam! 2 years later I was asked to lead a project and it was Litmus. So, this story starts from there 🙈</p>
          <p>I still remember <a href="https://www.ravisuhag.com/" target="_blank">Ravi Suhag</a> (VP of Data Engineering) briefing me about the project. In short, the product was in really bad shape from an adoption perspective and he wanted the design to help shape the next 1-year vision for Litmus.</p>
          <p>One thing was very clear from that conversation, many sleepless nights were knocking and we opened the door.</p>
          <div className="case_study_info">
            <div className="case_study_info_cell">
              <p>Role</p>
              <p>Design Lead</p>
            </div>
            <div className="case_study_info_cell">
              <p>Organisation</p>
              <p>Gojek</p>
            </div>
            <div className="case_study_info_cell">
              <p>Date</p>
              <p>2021 - Present</p>
            </div>
            <div className="case_study_info_cell">
              <p>Responsibilities</p>
              <p>Strategy, Research, Design, Testing</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="case_study_section">
        <div className="container">
          <h2>Knowing the unkowns</h2>
          <p>Without the pre-existing insights, we were in dangerous waters without any idea of in what direction we should take the product and where to start.</p>
          <p>That’s when we decided to plan a research exercise to understand users existing way of working, challenges, their expectations from an experimentation platform.</p>
          <p>We were hoping to get the answer to our biggest question -</p>
          <p className="highlight">“Why is this product at the edge of going down?”</p>
          <p>Finding the right people and asking the right questions is what leads to the real insights and for the next 3-4 weeks we interviewed 10-15 users across Product Managers, Engineers & Data Analysts.</p>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h3>User's Journey</h3>
            <p>This is what it looks like if we look at briefly over all the steps users have to go through during the course of experimentation.</p>
          </div>
          <div className="case_study_image litmus_journey"><Image src="/litmus/journey.png" width={1440} height={512} /></div>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h3>Pain Points</h3>
            <p>These are few of the pain points that were mentioned frequently</p>
            <div className="case_study_info pain_points">
              <div className="case_study_info_cell">
                <p>Platform was treated as a Config Service</p>
                <p>Litmus was not treated as a product and people were using it to define configurations for making updates in UI. It was a tool for developers.</p>
              </div>
              <div className="case_study_info_cell">
                <p>Users blocked on Access Management</p>
                <p>Only creator of an experiment can modify it so for all the access management related tasks users have to reach out to the service desk and wait for it to get resolved.</p>
              </div>
              <div className="case_study_info_cell">
                <p>The Platform require VPN to access</p>
                <p>Users require VPN before they could use Litmus & it was a hectic process to get VPN aceess. This was very painful to users & huge friction to product.</p>
              </div>
              <div className="case_study_info_cell">
                <p>Not Designed for everyone</p>
                <p>Litmus was not at all-inclusive, it was only designed for engineers that made it difficult to onboard PMs, Analysts & other stakeholders.</p>
              </div>
              <div className="case_study_info_cell">
                <p>Everyday dependency on Data Analysts</p>
                <p>Considering it was only designed for devs, there were lots of tasks that require PMs and Data Analysts like Sample Size required and Experiment reach to know when to finish or modify an experiment. This creates a lot of dependency on other stakeholders who have their own workarounds for certain tasks.</p>
              </div>
              <div className="case_study_info_cell">
                <p>The experiment result takes 4-6 days</p>
                <p>Once the experiment is finished, users have to wait for 4-6 days on average and sometimes even 10 days for Data Analysts to come back with an experiment result report so that the respective team can make a decision. This makes it more difficult and time-consuming and people were not thinking of running experiments at all.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Vision - defining the road ahead</h3>
          <p>After spending one month on the discovery phase, we had lots of information on our plate and it was time to assemble the avengers.</p>
          <p>We opened the great gates of Valhalla and invited the whole team to feast on the insights and to come up with strategies to butcher the problems we had in front of us.</p>
          <p>After the exchange of diverse thoughts over a 2-hour zoom call, with a common understanding that the product needs a course correction, we come up with a plan to fight the odds over the next 1 year period.</p>
          <p>To achieve this, we framed a few goals to guide us through this journey.</p>
          <ul>
            <li>The product should be <span>efficient.</span></li>
            <li>The product should be <span>inclusive.</span></li>
            <li>The product should be <span>progressive.</span></li>
            <li>The product should be <span>simple & useful.</span></li>
          </ul>
          <p>While writing this I can still feel the energy we had while stepping out of that call, it was like we were going on a Viking raid with Ragnar Lothbrok.</p>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}
