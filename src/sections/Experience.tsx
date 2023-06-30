import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Easebuzz",
      role: "Devops Intern",
      url: "https://easebuzz.in",
      start: "June 2023",
      end: "Present",
      shortDescription: [
        "Gained hands-on experience with AWS services like EC2, Jenkins, and Lambda. I learned to deploy apps on EC2, automate CI/CD pipelines with Jenkins, and use Lambda for seamless deployments.",
        " Studied about payement integration app's architecture and system design and also about PCI DSS compliances. "


      ],
    },
    {
      name: "MindCommute",
      role: "Full-stack Developer",
      url: "http://mindcommute.com",
      start: "June 2021",
      end: "Present",
      shortDescription: [
        "Developed the frontend using HTML,CSS5,JS,TailwindCSS and backend using Django, AJAX, SQL Lite for the efficient website according to business objectives and user needs.",
        "Reviewed code, debugged problems and fixed errors which reduced the rendering time",
        
      ],
    },
    {
      name: "EInfochips ",
      role: "Cloud Intern",
      url: "https://www.einfochips.com",
      start: "December 2022",
      end: "January 2023",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "Engagin",
      role: "Head of Product",
      url: "https://engagin-e53c3.web.app",
      start: "August 2021",
      end: "August 2022",
      shortDescription: [
        " Developed and maintained the Frontend of the landing page website with 2+ frameworks and API's, backend using Firebase & worked with payment integration of the app",
        "Engaged in routine client follow up in an effort to maintain the quality of partner relationships while investigating any opportunities to better serve their needs in the app.",
       
      ],
    },
    {
      name: "GSSOC'22",
      role: "Open Source Developer",
      url: "https://gssoc.girlscript.tech",
      start: "Feb 2022",
      end: "may 2022",
      shortDescription: [
        " Got selected into GSSOC'2022 and got an opportunity to contribute to various projects. Used Git, Github and Linux",
    
        "Contributed to many open source projects over the two months in then frontend, backend and wrote documentations for various projects.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
  <h2>
    Where I&apos;ve <span className="text-underline">Worked</span>
  </h2>
</div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
