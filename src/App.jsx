import React, { useMemo, useState } from "react";
import "./index.css";

const nav = [
  ["Home", "home"],
  ["Call for Papers", "cfp"],
  ["Submission", "submission"],
  ["Committees", "committees"],
  ["Program", "program"],
  ["Previous Editions", "history"],
];

const importantDates = [
  {
    label: "Paper Submission",
    date: "June 26, 2026",
    note: "Submission deadline",
  },
  {
    label: "Acceptance Notification",
    date: "Aug 15, 2026",
    note: "Author notification",
  },
  {
    label: "Camera Ready",
    date: "Aug 30, 2026",
    note: "Final version due",
  },
  {
    label: "Workshop",
    date: "October 30, 2026",
    note: "Workshop day",
  },
];

const topics = [
  "New architecture/communication protocols for drone-based 5G communications",
  "Channel modelling for drone-ground and drone-drone communications",
  "Simple, scalable and cost effective solutions for drone communications",
  "Massive MIMO based backhaul solutions",
  "Resource management and security mechanisms for drone enabled networking",
  "SDN and NFV based backhaul architectures",
  "Data offloading schemes for heterogeneous small cell networks",
  "Resource scheduling in backhaul networks",
  "Cutting-edge solutions for drone assisted heterogeneous networks",
  "Standardization efforts and testbeds for drone communication systems",
  "Game theoretical approaches for drone based 5G communications",
  "New trends in backhauling",
  "AI and ML based architectures for dynamic routing in drone communications",
  "Authentication and Accounting for drone aided 5G communications",
  "Energy-aware drone deployment and operation mechanisms",
  "Interference management techniques for aerial platforms",
  "Use cases, testing and field trials for drone assisted 5G communications",
  "Other applications/implementations for integrating drones into 5G and beyond",
];

const organizers = [
  {
    name: "Sahil Garg",
    affiliation: "Canadian University Dubai, UAE",
    email: "sahil.garg@cud.ac.ae",
  },
  {
    name: "Fabrizio Granelli",
    affiliation: "University of Trento, Italy",
    email: "fabrizio.granelli@unitn.it",
  },
  {
    name: "Ranga Rao Venkatesha Prasad",
    affiliation: "Delft University of Technology, The Netherlands",
    email: "r.r.venkateshaprasad@tudelft.nl",
  },
  {
    name: "Bong Jun Choi",
    affiliation: "Soongsil University, Seoul, South Korea",
    email: "davidchoi@soongsil.ac.kr",
  },
];

const tpcCoChairs = [
  {
    name: "Kuljeet Kaur",
    affiliation: "École de Technologie Supérieure, Montreal, Canada",
  },
  {
    name: "Sherif Moussa",
    affiliation: "Canadian University Dubai, UAE",
  },
];

const publicityOutreachChairs = [
  {
    name: "Tamer Mohamed",
    affiliation: "Canadian University Dubai, UAE",
  },
];

const technicalProgramCommittee = [
  {
    name: "Syed Hassan Shah",
    affiliation: "Infineon Technologies, United States",
  },
  {
    name: "Abbas Bradai",
    affiliation: "Université Côte d’Azur, France",
  },
  {
    name: "Shahid Mumtaz",
    affiliation: "Nottingham Trent University, United Kingdom",
  },
  {
    name: "Biplab Sikdar",
    affiliation: "National University of Singapore, Singapore",
  },
  {
    name: "Jia Hu",
    affiliation: "University of Exeter, United Kingdom",
  },
  {
    name: "Georges Kaddoum",
    affiliation: "École de technologie supérieure, Canada",
  },
  {
    name: "Brij B. Gupta",
    affiliation: "Asia University, Taiwan",
  },
  {
    name: "Ali Kashif Bashir",
    affiliation: "Manchester Metropolitan University, United Kingdom",
  },
  {
    name: "Keping Yu",
    affiliation: "Hosei University, Japan",
  },
  {
    name: "Anubhav Bhatia",
    affiliation: "SAP Labs LLC, Palo Alto, California",
  },
  {
    name: "Gwanggil Jeon",
    affiliation: "Incheon National University, South Korea",
  },
];

const webCoordinators = [
  {
    name: "Nathan Kahsay",
    affiliation: "Canadian University Dubai, UAE",
  },
];

