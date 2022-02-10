import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
const Hero = (mailto) => {
  const handleClick = () => {
    window.location = "mailto:wafibenjeddou@gmail.com";
  };
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome
          <br /> Wafi Ben_Jeddou <br />
          Web Developer
        </SectionTitle>
        <SectionText>
          Develop web Application from scratch using diffrent technologies. I
          can take the idea of your project to any next level you want
        </SectionText>
        <Button onClick={handleClick}>Send Email</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
