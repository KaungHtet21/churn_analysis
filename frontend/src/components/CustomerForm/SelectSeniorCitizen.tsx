import { Form, Select } from "antd";

const SelectSeniorCitizen = ({ form }: any) => {
  const handleSeniorCitizen = (value: string) => {
    form.setFieldValue("SeniorCitizen", value);
  };

  return (
    <Form.Item
      label="Senior Citizen"
      name={"SeniorCitizen"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select senior citizen" }]}
      required
    >
      <Select
        placeholder={"Select senior citizen"}
        options={[
          {
            label: "Yes",
            value: "1",
          },
          {
            label: "No",
            value: "0",
          },
        ]}
        onChange={handleSeniorCitizen}
      />
    </Form.Item>
  );
};

export default SelectSeniorCitizen;
