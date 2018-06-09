import React from "react";
import PageTitle from "../../components/page-title/page-title";
import Description from "../../components/description/description";
import Chip from "../../components/chip/chip";
import Card from "./card";
import Button from "../../components/button/button";
import Heading2 from "../../components/heading-2/heading-2";

import "./resume.css";
const SKILLS = [
  "html5",
  "css3",
  "javascript",
  "react",
  "webpack",
  "jest",
  "frontend performance",
  "accessibility",
  "jQuery",
  "sass",
  "bem",
  "smacss",
  "itcss"
];

const Resume = () => {
  return (
    <div className="resume-page">
      <PageTitle pageTitle="Resume" />
      <div className="two-column-layout">
        <section className="left-pan">
          <article>
            <Heading2 heading="Work Experience" iconClass="fas fa-bookmark" />
            <Card
              title="Senior Frontend Developer"
              timeDuration="APR 2018-Present"
            >
              <p> I am working on redesigning our core product, the CMS and implementing the design system which will help in building other products faster.
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
                - https://www.thequint.com/ <br />
                - https://www.livehistoryindia.com/
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
              timeDuration="JUN 2007 - JUN 2011"
            >
              <p>Ujjain Engineering college Ujjain</p>
            </Card>
          </article>
        </section>

        <section className="right-pan">
          <Heading2 heading="Skills" iconClass="fas fa-toolbox" />
          <div className="skills-container">
            {SKILLS.map(skill => <Chip value={skill} />)}
          </div>

          <Button classes="button--primary">
            <i className="fas fa-download" /> Download resume
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Resume;
