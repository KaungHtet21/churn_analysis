import { Form, Input } from "antd";

const MonthlyCharges = () => {
  return (
    <Form.Item
      label="Monthly Charges"
      name={"MonthlyCharges"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please enter monthly charges." }]}
      required
    >
      <Input placeholder="Type monthly charges" name="MonthlyCharges" />
    </Form.Item>
  );
};

export default MonthlyCharges;