const previousEditions = [
  {
    edition: "1st International Workshop",
    title: "Drone-Assisted Smart Backhaul Solutions for 5G and Beyond",
    venue: "IEEE INFOCOM 2020",
    location: "Virtual Event",
    date: "6–9 July 2020",
    link: "https://infocom2020.ieee-infocom.org/workshop-drone-assisted-smart-backhaul-solutions-5g-and-beyond",
  },
  {
    edition: "2nd International Workshop",
    title: "Drone-Assisted Smart Backhaul Solutions for 5G and Beyond",
    venue: "ACM MobiCom 2020",
    location: "Virtual Event",
    date: "21–25 September 2020",
    link: "https://sigmobile.org/mobicom/2020/workshops.php",
  },
  {
    edition: "3rd International Workshop",
    title: "Drone-Assisted Wireless Communications for 5G and Beyond",
    venue: "IEEE INFOCOM 2021",
    location: "Virtual Event",
    date: "10–13 May 2021",
    link: "https://infocom2021.ieee-infocom.org/3rd-international-workshop-drone-assisted-wireless-communications-5g-and-beyond",
  },
  {
    edition: "4th International Workshop",
    title: "Drone-Assisted Wireless Communications for 5G and Beyond",
    venue: "ACM MobiCom 2021",
    location: "New Orleans, United States",
    date: "28 March – 1 April 2022",
    link: "https://sigmobile.org/mobicom/2021/workshop_program.html",
  },
  {
    edition: "5th International Workshop",
    title: "Drone-Assisted Wireless Communications for 5G and Beyond",
    venue: "ACM MobiCom 2022",
    location: "Sydney, Australia",
    date: "17–21 October 2022",
    link: "https://www.sigmobile.org/mobicom/2022/workshop_program.html",
  },
  {
    edition: "6th International Workshop",
    title: "Drone-Assisted Wireless Communications for 5G and Beyond",
    venue: "IEEE INFOCOM 2024",
    location: "Vancouver, Canada",
    date: "20–23 May 2024",
    link: "https://infocom2024.ieee-infocom.org/7th-international-workshop-drone-assisted-wireless-communications-5g-and-beyond-dronecom-call-papers",
  },
];

