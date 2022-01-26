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

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/efficient.svg" width={96} height={66} /></div>
          <h3>Making it efficient</h3>
          <p>The most important resource to our users & business was time. It was a time of the pandemic and saving man-hour was definitely helping the company to reduce the cost.</p>
          <p>With a mindset to optimize our platform, we started with our very first feature.</p>
          <div className="case_study_sub_section">
            <h4>Easy Access</h4>
            <p>Can you imagine having a chat with the customer service desk before you can even start using a product, that’s a horrible experience and that’s exactly how our product was. Users have to ask the service desk to add them to the VPN list and then every time they have to open google authenticator, connect with VPN before they can see the first screen of Litmus.</p>
            <p>Just by talking about this experience is making me feel frustrated, that’s why the very first thing we did was to remove VPN dependency and introduced sign in with google.</p>
            <div className="case_study_image"><Image src="/litmus/login.png" width={1040} height={790} /></div>
          </div>
          <div className="case_study_sub_section">
            <h4>Access Management</h4>
            <p>Running an experiment is a team effort & require multiple stakeholders to play their part, but Litmus only allows the experiment creator to modify or take any actions on it.</p>
            <p>So, users started raising tickets to the service desk for such tasks & had to wait for it to resolve before they could do anything else on the experiment.</p>
            <p>This was creating an unnecessary workload on the service desk also. It was important to give users control over their experiment, for that we designed an access management feature on Litmus.</p>
            <p>Users can decide who can have access to their resources and what kind of actions they can perform, which gives them control and confidence.</p>
            <div className="case_study_image"><Image src="/litmus/iam.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/inclusive.svg" width={96} height={66} /></div>
          <h3>Making it inclusive</h3>
          <p>Good design keeps each individual in mind and makes sure to design a solution that serves everyone. Our insights had given clear points of exclusivity in our system and that’s exactly where we shifted our focus next.</p>
          <div className="case_study_sub_section">
            <h4>Sample Size Calculator</h4>
            <p>Before starting any experiment you need to know how many people experiment need to meet the desired statistical constraints. Users had their own workaround to figure that out.</p>
            <p>This has to be centralised so that for every experiment we can confidently say sample size was calculated with a trusted method. We designed a feature for users to do that on Litmus itself.</p>
            <div className="case_study_image"><Image src="/litmus/sample_size.png" width={1040} height={790} /></div>
          </div>
          <div className="case_study_sub_section">
            <h4>Experiment Reach</h4>
            <p>Only knowing the required sample size was not enough, once the experiment starts they need to track the reach of that experiment.</p>
            <p>PMs or analysts regularly query the data and analyse it, that’s a repetitive and time-consuming task.</p>
            <p>We aimed to automate this so that users can have visibility on experiment reach in real-time.</p>
            <div className="case_study_image"><Image src="/litmus/exp_reach.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/progressive.svg" width={96} height={66} /></div>
          <h3>Making it progressive</h3>
          <p>The most crucial part of experimentation is the analysis and figuring out its effect. This part of the journey has huge potential of impact and waiting to be explored.</p>
          <p>We knew working on a post-experiment use case will require huge effort but it was capable of bringing that change and helping us evolve experimentation at the organisation.</p>
          <p>To make our product powerful and inspiring we worked on two major features.</p>
          <div className="case_study_sub_section">
            <h4>Experiment Analysis</h4>
            <p>Once an experiment is finished, the product team request data analysts to analyse and create a report to know if they can make a decision statistically for their experiment.</p>
            <p>This whole process of raising tickets, analysis and reporting take 6-10 days.</p>
            <p>Imagine if we are able to scale experiments created at Gojek because that’s our goal, it will increase the data analyst workload also and that reporting time can go from 10 to 20 to 30 to unbearable workload in no time.</p>
            <p>It was clear this can not be done manually and needed a solution before this problem hit us in the face and that’s exactly what we did.</p>
            <div className="case_study_image"><Image src="/litmus/analysis.png" width={1040} height={790} /></div>
          </div>
          <div className="case_study_sub_section">
            <h4>Metric Performance</h4>
            <p>Any experiment requires analysis of multiple metrics, how they are behaving and affecting business or experiment hypothesis. This was another piece that was done manually with analysts dependency.</p>
            <p>We designed a solution to automate this so that users can have a real-time view of the metrics performance.</p>
            <div className="case_study_image"><Image src="/litmus/metric_perf.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/useful.svg" width={96} height={66} /></div>
          <h3>Making it simple & useful</h3>
          <p>A product should satisfy users needs and function in a way users expect it to. It should help users in achieving their goals and eliminate all unnecessary elements from the system. It should be self-explanatory and at the same time aesthetically pleasing.</p>
          <div className="case_study_sub_section">
            <h4>Segmentation Rules</h4>
            <p>It’s very important that the product is obvious in nature and users can easily perform tasks without any anxiety or friction.</p>
            <p>Defining segmentation rules in Litmus was a real pain, they have to go through the documentation to learn the syntax and what all they add in there.</p>
            <p>To make it even worse our system didn’t even provide error validation.</p>
            <p>We simplify the experience so that this burden can be removed from users shoulders and the system can take care of it.</p>
            <div className="case_study_image"><Image src="/litmus/rules.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/impact.svg" width={96} height={66} /></div>
          <h3>Impact</h3>
          <p>We noticed positive results with the above solutions in terms of quantitative and qualitative data. We started getting lots of feedback & feature requests from product groups to help them with running experiments.</p>
          <ul>
            <li>Increased CSAT score by 30% & NPS by 20%</li>
            <li>Saved 40k hours on experiment analysis in 6 months.</li>
            <li>Monthly Active Experiment increased by 32%.</li>
          </ul>
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
      
    </div>
  )
}
