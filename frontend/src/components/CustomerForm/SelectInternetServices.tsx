import { Form, Select } from "antd";

const SelectInternetService = ({ form }: any) => {
  const handleInternetService = (value: string) => {
    form.setFieldValue("InternetService", value);
  };

  return (
    <Form.Item
      label="Internet service"
      name={"InternetService"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select internet services" }]}
      required
    >
      <Select
        placeholder={"Select internet services"}
        options={[
          {
            label: "DSL",
            value: "DSL",
          },
          {
            label: "Fiber optic",
            value: "Fiber optic",
          },
          {
            label: "No internet service",
            value: "Not internet service"
          }
        ]}
        onChange={handleInternetService}
      />
    </Form.Item>
  );
};

export default SelectInternetService;
