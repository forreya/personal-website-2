import Head from "next/head";
import React from "react";
import PageTitle from "../../components/PageTitle";
import SkillCard from "../../components/SkillCard";
import { Container, AboutMe, Skills } from "../../styles/pages/About";
import { motion } from "framer-motion";

function about() {
  const skillsData = {
    cardOne: {
      title: "Libraries",
  
      first: {
        alt: "ReactJS",
        icon: "reacticon.png",
      },
      second: {
        alt: "NodeJS",
        icon: "node.png",
      },
      third: {
        alt: "SciPy",
        icon: "scipy.png",
      },
      fourth: {
        alt: "TailwindCSS",
        icon: "tailwind.png",
      },
    },
    cardTwo: {
      title: "Languages",
  
      first: {
        alt: "JavaScript",
        icon: "javascript.png",
      },
      second: {
        alt: "Python",
        icon: "python.png",
      },
      third: {
        alt: "TypeScript",
        icon: "typescript.png",
      },
      fourth: {
        alt: "Ruby",
        icon: "ruby.png",
      },
    },
    cardThree: {
      title: "Tools",
  
      first: {
        alt: "MongoDB",
        icon: "mongodb.svg",
      },
      second: {
        alt: "PostgreSQL",
        icon: "postgresql.png",
      },
      third: {
        alt: "JWT",
        icon: "jwt.png",
      },
      fourth: {
        alt: "WebSockets",
        icon: "websockets.png",
      },
    },
    cardFour: {
      title: "Frameworks",
  
      first: {
        alt: "NextJS",
        icon: "nextjs.png",
      },
      second: {
        alt: "ExpressJS",
        icon: "express-js.png",
      },
      third: {
        alt: "Jest",
        icon: "jest.png",
      },
      fourth: {
        alt: "RSpec",
        icon: "rspec.png",
      },
    },
  };

  return (
    
    <Container>
      <Head>
        <title>About Me | Ryan Lai</title>
      </Head>
      <PageTitle
        title="about"
        stretchedLetter="b"
        overlayTitle="techs | experience | skills"
      />

      <AboutMe>
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ letterSpacing: "0.04em", fontSize: 27 }}
          >
            Who Is Ryan ?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ letterSpacing: "0.04em", fontSize: 17 }}
          >
            As a recent <strong>University College London graduate</strong> with a strong passion for developing innovative software solutions with a high social impact, I am a believer in technological advancement for the betterment of society. Therefore, I am resultantly interested in many avenues of the tech industry including but not limited to- web development, machine learning, and software integration. 
          </motion.p>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ letterSpacing: "0.04em", fontSize: 17 }}
          >
            Being a <strong>junior software engineer,</strong> I love merging innovative concepts, engineering, and design together — combining my technical knowledge with my keen eye for aesthetics to create a beautiful product. My goal is to always craft applications that are not only scalable and efficient under the hood, but also leave users in awe with engaging, pixel-perfect experiences.
          </motion.p>
        </div>
        <Skills
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SkillCard data={skillsData.cardOne} />
          <SkillCard data={skillsData.cardTwo} />
          <SkillCard data={skillsData.cardThree} />
          <SkillCard data={skillsData.cardFour} />
        </Skills>
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ letterSpacing: "0.04em", fontSize: 17 }}
          >
            <strong>When I'm not working on a new project,</strong> I'm probably scoring some serious buckets in a basketball pickup game, adventuring around a new part of town, or in the corner of my room questioning the meaning of human existence.
          </motion.p>
        </div>

        <div style={{ margin: "0.1rem 0" }}></div>

        <div>
          <motion.hr
            initial={{ opacity: 0, x: -1000, scale: 0.2 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          />
          <div style={{ margin: "3rem 0" }}></div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ letterSpacing: "0.04em", fontSize: 27 }}
          >
            Experience
          </motion.h1>
          <div style={{ margin: "2rem 0" }}></div>
          <motion.h3 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Assistant in Website Development <a href={'https://wahine.wcapital.asia/'} target="_blank" style={{ textDecoration: 'none'}}><span>@Wahine Capital</span></a>
          </motion.h3>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", fontStyle: "italic", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Jun 2022 - Aug 2022
          </motion.p>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Wahine Capital provides a <strong>digital vault and personal life manager</strong> which grants immediate access to assets 
            and liabilities for significant life events like divorce, death, or tax audits. The company's goal is to 
            give users a clear understanding of their financial standing by providing a snapshot of their financial lives.
          </motion.p>
          <div style={{ margin: "1.5rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            &bull; Assisted in the development of the company's prototype web pages<br />
          </motion.p>
          <div style={{ margin: "0.2rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            &bull; Created preliminary layouts for the design and branding of the company using Canva & Procreate<br />
          </motion.p>
          <div style={{ margin: "0.2rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            &bull; Responsible for mapping out the structure and UX of the company's website
          </motion.p>
        </div>

        <div style={{ margin: "0.1rem 0" }}></div>

        <div>
          <motion.hr
            initial={{ opacity: 0, x: -1000, scale: 0.2 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
          />
          <div style={{ margin: "3rem 0" }}></div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.1 }}
            style={{ letterSpacing: "0.04em", fontSize: 27 }}
          >
            Education
          </motion.h1>
          <div style={{ margin: "2rem 0" }}></div>
          <motion.h3 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            Software Engineering Course <a href={'https://makers.tech/'} target="_blank" style={{ textDecoration: 'none'}}><span>@Makers Academy</span></a>
          </motion.h3>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", fontStyle: "italic", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            Dec 2022 - Apr 2023
          </motion.p>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.7 }}
          >
            Worked in collaborative team environments for the development of full-stack web applications (git-flow, agile workflow, pair programming), 
            with a strong adherence to object-oriented programming and SOLID principles.
            Wrote unit & integration tests, constructed schemas, and utilized mocking techniques. 
            <br/>
            <br/>
            Some <strong>noteworthy projects</strong> include a property rental site, a Japanese Learning RPG, and a social media application. 
          </motion.p>

          <div style={{ margin: "2.7rem 0" }}></div>

          <motion.h3 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.9 }}
          >
            Bachelor Of Science in Physics <a href={'https://www.ucl.ac.uk/physics-astronomy/physics-and-astronomy-0'} target="_blank" style={{ textDecoration: 'none'}}><span>@UCL</span></a>
          </motion.h3>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", fontStyle: "italic", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.1 }}
          >
            Sept 2019 - Sept 2022
          </motion.p>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.3 }}
          >
            Graduated with <strong>Second Class Honours (2:1).</strong> 
            <br/>
            <br/>
            Undertook numerous coding projects <strong>(using Python)</strong> that 
            involved tasks such as data analysis, computational treatment of experimental data, and creating 
            3-dimensional models and animations of physical systems.
          </motion.p>

          <div style={{ margin: "2.7rem 0" }}></div>

          <motion.h3 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.5 }}
          >
            Higher Education <a href={'https://www.alice-smith.edu.my/'} target="_blank" style={{ textDecoration: 'none'}}><span>@Alice Smith International School</span></a>
          </motion.h3>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", fontStyle: "italic", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.7 }}
          >
            Sept 2017 - Jul 2019
          </motion.p>
          <div style={{ margin: "1rem 0" }}></div>
          <motion.p 
            style={{ textAlign: "left", letterSpacing: "0.04em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 3.9 }}
          >
              For A Levels, I achieved <strong>2 A*s</strong> in Mathematics, Physics & <strong>2 As</strong> in Chemistry, Further Mathematics. 
              For GCSEs I achieved 8 A*s and 3 As in a range of subjects including Computer Science.
          </motion.p>
        </div>
      </AboutMe>
    </Container>
  );
}

export default about;
