import { motion } from "framer-motion";
import styled from "styled-components";
import { staggerContainer } from "../utils/motion";

const Section = styled(motion.section)<{ $padding?: string }>`
  padding: ${(props) => props.$padding || "2rem"}; // Example padding style
  max-width: 1120px; // Equivalent to max-w-7xl in Tailwind
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 0;
`;

const HashSpan = styled.span`
  position: absolute;
  top: -80px;
`;

const StarWrapper = (Component: any, idName: any) =>
  function HOC() {
    return (
      <Section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <HashSpan id={idName}>&nbsp;</HashSpan>

        <Component />
      </Section>
    );
  };

export default StarWrapper;
