import { Form, Select } from "antd";

const SelectPhoneService = ({ form }: any) => {
  const handlePhoneService = (value: string) => {
    form.setFieldValue("PhoneService", value);
  };

  return (
    <Form.Item
      label="Phone Service"
      name={"PhoneService"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select phone service" }]}
      required
    >
      <Select
        placeholder={"Select partner"}
        options={[
          {
            label: "Yes",
            value: "Yes",
          },
          {
            label: "No",
            value: "No",
          },
        ]}
        onChange={handlePhoneService}
      />
    </Form.Item>
  );
};

export default SelectPhoneService;
