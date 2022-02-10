import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 2019, text: "engineering degree in electrical engineering" },
  { number: 2020, text: "different certifications in web development delivered by oppenclassroom, sololearn freeCodecamp" },
  { number: 2021, text: "fullstack js web development training at go my code" },
  { number: 2022, text: "fullstack js (mern) instructor at go my code" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievement</SectionTitle>
    <Boxes>
      {data.map((elt, index) => (
        <Box key={index}>
          <BoxNum>{elt.number}</BoxNum>
          <BoxText>{elt.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
