import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding style={{ position: 'relative', overflow: 'hidden' }}>
      <LeftSection style={{ position: 'relative', zIndex: 2 }}>
        <SectionTitle main center>
          Hello! <br />
          I'm Shreekanth
        </SectionTitle>
        <SectionText>
          Java Developer with 3+ years of experience in Java, Spring Boot, Oracle, and enterprise application development, 
          specializing in telecom loyalty and campaign management platforms. 
          Skilled in designing microservices, integrating message queues (IBM MQ), 
          and automating backend workflows using shell scripting.
          Strong experience in report generation using Qlik Sense & Metabase and end-to-end deployments across SIT, Pre-Prod, and Production. 
          Proven ability to enhance system performance, automate operations, and deliver scalable, 
           reliable enterprise-grade applications.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
            Fiverr
          </LinkButton>
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
