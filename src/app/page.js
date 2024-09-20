"use client";

import React, { useEffect, useRef } from 'react';
import styles from './page.module.css';

export default function Home() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.animate);
        }
      });
    }, { threshold: 0.1 });

    const timelineItems = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.name}>STEFAN LENTA</h1>
        <p className={styles.title}>Learning & Development Professional | Computing Student</p>
      </header>

      <section className={styles.contact}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <p>Email: stefanlenta@gmail.com</p>
        <p>Phone: 0740000000</p>
        <p>Website: <a href="http://www.stefanlenta.com" target="_blank" rel="noopener noreferrer">www.stefanlenta.com</a></p>
        <p>Driving License: A, B</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/stefan-lenta/" target="_blank" rel="noopener noreferrer">linkedin.com/in/stefan-lenta</a></p>
        <p>GitHub: <a href="https://github.com/stefanlnt23" target="_blank" rel="noopener noreferrer">github.com/stefanlnt23</a></p>
      </section>

      <section className={styles.summary}>
        <h2 className={styles.sectionTitle}>Professional Summary</h2>
        <p>I'm an experienced Learning & Development professional with a passion for creating impactful training programs that prioritize safety and efficiency. I lead Day 1 inductions for new associates and managers, ensuring they're well-prepared with the knowledge and skills needed to succeed. I've developed tools like the Instructor and Peer Trainer Dashboard, which improved training oversight and earned L&D Innovator Award 2024. I also created a PIT Dashboard to track safety, usage, and operator hours, providing key insights that help improve operations. I work closely with teams to maintain compliance, deliver refresher trainings, and resolve operational queries, always looking for ways to enhance processes and outcomes.</p>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Key Skills</h2>
        <ul className={styles.skillsList}>
          <li>Identifying Training Needs: Expertise in assessing training requirements and developing materials to enhance understanding and skill acquisition.</li>
          <li>Health & Safety (H&S) Compliance: Proficient in understanding and applying H&S regulations to ensure workplace safety, including collaboration with H&S departments to evaluate and mitigate risks.</li>
          <li>Advanced Analytics: Skilled in using tools like Excel for advanced analytics, including pivot tables and complex formula creation.</li>
          <li>Training Development: Ability to create and deliver impactful training programs, including Day 1 inductions and refresher courses, with a focus on compliance and operational efficiency.</li>
          <li>Dashboard Creation: Experience in developing and utilizing dashboards (e.g., Instructor and Peer Trainer Dashboard, PIT Dashboard) to track performance, safety, and operational metrics.</li>
          <li>Fleet Systems Management: Proven track record in monitoring and managing fleet systems to ensure optimal operations and compliance.</li>
          <li>Cross-Departmental Collaboration: Demonstrated ability to work closely with various departments to ensure aligned objectives and outcomes.</li>
        </ul>
      </section>

      <section className={styles.timeline} ref={timelineRef}>
        <h2 className={styles.sectionTitle}>Work History</h2>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Conduct Day 1 induction training for new associates and managers</li>
                <li>Deliver training sessions requested by Operations</li>
                <li>Monitor L&D compliance metrics</li>
                <li>Collaborate with Operations to schedule refresher training sessions</li>
                <li>Resolve permission requests and queries</li>
                <li>Conduct instructor headcount reviews and audits</li>
                <li>Assist with PIT training and reporting</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>Generalist Trainer - Amazon BHX4</h3>
              <p className={styles.date}>07/2023 - Current</p>
              <p>Coventry, West Midlands</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Ensure workplace practices align with H&S regulations</li>
                <li>Collaborate on risk assessments and safety enhancements</li>
                <li>Manage fleet operations using Info-Link</li>
                <li>Develop and update educational materials</li>
                <li>Evaluate trainee performance and certify competence</li>
                <li>Analyze training requirements and determine skills gaps</li>
                <li>Organize refresher courses for experienced operators</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>MHE Trainer - Amazon BHX4</h3>
              <p className={styles.date}>07/2022 - Current</p>
              <p>Coventry, West Midlands</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Managed inventory and led onboarding programs</li>
                <li>Handled goods receipt and distribution</li>
                <li>Delivered process path training to new hires</li>
                <li>Utilized forklifts for efficient inventory management</li>
                <li>Ensured accurate tracking using hand scanners</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>FC Associate - Amazon BHX4</h3>
              <p className={styles.date}>08/2020 - 07/2022</p>
              <p>Coventry, West Midlands</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Provided hardware and software support</li>
                <li>Managed ticketing systems for end-user concerns</li>
                <li>Conducted equipment maintenance and repairs</li>
                <li>Assisted with authentication and password resets</li>
                <li>Set up hardware for associates</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>Step Up IT Support - Amazon BHX4</h3>
              <p className={styles.date}>12/2021 - 02/2022</p>
              <p>Coventry, West Midlands</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Delivered comprehensive training to onboard new associates</li>
                <li>Ensured smooth operational transition and integration</li>
                <li>Supported the successful launch of a new Amazon facility</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>RC Sort Instructor - Amazon LBA4</h3>
              <p className={styles.date}>05/2021 - 06/2021</p>
              <p>Doncaster, Yorkshire</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Conducted inventory verification and cycle count analysis</li>
                <li>Led training sessions on various warehouse processes</li>
                <li>Utilized reach trucks for stock validation in VNA settings</li>
                <li>Offered coaching to fellow associates</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>FC Associate - Amazon MAN4</h3>
              <p className={styles.date}>08/2019 - 08/2020</p>
              <p>Barlborough, Derbyshire</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Monitored SCADA system for fault identification</li>
                <li>Conducted quality assurance inspections</li>
                <li>Performed root cause analysis on equipment issues</li>
                <li>Minimized downtime of critical components</li>
                <li>Employed data-driven problem-solving approaches</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>Step Up RME Technician - Amazon MAN4</h3>
              <p className={styles.date}>11/2019 - 02/2020</p>
              <p>Barlborough, Derbyshire</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Managed inventory and warehouse operations</li>
                <li>Assisted with various fulfilment center processes</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>FC Associate - Amazon BHX1</h3>
              <p className={styles.date}>08/2018 - 08/2019</p>
              <p>Rugeley, Staffordshire</p>
            </div>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <div className={styles.timelineContent}>
            <div className={styles.timelineLeft}>
              <ul>
                <li>Transformed GPS coordinates into AutoCAD property drawings</li>
                <li>Researched and verified property boundary information</li>
                <li>Conducted comprehensive surveys for legal boundary delineation</li>
                <li>Authored precise property-boundary survey descriptions</li>
                <li>Ensured data accuracy in all survey outcomes</li>
              </ul>
            </div>
            <div className={styles.timelineRight}>
              <h3>Land Surveyor Assistant</h3>
              <p className={styles.date}>10/2016 - 08/2018</p>
              <p>Tulcea, Romania</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.education}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.educationItem}>
          <h3>Bachelor of Science in Computing</h3>
          <p>Solent University - London (Expected in 2025)</p>
        </div>
        <div className={styles.educationItem}>
          <h3>Foundation Degree in Arts, Business Management</h3>
          <p>London Metropolitan University - London (2020)</p>
        </div>
        <div className={styles.educationItem}>
          <h3>NVQ Level 3, Electrician</h3>
          <p>Technical College Henri Coanda - Romania (2016)</p>
        </div>
      </section>

      <section className={styles.certifications}>
        <h2 className={styles.sectionTitle}>Certifications</h2>
        <ul>
          <li>AITT: CAT 1 MHE Trainer/Examiner</li>
          <li>CCNAv1: Introduction to Networks</li>
        </ul>
      </section>

      <section className={styles.accomplishments}>
        <h2 className={styles.sectionTitle}>Awards and Accomplishments</h2>
        <div className={styles.accomplishmentItem}>
          <h3>L&D Innovator Award 2024</h3>
          <p>Created an Instructor and Peer Trainer dashboard that tracks instructor coverage by login across each day and shift (day/night) for each process. The dashboard also highlights non-justified hours within L&D and compares coverage against daily requests. This project significantly improved our operational oversight.</p>
        </div>
        <div className={styles.accomplishmentItem}>
          <h3>PIT Dashboard</h3>
          <p>Built a comprehensive QuickSight dashboard providing insights into PIT coverage for each shift, comparing actual versus requested headcount. It also features a PIT Safety Suite that helps identify trends in safety violations, enabling proactive interventions. Additionally, it tracks PIT Usage, displaying operator hours and login times, and includes a PIT Impacts section to monitor and analyze collision data for valuable insights.</p>
        </div>
        <div className={styles.accomplishmentItem}>
          <h3>BHX4 L&D Wiki</h3>
          <p>Developed a site-specific L&D Wiki for BHX4. This resource serves as a valuable tool not only for newly onboarded managers but for the entire team. The wiki provides easy access to L&D standards, training requirements, and templates, streamlining processes and ensuring quick, efficient use of critical information.</p>
        </div>
      </section>

      <section className={styles.links}>
        <h2 className={styles.sectionTitle}>Project Links</h2>
        <ul>
          <li><a href="https://tiny.amazon.com/bmseqwb3/BHX4-PIT-Dashboard" target="_blank" rel="noopener noreferrer">BHX4 PIT Dashboard</a></li>
          <li><a href="https://tiny.amazon.com/2q9vbk76/InstructorampPeerTrainer-Dashboard" target="_blank" rel="noopener noreferrer">Instructor & Peer Trainer Dashboard</a></li>
          <li><a href="https://w.amazon.com/bin/view/BHX4-Learning/" target="_blank" rel="noopener noreferrer">BHX4 L&D Wiki</a></li>
        </ul>
      </section>

      <section className={styles.interests}>
        <h2 className={styles.sectionTitle}>Hobbies and Interests</h2>
        <p>I enjoy creating dashboards and Excel reports at work, especially using tools like QuickSight. In my free time, I focus on my university assignments, building full-stack websites, and developing Python applications. These activities allow me to continuously enhance my skills in both data analysis and development</p>
        </section>

      <section className={styles.languages}>
        <h2 className={styles.sectionTitle}>Languages</h2>
        <ul>
          <li><strong>English:</strong> Fluent</li>
          <li><strong>Romanian:</strong> Native</li>
        </ul>
      </section>

      <section className={styles.additionalExperience}>
        <h2 className={styles.sectionTitle}>Additional Experience</h2>
        <ul>
          <li>Assisted the IT Support team during peak periods, ensuring a streamlined ticketing system. Helped Associates with authentication, password resets, and hardware setup.</li>
          <li>Functioned as a Step Up RME Technician, focusing on maintaining optimal building efficiency and safety. Key contributions include minimizing downtime of the main sorter—a critical component for timely customer order deliveries—and conducting thorough inspections and repairs of various equipment.</li>
          <li>Engaged in precise land measurements using advanced GPS technology (Stonex S990A). Responsible for data collection, boundary identifications, and subsequent data integration into AutoCAD for detailed surveying projects.</li>
        </ul>
      </section>
    </div>
  );
}