import { Form, Input } from "antd";

const TotalCharges = () => {
  return (
    <Form.Item
      label="Total Charges"
      name={"TotalCharges"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please enter total charges." }]}
      required
    >
      <Input placeholder="Type total charges" name="TotalCharges" />
    </Form.Item>
  );
};

export default TotalCharges;
