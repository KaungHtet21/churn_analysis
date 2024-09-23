import { Typography } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";

const Styles = {
    Wrapper: styled(motion.div)`
        display: flex;
        flex-direction: column;
        gap: 16px;
    `,
    Title: styled(Typography.Text)`
        font-size: 22px;
        font-weight: 600;
    `,
    Description: styled(Typography.Text)`
        font-size: 16px;
        font-weight: 400;
        color: #999797;
    `
}

export default Styles