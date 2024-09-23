import { Flex } from "antd";
import Styles from "./styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import Words from "../../canvas/word";
import { motion } from "framer-motion";

const Vision = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      style={{
        width: "100%",
      }}
    >
      <Flex vertical style={{ width: "50%", gap: 18 }}>
        <Styles.Wrapper variants={textVariant()}>
          <Styles.Title>Vision</Styles.Title>
          <Styles.Description>
            To leverage advanced data mining and machine learning techniques to
            accurately predict customer churn in the telecom industry, enabling
            businesses to enhance customer retention, reduce costs, and improve
            customer satisfaction by providing actionable insights.
          </Styles.Description>
        </Styles.Wrapper>

        <Styles.Wrapper variants={textVariant(0.5)}>
          <Styles.Title>Mission</Styles.Title>
          <Styles.Description>
            To become a leading provider of predictive analytics solutions that
            empower telecom companies to make data-driven decisions, proactively
            manage customer relationships, and ultimately create a more
            sustainable and customer-centric industry.
          </Styles.Description>
        </Styles.Wrapper>
      </Flex>
      <motion.div style={{ width: "100%", height: "500px" }} variants={textVariant()}>
        <Words />
      </motion.div>
    </Flex>
  );
};

export default SectionWrapper(Vision, "vision");
