import { Button, Flex, Form, Spin, Typography, message } from "antd";
import SelectGender from "./SelectGender";
import SelectSeniorCitizen from "./SelectSeniorCitizen";
import SelectPartner from "./SelectPartner";
import SelectDepedent from "./SelectDepedent";
import Tenure from "./Tenure";
import SelectPhoneService from "./SelectPhoneService";
import SelectMultipleLines from "./SelectMultipleLines";
import SelectInternetService from "./SelectInternetServices";
import SelectOnlineSecurity from "./SelectOnlineSecurity";
import SelectOnlineBackup from "./SelectOnlineBackup";
import SelectDeviceProtection from "./SelectDeviceProtection";
import SelectTechSupport from "./SelectTechSupport";
import SelectStreamingTV from "./SelectStreamingTV";
import SelectStreamingMovies from "./SelectStreamingMovies";
import SelectContract from "./SelectContract";
import SelectPaperlessBilling from "./SelectPaperlessBilling";
import SelectPaymentMethod from "./SelectPaymentMethod";
import MonthlyCharges from "./MonthlyCharges";
import TotalCharges from "./TotalCharges";
import { SectionWrapper } from "../../hoc";
import {motion} from "framer-motion"
import { textVariant } from "../../utils/motion";
import { useState } from "react";
import { LoadingOutlined } from '@ant-design/icons'

const CustomerForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    setLoading(true)
    try{
        const response = await fetch('http://127.0.0.1:5000/process_form', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
        setLoading(false)
        const result = await response.json();
        messageApi.open({
          type: result?.prediction === "Yes" ? "success" : "error",
          content: `Churn = ${result?.prediction}`
        })
    }catch(error) {
        console.log("Error = ", error)
    }

  };

  return (
    <motion.div variants={textVariant()}>
      {contextHolder}
      <Typography.Text style={{fontSize: "22px", fontWeight: "600", marginBottom: "16px"}}>Customer Form</Typography.Text>
      <Form
        variant="filled"
        form={form}
        onFinish={onFinish}
        onFinishFailed={() => console.log("Form fail")}
        autoComplete="off"
      >
        <SelectGender form={form} />
        <SelectSeniorCitizen form={form} />
        <SelectPartner form={form} />
        <SelectDepedent form={form} />
        <Tenure />
        <SelectPhoneService form={form} />
        <SelectMultipleLines form={form} />
        <SelectInternetService form={form} />
        <SelectOnlineSecurity form={form} />
        <SelectOnlineBackup form={form} />
        <SelectDeviceProtection form={form} />
        <SelectTechSupport form={form} />
        <SelectStreamingTV form={form} />
        <SelectStreamingMovies form={form} />
        <SelectContract form={form} />
        <SelectPaperlessBilling form={form} />
        <SelectPaymentMethod form={form} />
        <MonthlyCharges />
        <TotalCharges />
        <Flex justify="flex-end" align="center" gap={16}>
          <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="reset">Reset</Button>
          </Form.Item>
        </Flex>
      </Form>
      <Spin spinning={loading} indicator={<LoadingOutlined spin/>} size='large' fullscreen />
    </motion.div>
  );
};

export default SectionWrapper(CustomerForm, "Form");
