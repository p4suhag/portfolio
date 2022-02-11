import Head from 'next/head'
import Navbar from '/components/navbar';
import Footer from '/components/footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Cosmos() {
  return (
    <div className="case_study">
      <Head>
        <title>Cosmos Case Study</title>
        <meta name="description" content="Praveen Suhag's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="container">
        <Navbar />
      </div>

      <div className="case_study_section">
        <div className="container">
          <h2>Cosmos</h2>
          <p>Cosmos is a platform designed for Gojek to allow users to define, compute, explore and analyse quantified measures. Metrics and KPI’s are foundations for an OKR driven company. The ideology behind Cosmos is that you can’t make an organisation data-driven if people building experiences are not able to get their hands on information easily.</p>
        </div>
        <div className="cover_image">
          <div className="cover_image_back"><Image src="/cosmos/analysis.png" width={798} height={608} /></div>
          <div className="cover_image_front"><Image src="/cosmos/cube-schema.png" width={798} height={608} /></div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Background</h3>
          <p>This project was nothing more than a question in the beginning. A question to the system and the way everyone in that system works. It was curiosity that gave birth to this project and the question was regarding the way we approached metrics management at Gojek.</p>
          <p>This case study is about how we looked at existing methods of data analytics and metrics management to come up with something to make the life of many people at Gojek easy.</p>
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
              <p>July 2020 - Present</p>
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
          <h2>Discovery</h2>
          <p>Before we can jump to anything else let’s try to understand the existing system, our users, their pain points and requirements.</p>
          <p className="highlight">“Metrics are not just any data points, they are foundation of a data-driven company.”</p>
          <p>If metrics are influencing your decision then it became very important for you to trust that data. To answer if someone can trust this data, we need answers to - Who build it? Is it updated? Is there a process of validation?</p>
          <p>If you can’t get answer to these questions then no matter how sophisticated your analysis tools, dashboards or reports are, you won’t be able to build trust in those data points.</p>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h3>Users</h3>
            <p>On a high-level, there are two distinct sets of users who interact with metric flow. After having multiple conversation with each group we were able to craft major needs and pain points from them.</p>
          </div>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h4>Business Analysts</h4>
            <p>Business analysts are a group of individuals who are responsible for the metric definition, computation, and accuracy. They are domain-level experts who create and maintain the metric and are the point of contact for all things related to a metric.</p>
            <h5>Needs</h5>
            <ul>
              <li>Responsibility to create metric definition & its computation.</li>
              <li>Create dashboards and reports for product teams.</li>
              <li>Provide stories with narrative analysis.</li>
              <li>Help product & business teams with metric related questions to provide recommendations for growth.</li>
              <li>Responsible to create tables & working on raw data.</li>
            </ul>
            <h5>Pain Points</h5>
            <ul>
              <li>Exhausting process of managing metrics on a google sheet.</li>
              <li>Managing hundreds of dashboards and educating people about their existence.</li>
              <li>Handling all the burden of analysis requests from business and product.</li>
              <li>Nonstop back and forth communication on analysis reports.</li>
            </ul>
            <h5>Users Journey</h5>
            <p>The overall experience of business analysts can broadly be represented with the following three stages.</p>
          </div>
          <div className="case_study_image litmus_journey"><Image src="/cosmos/analyst-journey.png" width={1440} height={614} /></div>
          <div className="container">
            <p><strong>Define</strong> the metric definition and formula to keep it a single source of truth. This stage also captures the owners, data source, and other metadata of the metric as well.</p>
            <p><strong>Compute</strong> the metric using data processing tools. Computation requires analysts to write queries or formulas to calculate the metric in a standard way.</p>
            <p><strong>Analyze</strong> the metric by setting up intelligence on the metric using data tools. Some of the areas of intelligence can be reporting, anomaly, forecasting, and alerting.</p>
          </div>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h4>Business Owners</h4>
            <p>A group of individuals who want to stay up-to-date about the metrics and their behaviour: this group can be a superset of different roles within the organization like product teams, executives, corporate strategy, finance, etc. This group’s needs from the metric workflow can vary based on the use case, e.g., to just be informed about a metric, get alerted on any anomaly on a critical metric, analyze results of different experiments, etc.</p>
            <h5>Needs</h5>
            <ul>
              <li>Visibility on all the available metrics.</li>
              <li>Understanding the reasons behind metrics behaviour to replicate the success and to avoid failures.</li>
              <li>Mapping initiatives with outcomes to show the impact of those initiatives.</li>
              <li>Analysing different data points to make informed decisions.</li>
            </ul>
            <h5>Pain Points</h5>
            <ul>
              <li>Lack of trust and visibility on available metrics.</li>
              <li>Dependency on analysts for understanding metrics and their meta-data.</li>
              <li>Lack of certainty on what drove business performance.</li>
              <li>Dependency on data analysts to get answers to questions like ‘How this metric is performing for x user segment?’</li>
              <li>Time to insights is a drag in making data decisions.</li>
            </ul>
            <h5>Users Journey</h5>
            <p>The overall experience of business owners can broadly be represented with the following three stages.</p>
          </div>
          <div className="case_study_image litmus_journey"><Image src="/cosmos/business-journey.png" width={1440} height={614} /></div>
          <div className="container">
            <p><strong>Explore</strong> all the available metrics in the organization to know what metrics exist and which ones matter the most. It also allows users to browse through all defined metrics across the organization quickly.</p>
            <p><strong>Understand</strong> how the metric is defined. It also allows users to view metric details like formula, description, primary owner, and more.</p>
            <p><strong>Act</strong> on the metric insights to make data-driven business decisions. It empowers different methods to act on the metric.</p>
          </div>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h3>Existing Landscape</h3>
            <p>Before we start discussing the proposed solution let’s look into the existing toolset people are using to get things done.</p>
          </div>
          <div className="case_study_image litmus_journey"><Image src="/cosmos/existing-landscape.png" width={1440} height={840} /></div>
          <div className="container">
            <p>This is what the existing system looks like, each team manages their metrics independently on google sheets and those are being shared across each other.</p>
            <p>Metric definition and computational formulas are mentioned in these sheets along with other metadata information. Python scripts and Optimus are used for the computational purpose.</p>
            <p>For monitoring and visualisation, separate dashboards are created by each team using Tableau and Metabase.</p>
            <p>This was way more chaotic than it looks in the above visualisation. Here are a few of the challenges this system was causing - </p>
            <ul>
              <li>Finding a metric & understanding it was a real pain.</li>
              <li>Difficult to keep track of dashboards and which one is true.</li>
              <li>Dependency on analysts to move ahead.</li>
              <li>It’s hard to know what’s updated and what’s not</li>
              <li>Difficult to track who made the changes and why</li>
              <li>It’s hard to say if a metric is reliable or not</li>
              <li>Difficult to track duplication</li>
            </ul>
          </div>
        </div>
        <div className="case_study_sub_section">
          <div className="container">
            <h3>Proposed Landscape</h3>
            <p>We proposed a system design to solve all the existing challenges of metric management. It was thought in a way to be easily scaled and integrated with intelligence-related use cases.</p>
          </div>
          <div className="case_study_image litmus_journey"><Image src="/cosmos/proposed-landscape.png" width={1440} height={504} /></div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <h3>Vision - defining the road ahead</h3>
          <p>These goals highlight the characteristics of a scalable metric system</p>
          <ul>
            <li><span>Centralised - </span> A single source of truth for all metrics</li>
            <li><span>Reliable - </span> Reliable metrics that everyone can agree on.</li>
            <li><span>Accessible - </span> A single source for all your KPIs —when and where you need it most.</li>
            <li><span>Actionable - </span> Find answers to drive decisions</li>
          </ul>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/central.svg" width={96} height={66} /></div>
          <h3>Making it centralized</h3>
          <p>Historically, metrics and KPIs are managed locally, within individual groups, with little coordination. This has to be centralized so that everyone has a similar and monitored way of defining a metric and it’s accessible anywhere data is consumed.</p>
          <div className="case_study_sub_section">
            <h4>Defining a metric</h4>
            <p>With a central system, the experience of defining metrics became cohesive, efficient and easy to monitor. This approach helped owners to collaborate in a better way and remove the chances of duplication.</p>
            <div className="case_study_image"><Image src="/cosmos/metric-general.png" width={1040} height={790} /></div>
            <p className="m-top-m">Also, we provided a simple way of defining required conditions through the interface and based on that system generates the SQL Query. This saved a lot of time for data analysts because they used to write this query from scratch.</p>
            <div className="case_study_image"><Image src="/cosmos/metric-parameter.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/reliable.svg" width={96} height={66} /></div>
          <h3>Making it reliable</h3>
          <p>The most frequent and frustrating question is - ‘Can I trust this data?’ and as discussed before, to build that trust in our data, users need answers to - Who build it? When was it updated? Is there any approval process?</p>
          <p>Users goal is to make decisions based on analysis, not to verify the data itself.</p>
          <div className="case_study_sub_section">
            <h4>Defining metric formulas</h4>
            <p>Our system generates a schema from the tables available in data source, this let’s user define quantitative and categorical data. Here users can define filters and dimensions that can be used as exploratory properties.</p>
            <p>Our system explicitly provides visibility for all the information needed for someone to trust the data. Users can look into the formulas defined for a metric and how it’s calculated.</p>
            <div className="case_study_image"><Image src="/cosmos/cube-schema.png" width={1040} height={790} /></div>
          </div>
          <div className="case_study_sub_section">
            <h4>Audit History</h4>
            <p>The audit feature provides visibility into the evolution of a schema, what are all the changes made in the past and by whom. Allowing this to be managed like code, version control gives complete visibility and helps build the trust in data.</p>
            <div className="case_study_image"><Image src="/cosmos/cube-history.png" width={1040} height={790} /></div>
          </div>
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/accessible.svg" width={96} height={66} /></div>
          <h3>Making it accessible</h3>
          <p>Once the system is centralized and all the metrics are onboarded on to it, lot of day to day things become simple. Users don’t have to Slack people to ask where metrics are stored. If anyone has any question related to metrics they have one single place to look at and it’s cosmos. No more back and forth communication and requesting access to many google sheets.</p>
          <div className="case_study_image"><Image src="/cosmos/metric-list.png" width={1040} height={790} /></div>
          <div className="case_study_image"><Image src="/cosmos/metric-overview.png" width={1040} height={790} /></div>
          
        </div>
      </div>

      <div className="case_study_section">
        <div className="container">
          <div className="case_study_icons"><Image src="/action.svg" width={96} height={66} /></div>
          <h3>Making it actionable</h3>
          <p>The problem with the existing system was that it created a dependency on analysts to do exploratory analysis. Business owners couldn’t perform such actions without the knowledge of how to query.</p>
          <p>Making the data available to everyone, and free up data analysts to work on more crucial projects became very obvious. But we can not expect people to learn analytics skills so that they can navigate through this data.</p>
          <p>No, it has to be approached in a way that system take away that burden from users shoulder so that they can easily explore the data and get answers to their questions.</p>
          <p>We translated the raw data into simple and expressive experience for them to explore all the meta data or properties by selecting their rules and requirements.</p>
          <div className="case_study_image"><Image src="/cosmos/analysis.png" width={1040} height={790} /></div>
          
        </div>
      </div>

      <div className="case_study_section hide">
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