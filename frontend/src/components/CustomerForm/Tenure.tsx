import { Form, Input } from "antd";

const Tenure = () => {
  return (
    <Form.Item
      label="Tenure"
      name={"tenure"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please enter tenure value." }]}
      required
    >
      <Input placeholder="Type tenure value" name="tenure" />
    </Form.Item>
  );
};

export default Tenure;
