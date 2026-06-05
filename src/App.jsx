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
    date: "Aug 31, 2026",
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
    time: "09:00",
    title: "Opening Remarks",
    speaker: "Workshop Organizers",
    status: "Planned",
  },
  {
    time: "09:30",
    title: "Technical Session I",
    speaker: "Accepted papers",
    status: "TBA",
  },
  {
    time: "11:00",
    title: "Invited Talk / Keynote",
    speaker: "Speaker to be announced",
    status: "TBA",
  },
  {
    time: "12:00",
    title: "Lunch Break",
    speaker: "Conference schedule",
    status: "Planned",
  },
  {
    time: "13:30",
    title: "Technical Session II",
    speaker: "Accepted papers",
    status: "TBA",
  },
  {
    time: "15:30",
    title: "Panel Discussion",
    speaker: "Researchers and practitioners",
    status: "TBA",
  },
  {
    time: "16:30",
    title: "Closing Remarks",
    speaker: "Workshop Organizers",
    status: "Planned",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScope, setActiveScope] = useState("motivation");
  const [topicQuery, setTopicQuery] = useState("");
  const [activeProgram, setActiveProgram] = useState("All");
  const [openEdition, setOpenEdition] = useState(0);

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) =>
      topic.toLowerCase().includes(topicQuery.toLowerCase())
    );
  }, [topicQuery]);

  const filteredProgram = useMemo(() => {
    if (activeProgram === "All") return programItems;

    if (activeProgram === "Morning") {
      return programItems.filter((item) => Number(item.time.split(":")[0]) < 12);
    }

    if (activeProgram === "Afternoon") {
      return programItems.filter((item) => Number(item.time.split(":")[0]) >= 12);
    }

    return programItems;
  }, [activeProgram]);

  return (
    <div className="site">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

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
                <a href="#cfp" className="primaryBtn">
                  View Call for Papers
                </a>
                <a href="#submission" className="secondaryBtn">
                  Submission Details
                </a>
              </div>
            </div>

            <div className="heroCard">
              <p>Next Deadline</p>
              <h2>June 26, 2026</h2>
              <span>Paper Submission</span>

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

          <div className="submissionInstructions">
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

        <section id="program" className="section alt">
          <div className="sectionHeader center">
            <p className="eyebrow">Program</p>
            <h2>Workshop Program</h2>
            <p>
              The detailed program will be announced after paper acceptance and
              camera-ready submission.
            </p>
          </div>

          <div className="programControls">
            {["All", "Morning", "Afternoon"].map((item) => (
              <button
                key={item}
                className={activeProgram === item ? "active" : ""}
                onClick={() => setActiveProgram(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="programList">
            {filteredProgram.map((item) => (
              <div className="programItem" key={`${item.time}-${item.title}`}>
                <div className="programTime">{item.time}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.speaker}</p>
                </div>

                <span>{item.status}</span>
              </div>
            ))}
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