const programItems = [
  {
    time: "08:30–08:45",
    title: "Welcome and Opening Remarks",
    type: "Opening",
    details: "Workshop Organizers",
  },
  {
    time: "08:45–09:45",
    title: "Keynote 1",
    type: "Keynote",
    details: "Speaker TBD",
  },
  {
    time: "09:45–10:15",
    title: "Coffee and Networking",
    type: "Break",
    details: "Networking break",
  },
  {
    time: "10:15–11:15",
    title: "Session 1: Drone Security and Attack Detection",
    type: "Technical Session",
    details: "Full paper presentation + Q&A (20 min each)",
    papers: [
      {
        title:
          "Attention-Guided UAV Intrusion Detection with BSO-Based Feature Selection",
        authors:
          "Akshat Gaurav (Asia University); Varsha Arya (Hong Kong Metropolitan University); Ching-Hsien Hsu (Asia University); Kwok Tai Chui (Hong Kong Metropolitan University); Brij B. Gupta (Asia University)",
      },
      {
        title:
          "PDT-TCN: Prefix-Drop Temporal Convolutional Networks for Early Attack Detection in UAV-GCS Communications",
        authors:
          "Jakub Siłka, Michał Wieczorek, Marcin Woźniak (Silesian University of Technology)",
      },
      {
        title:
          "GNSS-Spoofing-Resilient Drone-Assisted 5G Backhaul via Cooperative Detection and Adaptive Link Reconfiguration",
        authors:
          "Abima Obim Abima, Ali Kashif Bashir, Sara Holm, Muhammad Atif Ur Rehman (Manchester Metropolitan University); MD. Israfil Biswas (University of Bedfordshire); Alex Akinbi (Manchester Metropolitan University)",
      },
    ],
  },
  {
    time: "11:15–12:15",
    title: "Session 2: Trust, Authentication and Resilient Drone Control",
    type: "Technical Session",
    details: "Full paper presentation + Q&A (20 min each)",
    papers: [
      {
        title:
          "Measuring the Safety of Drone Command-and-Control under Link Degradation",
        authors:
          "Hannaneh B. Pasandi (UC Berkeley); Mohammad Sepahi (Old Dominion University, Rivian Inc.)",
      },
      {
        title:
          "Post-Quantum Safe Isogeny-Based Authenticated Key Establishment Protocol for Drones-Assisted 6G-Enabled Smart City Environments",
        authors:
          "Debnath Ghosh (International Institute of Information Technology, Hyderabad); Basudeb Bera (National University of Singapore); Ashok Kumar Das (International Institute of Information Technology, Hyderabad); Biplab Sikdar (National University of Singapore)",
      },
      {
        title:
          "Multi-Factor Trust and Access Control in Drone-Assisted Edge Networks",
        authors:
          "Deepak Puthal (UAE University); Raja Jayaraman (New Mexico State University); Venkata Prasanth Yanambaka (Texas Woman's University); Pradip Kumar Sharma (University of Aberdeen)",
      },
    ],
  },
  {
    time: "12:15–13:30",
    title: "Lunch and Networking",
    type: "Break",
    details: "Lunch boxes at Cactus Cafe, Level 2",
  },
  {
    time: "13:30–14:30",
    title: "Keynote 2",
    type: "Keynote",
    details: "Speaker TBD",
  },
  {
    time: "14:30–15:30",
    title: "Session 3: UAV-Enabled Edge Computing and Resource Allocation",
    type: "Technical Session",
    details: "Full paper presentation + Q&A (20 min each)",
    papers: [
      {
        title:
          "RAVEN: Reverse Auction-Based Resource Allocation for UAV-Enabled Edge Computing",
        authors:
          "Ayan Mondal, Mir Razee M., Vansh Kathnawal, Karri Trived (Indian Institute of Technology Indore)",
      },
      {
        title:
          "UAV-Assisted Resource Optimization for Priority-Aware and Trustworthy Services",
        authors:
          "Muhammad Omair Butt (Lakehead University); Muhammad Naeem (COMSATS University); Waleed Ejaz (Lakehead University)",
      },
      {
        title:
          "Stability-Oriented Multi-Objective Container Scheduling for UAV-Assisted Edge Networks via TD3",
        authors:
          "Shabir Ahmad (Gachon University); Fahim Ullah Khan, Ibrar Ali Shah (UET Mardan); Abdul Aziz Barnawi, Muhammad Shahid Anwar (King Fahd University of Petroleum and Minerals)",
      },
    ],
  },
  {
    time: "15:30–16:00",
    title: "Coffee and Networking",
    type: "Break",
    details: "Networking break",
  },
  {
    time: "16:00–17:00",
    title: "Session 4: Learning-Driven Aerial and Non-Terrestrial Networks",
    type: "Technical Session",
    details: "Full paper presentation + Q&A (20 min each)",
    papers: [
      {
        title:
          "Quantum Deep Reinforcement Learning On-the-Fly: An Energy Efficient Scheme for Autonomous Aerial Vehicles",
        authors:
          "Anushka Nehra (Thapar University Patiala); Neeraj Joshi (Bennett University); Rajat Chaudhary (Marwadi University); Isaac Woungang (Toronto Metropolitan University)",
      },
      {
        title:
          "Joint Trajectory and Resource Optimization for Dual Aerial ARIS-assisted NOMA-ITNTN",
        authors:
          "Vangara Saiprudhvi (Vellore Institute of Technology); Keshav Singh (National Sun Yat-sen University); Hariharan Subramaniyam (Vellore Institute of Technology); Chih-Peng Li (National Sun Yat-sen University)",
      },
      {
        title:
          "Adaptive Multi-Band Hybrid RF/FSO Backhaul Optimization for Non-Terrestrial Networks Using Deep Reinforcement Learning",
        authors:
          "Muhammad Abubakar Rashid, Muhammad Hannan Akram, Wassi Haider Kabir (National University of Sciences and Technology); Haejoon Jung (Kyung Hee University); Syed Ali Hassan (National University of Sciences and Technology)",
      },
    ],
  },
  {
    time: "17:00–17:10",
    title: "Closing Remarks",
    type: "Closing",
    details: "Workshop Organizers",
  },
];

