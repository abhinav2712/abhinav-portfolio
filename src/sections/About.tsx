import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2> About <span className="text-underline"> Me </span></h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
           Namaste! My name is Abhinav, Currently, I am pursuing my B.Tech in Electronics from Manipal Institute of Technology. Alongside my studies, I am continuously learning and exploring new technologies to stay up-to-date with the latest industry trends. 
            
          </p>
          <p className="about-grid-info-text">
          As a cat lover high on coffee, I find joy in both coding and spending time with my feline companions. I also write tech blogs in my spare time on
            <Link
              className="link"
              target="_blank"
              href="https://abhinavkumar.hashnode.dev"
            >
              &nbsp;Hashnode&nbsp;
            </Link>
            
          </p>

          <p className="about-grid-info-text">
            
          </p>
          <p className="about-grid-info-text">
            {/* I am also working on my own project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita,
            </Link>
            &nbsp;aimed at enhancing frontend development skills. */}

            I am also working on contributing to many open source projects to improve my skills and to network with many other people
          </p>
          <p className="about-grid-info-text">
            Here are my skills I’ve  worked/working on:
          </p>
          <ul className="about-grid-info-list">
          <li className="about-grid-info-list-item">Java</li>
            <li className="about-grid-info-list-item">C++</li>
            <li className="about-grid-info-list-item">Javascript</li>

            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Typescript</li>

            <li className="about-grid-info-list-item">MongoDB</li>
            <li className="about-grid-info-list-item">MySql</li>
            <li className="about-grid-info-list-item">NodejS</li>

            <li className="about-grid-info-list-item">Jenkins</li>
            <li className="about-grid-info-list-item">Docker</li>
            <li className="about-grid-info-list-item">Git</li>
          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/abhinav.jpg" alt="profile" fill />
          </div>
        </div>


      </div>
    </motion.div>
  );
}

export default About;
