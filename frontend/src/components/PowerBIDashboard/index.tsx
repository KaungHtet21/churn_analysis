import { Typography } from "antd";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

const PowerBIDashboard = () => {
  return (
    <motion.div variants={textVariant()}>
      <Typography.Text
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          fontSize: 22,
          fontWeight: 600,
          marginInline: 100
        }}
      >
        Power BI Dashboard
      </Typography.Text>
      <iframe
        title="Customer_churn_analysis"
        style={{
          width: "100vw",
          height: "800px",
          marginTop: "16px",
        }}
        src="https://app.powerbi.com/reportEmbed?reportId=fe13d1c3-b751-4f81-8d93-7faf322c842a&autoAuth=true&ctid=7975c947-8f2e-41e3-a116-6c521c68837b"
      ></iframe>
    </motion.div>
  );
};

export default PowerBIDashboard;
