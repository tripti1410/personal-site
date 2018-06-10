import React from "react";
import { Helmet } from "react-helmet";
import PageTitle from "../../components/page-title/page-title";
import Chip from "../../components/chip/chip";
import Card from "./card";
import Button from "../../components/button/button";
import Heading2 from "../../components/heading-2/heading-2";
import Link from "../../components/link/link";

import "./resume.css";
const SKILLS = [
  "frontend performance",
  "accessibility",
  "react",
  "javascript",
  "webpack",
  "jest",
  "html5",
  "css3",
  "jQuery",
  "sass",
  "bem",
  "smacss",
  "itcss"
];

const Resume = () => {
  return (
    <div className="resume-page">
      <Helmet>
        <title>Resume | Trapti</title>
      </Helmet>
      <PageTitle pageTitle="Resume" />
      <div className="resume-page__layout resume-layout">
        <section className="resume-layout__left-pan">
          <article>
            <Heading2 heading="Work Experience" iconClass="fas fa-bookmark" />
            <Card
              title="Senior Frontend Developer"
              timeDuration="APR 2018-Present"
            >
              <p>
                I am working on redesigning our core product, the CMS and
                implementing the design system which will help in building other
                products faster.
              </p>
            </Card>
            <Card title="Frontend Developer" timeDuration="JAN 2016 - MAR 2018">
              <p>
                - As a sole Frontend developer, I built the frontend for
                Accesstype - An API driven subscription platform and seamless
                integration with recurring payments.<br />
                - Prior to this, I was part of Client Engineering team. We were
                responsible for building frontend websites that tightly
                integrated with Quintype. Our clients were from domains like
                digital media publishing, niche content, e-commerce etc. and had
                multilingual content.
              </p>
              <p>
                Couple of websites I worked on - <br />
                -{" "}
                <Link href="https://www.thequint.com" target>
                  Thequint
                </Link>
                <br />
                -{" "}
                <Link href="https://www.livehistoryindia.com" target>
                  Live History India
                </Link>
              </p>
            </Card>
            <Card title="Software Engineer" timeDuration="AUG 2015 - JAN 2011">
              <p>Worked on User interface for a Food delivering app.</p>
            </Card>
          </article>
          <article>
            <Heading2 heading="Education" iconClass="fas fa-graduation-cap" />
            <Card
              title="Bachelor of Engineering in Civil"
              timeDuration="2007 - 2011"
            >
              <p>Ujjain Engineering college Ujjain</p>
            </Card>
          </article>
        </section>

        <section className="resume-layout__right-pan">
          <Heading2 heading="Skills" iconClass="fas fa-toolbox" />
          <div className="skills-container">
            {SKILLS.map((skill, index) => <Chip key={index} value={skill} />)}
          </div>

          <a
            download
            href="Trapti-Rahangdale-Resume.pdf"
            className="resume-page__download"
          >
            <i className="fas fa-download" /> Download resume
          </a>
        </section>
      </div>
    </div>
  );
};

export default Resume;