const posterPresentations = [
  {
    title:
      "CMA-FL: Cognitive Multi-Agent Federated Learning for Resource-Aware Drone Communication Attack Detection",
    authors:
      "Pronaya Bhattacharya (Amity University); Somnath Bera (Maulana Abul Kalam Azad University of Technology, West Bengal); Anwesha Mukherjee (Mahishadal Raj College); Debashis De (Maulana Abul Kalam Azad University of Technology, West Bengal); Kwok Tai Chui (Hong Kong Metropolitan University); Brij B. Gupta (Asia University); Thippa Reddy Gadekallu (Zhejiang A&F University)",
  },
  {
    title:
      "Secrecy Rate Analysis of RIS-Assisted UAV Networks Using DDQN Network",
    authors:
      "Laxmi, Vipul Dixit, Ishan Budhiraja (Bennett University); Swati Kumari (Deakin University); Neeraj Kumar (Thapar University Patiala)",
  },
  {
    title:
      "Distributed Deep Learning-Based CQI Prediction for UAV-Assisted URLLC V2X Networks",
    authors:
      "Muhammed Mufeed M, Sneha S, Suresh Chavhan (Indian Institute of Science Education and Research, Thiruvananthapuram)",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScope, setActiveScope] = useState("motivation");
  const [topicQuery, setTopicQuery] = useState("");
  const [activeProgram, setActiveProgram] = useState("All");
  const [expandedProgramSessions, setExpandedProgramSessions] = useState({});
  const [showProgramPosters, setShowProgramPosters] = useState(false);
  const [openEdition, setOpenEdition] = useState(0);
  const [activeSubmissionInfo, setActiveSubmissionInfo] = useState(null);

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) =>
      topic.toLowerCase().includes(topicQuery.toLowerCase())
    );
  }, [topicQuery]);

  const filteredProgram = useMemo(() => {
    if (activeProgram === "All") return programItems;

    const startHour = (item) =>
      Number(item.time.split("–")[0].split(":")[0]);

    if (activeProgram === "Morning") {
      return programItems.filter((item) => startHour(item) < 12);
    }

    if (activeProgram === "Afternoon") {
      return programItems.filter((item) => startHour(item) >= 12);
    }

    return programItems;
  }, [activeProgram]);

  return (
    <div className="site">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />


      <style>{`
        .openAccessBanner > div {
          min-width: 0;
        }

        .openAccessBanner h3 {
          margin-bottom: 22px;
        }

        .openAccessBanner p:not(.eyebrow) {
          margin: 0 0 18px;
          line-height: 1.72;
          text-align: justify;
          text-justify: inter-word;
          hyphens: auto;
        }

        .openAccessBanner ul {
          margin: 6px 0 0;
          padding-left: 28px;
          line-height: 1.65;
        }

        .openAccessBanner li + li {
          margin-top: 3px;
        }

        @media (max-width: 760px) {
          .openAccessBanner p:not(.eyebrow) {
            text-align: left;
            hyphens: none;
          }
        }

      `}</style>

      <main>
        <section id="home" className="hero">
          <div className="heroBg">
            <span className="gridOne" />
            <span className="orb orbOne" />
            <span className="orb orbTwo" />
            <span className="signal signalOne" />
            <span className="signal signalTwo" />
            <span className="signal signalThree" />
          </div>

          <div className="heroInner">
            <div className="heroText">
              <p className="eyebrow light">7th International Workshop</p>

              <h1>
                Drone-Assisted Wireless Communications for{" "}
                <span>5G and Beyond</span>
              </h1>

              <p className="heroSubtitle">
                In conjunction with ACM MobiCom 2026
              </p>

              <div className="heroMeta">
                <div>
                  <strong>Location</strong>
                  <span>Austin, Texas, USA</span>
                </div>
                <div>
                  <strong>Conference Dates</strong>
                  <span>26–30 October 2026</span>
                </div>
                <div>
                  <strong>Workshop Date</strong>
                  <span>October 30, 2026</span>
                </div>
              </div>

              <div className="heroActions">
                <a
                  href="https://www.sigmobile.org/mobicom/2026/registration.html"
                  className="primaryBtn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Register Now
                </a>

                <a href="#cfp" className="secondaryBtn">
                  View Call for Papers
                </a>

                <a href="#submission" className="secondaryBtn">
                  Submission Details
                </a>
              </div>
            </div>

            <div className="heroCard">
              <p>Next Deadline</p>
              <h2>Aug 30, 2026</h2>
              <span>Camera Ready</span>

              <div className="miniTimeline">
                {importantDates.map((item, index) => (
                  <div key={item.label}>
                    <b>0{index + 1}</b>
                    <span>
                      {item.label}
                      <small>{item.date}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="statsStrip">
          <div>
            <strong>7th</strong>
            <span>Workshop Edition</span>
          </div>
          <div>
            <strong>ACM</strong>
            <span>MobiCom 2026</span>
          </div>
          <div>
            <strong>18+</strong>
            <span>Technical Topics</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Invited Speakers</span>
          </div>
        </section>

        <section id="cfp" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Call for Papers</p>
            <h2>DroneCom 2026 Scope</h2>
            <p>
              The workshop invites original research, practical systems,
              experimental studies, and new ideas on drone-assisted wireless
              communications, aerial networking, mobile backhaul, and beyond-5G
              systems.
            </p>
          </div>

          <div className="scopeTabs">
            <button
              className={activeScope === "motivation" ? "active" : ""}
              onClick={() => setActiveScope("motivation")}
            >
              Motivation
            </button>
            <button
              className={activeScope === "challenge" ? "active" : ""}
              onClick={() => setActiveScope("challenge")}
            >
              Challenges
            </button>
            <button
              className={activeScope === "goal" ? "active" : ""}
              onClick={() => setActiveScope("goal")}
            >
              Workshop Goal
            </button>
          </div>

          <div className="scopePanel">
            {activeScope === "motivation" && (
              <>
                <h3>Why DroneCom?</h3>
                <p>
                  Fifth Generation mobile networks are now widely deployed
                  worldwide, while research into Sixth Generation systems is
                  rapidly gaining momentum. These networks are characterized by
                  high throughput, ultra-low latency, dense connectivity, and
                  ultra-reliable service quality. As massive IoT, smart cities,
                  field automation, and data-intensive mobile services continue
                  to grow, mobile backhaul becomes an essential component for
                  realizing 5G, beyond-5G, and future 6G networks.
                </p>
                <p>
                  Drone-assisted communication infrastructure offers a flexible
                  and cost-effective way to supplement terrestrial networks,
                  especially where deploying additional fixed infrastructure is
                  expensive, delayed, or impractical. Drone-mounted platforms can
                  support small cell backhaul, improve network reliability,
                  relieve congestion, and enable rapid connectivity in dense,
                  dynamic, or temporary scenarios.
                </p>
              </>
            )}

            {activeScope === "challenge" && (
              <>
                <h3>What problems does it address?</h3>
                <p>
                  Dense heterogeneous networks require scalable backhaul
                  solutions that can adapt to changing traffic demand. However,
                  wireless backhauling often depends on small cell base stations,
                  and the installation of additional terrestrial infrastructure
                  may not be acceptable due to cost, deployment time, or
                  geographic constraints.
                </p>
                <p>
                  Drone-enabled networking introduces important research
                  challenges, including the lack of fixed backhaul links,
                  multi-drone coordination, collision and crash avoidance,
                  sparse and intermittently connected topologies, limited
                  endurance, constrained communication resources, restricted
                  computation capability, and secure resource management.
                </p>
              </>
            )}

            {activeScope === "goal" && (
              <>
                <h3>Workshop objective</h3>
                <p>
                  DroneCom 2026 aims to bring together researchers, engineers,
                  industry practitioners, and academic experts to share new
                  ideas, latest findings, practical experiences, testbeds, and
                  state-of-the-art results on drone-assisted wireless
                  communications.
                </p>
                <p>
                  The workshop encourages contributions on communication
                  protocols, channel modelling, drone-ground and drone-drone
                  communications, massive MIMO backhaul, SDN/NFV architectures,
                  AI/ML-based routing, security, authentication, energy-aware
                  deployment, interference management, standardization, field
                  trials, and other applications for integrating drones into 5G
                  and beyond networks.
                </p>
              </>
            )}
          </div>

          <div className="topicSection">
            <div className="topicIntro">
              <p className="eyebrow light">Topics of Interest</p>
              <h3>Searchable Technical Areas</h3>
              <p>
                Authors are invited to submit work related to the following
                areas. Use the search box to quickly filter topics.
              </p>
            </div>

            <div className="topicBox">
              <input
                value={topicQuery}
                onChange={(e) => setTopicQuery(e.target.value)}
                placeholder="Search topics, e.g. AI, MIMO, security..."
              />

              <div className="topicList">
                {filteredTopics.map((topic) => (
                  <div className="topicItem" key={topic}>
                    <span>✓</span>
                    <p>{topic}</p>
                  </div>
                ))}

                {filteredTopics.length === 0 && (
                  <div className="emptyState">
                    No topics matched your search.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="submission" className="section alt">
          <div className="sectionHeader center">
            <p className="eyebrow">Submission</p>
            <h2>Submission Information</h2>
            <p>
              Authors can submit papers through the official DroneCom 2026
              HotCRP submission system. Please follow the important dates below
              for submission, notification, camera-ready version, and workshop
              attendance.
            </p>
          </div>

          <div className="submissionPanel openAccessBanner">
            <div>
              <p className="eyebrow light">Important ACM Open Access Update</p>
              <h3>ACM Open Access Publishing Model for 2026</h3>

              <p>
                Starting January 1, 2026, ACM will fully transition to Open
                Access. All ACM publications, including those from ACM-sponsored
                conferences, will be 100% Open Access.
              </p>

              <p>
                Authors will have two primary options for publishing Open Access
                articles with ACM: the ACM Open institutional model or payment
                of an Article Processing Charge (APC). With more than 2,600
                institutions already participating in ACM Open, the majority of
                ACM-sponsored conference papers will not require APCs from
                authors or conferences; currently, approximately 76% fall into
                this category.
              </p>

              <p>
                Authors from institutions that do not participate in ACM Open
                will need to pay an APC unless they qualify for a financial
                waiver. Waivers are rare and are granted according to specific
                ACM criteria.
              </p>

              <p>
                To ease the transition in 2026, ACM has approved a temporary
                subsidy:
              </p>

              <ul>
                <li>
                  <strong>$250 APC</strong> for ACM/SIG members
                </li>
                <li>
                  <strong>$350 APC</strong> for non-members
                </li>
              </ul>
            </div>

            <a
              className="submitButton"
              href="https://www.acm.org/publications/policies/policy-on-discretionary-open-access-apc-waivers"
              target="_blank"
              rel="noreferrer"
            >
              Review ACM APC Waiver Policy
            </a>
          </div>

          <div className="submissionAccordion">
            <div className="submissionAccordionTabs">
              <button
                type="button"
                className={
                  activeSubmissionInfo === "instructions"
                    ? "submissionAccordionTrigger active"
                    : "submissionAccordionTrigger"
                }
                onClick={() =>
                  setActiveSubmissionInfo(
                    activeSubmissionInfo === "instructions"
                      ? null
                      : "instructions"
                  )
                }
                aria-expanded={activeSubmissionInfo === "instructions"}
                aria-controls="submission-instructions-panel"
              >
                <span>
                  <small>Author Guidelines</small>
                  <strong>Submission Instructions</strong>
                </span>
                <b>{activeSubmissionInfo === "instructions" ? "−" : "+"}</b>
              </button>

              <button
                type="button"
                className={
                  activeSubmissionInfo === "manuscript"
                    ? "submissionAccordionTrigger active"
                    : "submissionAccordionTrigger"
                }
                onClick={() =>
                  setActiveSubmissionInfo(
                    activeSubmissionInfo === "manuscript" ? null : "manuscript"
                  )
                }
                aria-expanded={activeSubmissionInfo === "manuscript"}
                aria-controls="final-manuscript-panel"
              >
                <span>
                  <small>Camera-Ready Guidelines</small>
                  <strong>Format Your Final Manuscript</strong>
                </span>
                <b>{activeSubmissionInfo === "manuscript" ? "−" : "+"}</b>
              </button>
            </div>

            {activeSubmissionInfo === "instructions" && (
              <div
                id="submission-instructions-panel"
                className="submissionAccordionContent"
              >
                <h3>Submission Instructions</h3>

                <ul>
                  <li>
                    Submissions must present original and previously unpublished
                    results and should clearly describe their relationship to
                    existing work and their potential impact on future research.
                  </li>

                  <li>
                    Papers must be submitted in PDF format using the ACM templates
                    in standard two-column format with a 10-point font on US Letter
                    paper (8.5 × 11 inches).
                  </li>

                  <li>
                    Technical papers must not exceed 6 pages in total, including
                    references.
                  </li>

                  <li>
                    Appendix sections are allowed provided the entire submission
                    remains within the six-page limit.
                  </li>

                  <li>
                    Submissions must include author names and affiliations for
                    single-blind peer review by the Program Committee.
                  </li>

                  <li>
                    Authors of accepted papers are expected to present and discuss
                    their work at the workshop.
                  </li>
                </ul>
              </div>
            )}

            {activeSubmissionInfo === "manuscript" && (
              <div
                id="final-manuscript-panel"
                className="submissionAccordionContent"
              >
                <h3>Format Your Final Manuscript</h3>

                <p>
                  Please use the latest ACM proceedings template for your final
                  manuscript. Do not manually modify the ACM template&apos;s margins,
                  column dimensions, font settings, or spacing.
                </p>

                <p>
                  <strong>For LaTeX, please use:</strong>
                </p>

                <p className="latexCommand">
                  <code>{"\\documentclass[sigconf, 10pt]{acmart}"}</code>
                </p>

                <p>
                  The final manuscript should satisfy the DroneCom 2026 HotCRP
                  final-version requirements:
                </p>

                <ul>
                  <li>Paper size: US Letter (8.5 × 11 inches)</li>
                  <li>Two-column format</li>
                  <li>Text block: 7 × 9.25 inches</li>
                  <li>Body font: 9 +/- 0.1 pt</li>
                  <li>Line height: 11 pt</li>
                  <li>Maximum length: 6 pages</li>
                  <li>Appendix sections are allowed.</li>
                  <li>Do not number the pages of the final paper.</li>
                  <li>
                    Include the appropriate ACM Computing Classification System
                    (CCS) indexing information.
                  </li>
                  <li>Use standard, properly embedded fonts.</li>
                  <li>
                    Avoid special characters or non-standard fonts that may cause
                    problems during processing or printing.
                  </li>
                  <li>
                    Carefully check that the title and abstract in HotCRP exactly
                    match the final manuscript and do not contain LaTeX commands or
                    symbols.
                  </li>
                </ul>

                <p>
                  <strong>Important:</strong> Authors should use the ACM{" "}
                  <code>sigconf</code> template as provided and should not manually
                  change the margins or page layout. The DroneCom HotCRP PDF checker
                  will be used to verify the final manuscript.
                </p>

                <p>
                  The ACM proceedings templates are available at:{" "}
                  <a
                    href="http://www.acm.org/publications/proceedings-template"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ACM Proceedings Template
                  </a>
                </p>
              </div>
            )}
          </div>

          <div className="dateGrid">
            {importantDates.map((item, index) => (
              <div className="dateCard" key={item.label}>
                <div className="dateNumber">0{index + 1}</div>
                <small>{item.note}</small>
                <h3>{item.label}</h3>
                <p>{item.date}</p>
              </div>
            ))}
          </div>

          <div className="submissionPanel">
            <div>
              <p className="eyebrow light">Submission Link</p>
              <h3>HotCRP Submission Portal</h3>
              <p>
                Authors can submit papers through the official DroneCom 2026
                HotCRP submission system. Please ensure that submissions follow
                the workshop instructions and the announced deadlines.
              </p>
            </div>

            <a
              className="submitButton"
              href="https://dronecom26.hotcrp.com"
              target="_blank"
              rel="noreferrer"
            >
              Submit via HotCRP
            </a>
          </div>
        </section>

        <section id="committees" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Committees</p>
            <h2>Workshop Committees</h2>
            <p>
              DroneCom 2026 is supported by workshop organizers, TPC co-chairs,
              the technical program committee, publicity and outreach leadership,
              and coordination contributors from international institutions.
            </p>
          </div>

          <div className="committeeBlock">
            <h3>Workshop Organizers</h3>

            <div className="organizerGrid">
              {organizers.map((person) => (
                <div className="organizerCard" key={person.email}>
                  <div className="avatar">
                    {person.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>TPC Co-Chairs</h3>

            <div className="simpleCommitteeGrid">
              {tpcCoChairs.map((person) => (
                <div className="simpleCommitteeCard" key={person.name}>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>Publicity &amp; Outreach Chair</h3>

            <div className="simpleCommitteeGrid">
              {publicityOutreachChairs.map((person) => (
                <div className="simpleCommitteeCard" key={person.name}>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>Technical Program Committee</h3>

            <div className="tpcGrid">
              {technicalProgramCommittee.map((person) => (
                <div className="tpcCard" key={person.name}>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>Web Coordinator</h3>

            <div className="simpleCommitteeGrid">
              {webCoordinators.map((person) => (
                <div className="simpleCommitteeCard" key={person.name}>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="program" className="section alt programSection">
          <div className="programShell">
            <div className="programHeadingRow">
              <div className="programHeadingCopy">
                <p className="eyebrow">Official Workshop Schedule</p>
                <h2>Workshop Program</h2>
                <p>
                  DroneCom 2026 · Friday, October 30, 2026 · Austin, Texas
                </p>
              </div>
              <div className="programHeaderActions">
                <div className="programCount" aria-label="Program overview">
                  <strong>4</strong> technical sessions
                  <span aria-hidden="true">•</span>
                  <strong>12</strong> papers
                  <span aria-hidden="true">•</span>
                  <strong>3</strong> posters
                </div>
                <a
                  className="programDownloadButton"
                  href={`${import.meta.env.BASE_URL}DroneCom_2026_Full_Program.pdf`}
                  download="DroneCom_2026_Full_Program.pdf"
                  aria-label="Download the complete DroneCom 2026 workshop agenda as a PDF"
                >
                  <span className="programDownloadIcon" aria-hidden="true">↓</span>
                  Download Full Program (PDF)
                </a>
              </div>
            </div>

            <div className="programFacts" aria-label="Workshop event information">
              <div className="programFact">
                <span>Date</span>
                <strong>Friday, October 30, 2026</strong>
              </div>
              <div className="programFact">
                <span>Time</span>
                <strong>08:30 – 17:10</strong>
              </div>
              <div className="programFact programFactVenue">
                <span>Venue</span>
                <strong>
                  Texas Governor&apos;s Room 3.116 · Level 3 · Texas Union Building,
                  Austin, Texas
                </strong>
              </div>
            </div>

            <div className="programToolbar">
              <div className="programToolbarTitle">
                <h3>Day agenda</h3>
                <p>Tap a technical session to view its papers and authors.</p>
              </div>
              <div className="programControls" role="group" aria-label="Filter workshop schedule">
                {["All", "Morning", "Afternoon"].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={activeProgram === item ? "active" : ""}
                    aria-pressed={activeProgram === item}
                    onClick={() => setActiveProgram(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="programAgendaList">
              {filteredProgram.map((item) => {
                const hasPapers = Boolean(item.papers?.length);
                const expanded = Boolean(expandedProgramSessions[item.title]);
                const [startTime, endTime] = item.time.split("–");
                const isBreak = item.type === "Break";
                return (
                  <article
                    key={`${item.time}-${item.title}`}
                    className={`programAgendaRow${isBreak ? " programAgendaRowBreak" : ""}${hasPapers ? " programAgendaRowSession" : ""}`}
                  >
                    <div className="programAgendaTime">
                      <strong>{startTime}</strong>
                      <span>{endTime}</span>
                    </div>

                    <div className="programAgendaBody">
                      {hasPapers ? (
                        <>
                          <button
                            type="button"
                            className="programSessionToggle"
                            aria-expanded={expanded}
                            aria-controls={`program-papers-${programItems.indexOf(item)}`}
                            onClick={() =>
                              setExpandedProgramSessions((current) => ({
                                ...current,
                                [item.title]: !current[item.title],
                              }))
                            }
                          >
                            <span className="programSessionIdentity">
                              <small className="programAgendaType">{item.type}</small>
                              <strong>{item.title}</strong>
                              <span>{item.details}</span>
                            </span>
                            <span className="programSessionAction">
                              {expanded ? "Hide papers" : `View ${item.papers.length} papers`}
                              <span className={expanded ? "programChevron expanded" : "programChevron"} aria-hidden="true">⌄</span>
                            </span>
                          </button>
                          {expanded && (
                            <div
                              id={`program-papers-${programItems.indexOf(item)}`}
                              className="programPaperGrid"
                            >
                              {item.papers.map((paper, index) => (
                                <article className="programPaperCard" key={paper.title}>
                                  <span className="programPaperNumber">{String(index + 1).padStart(2, "0")}</span>
                                  <div>
                                    <h4>{paper.title}</h4>
                                    <p>{paper.authors}</p>
                                  </div>
                                </article>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="programAgendaBasic">
                          <div>
                            <small className="programAgendaType">{item.type}</small>
                            <h3>{item.title}</h3>
                            <p>{item.details}</p>
                          </div>
                          {item.type === "Keynote" && (
                            <span className="programKeynoteNote">Speaker to be announced</span>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="programPosterSection">
              <button
                type="button"
                className="programPosterToggle"
                onClick={() => setShowProgramPosters((current) => !current)}
                aria-expanded={showProgramPosters}
                aria-controls="program-poster-list"
              >
                <span className="programPosterToggleCopy">
                  <small>Poster presentations</small>
                  <strong>3 posters on display during coffee breaks and lunch</strong>
                </span>
                <span className="programSessionAction">
                  {showProgramPosters ? "Hide posters" : "View posters"}
                  <span className={showProgramPosters ? "programChevron expanded" : "programChevron"} aria-hidden="true">⌄</span>
                </span>
              </button>
              {showProgramPosters && (
                <div id="program-poster-list" className="programPosterGrid">
                  {posterPresentations.map((poster, index) => (
                    <article className="programPosterCard" key={poster.title}>
                      <small>Poster {String(index + 1).padStart(2, "0")}</small>
                      <h4>{poster.title}</h4>
                      <p>{poster.authors}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="history" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Previous Editions</p>
            <h2>DroneCom Workshop History</h2>
            <p>
              DroneCom has previously been organized with major conferences
              including IEEE INFOCOM and ACM MobiCom.
            </p>
          </div>

          <div className="historyGrid">
            {previousEditions.map((item, index) => (
              <div
                className={
                  openEdition === index ? "editionCard open" : "editionCard"
                }
                key={item.edition}
              >
                <button
                  onClick={() =>
                    setOpenEdition(openEdition === index ? -1 : index)
                  }
                >
                  <span>{item.edition}</span>
                  <b>{openEdition === index ? "−" : "+"}</b>
                </button>

                <div className="editionBody">
                  <h3>{item.title}</h3>
                  <p>
                    <strong>{item.venue}</strong>
                  </p>
                  <p>{item.date}</p>
                  <p>{item.location}</p>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Visit previous edition
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>DroneCom 2026</strong>
          <p>
            7th International Workshop on Drone-Assisted Wireless Communications
            for 5G and Beyond.
          </p>
        </div>

        <div className="footerLinks">
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <a href="#home" className="brand">
        <img
          src={`${import.meta.env.BASE_URL}dronecom-logo.png`}
          alt="DroneCom logo"
          className="brandLogo"
        />

        <span>
          <strong>DroneCom 2026</strong>
          <small>ACM MobiCom Workshop</small>
        </span>
      </a>

      <button
        className="menuButton"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "navLinks open" : "navLinks"}>
        {nav.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default App;
