import { motion } from "framer-motion";
import styled from "styled-components";

const ScrollIndicatorWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScrollIndicator = styled.div`
  width: 25px;
  height: 50px;
  border: 4px solid #000; /* Use your theme color */
  border-radius: 50px; /* Rounded edges */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2px; /* Inner padding */
`;

const Ball = styled(motion.div)`
  width: 12px;
  height: 12px;
  background-color: #000;
  border-radius: 50%;
  margin-bottom: 4px;
`;

const Indicator = () => {
  return (
    <ScrollIndicatorWrapper>
      <ScrollIndicator>
        <Ball
          animate={{ y: [0, 38, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </ScrollIndicator>
    </ScrollIndicatorWrapper>
  );
};

export default Indicator;
