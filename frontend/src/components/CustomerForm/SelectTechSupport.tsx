import { Form, Select } from "antd";

const SelectTechSupport = ({ form }: any) => {
  const handleTechSupport = (value: string) => {
    form.setFieldValue("TechSupport", value);
  };

  return (
    <Form.Item
      label="Tech Support"
      name={"TechSupport"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select tech support" }]}
      required
    >
      <Select
        placeholder={"Select tech support"}
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
        onChange={handleTechSupport}
      />
    </Form.Item>
  );
};

export default SelectTechSupport;
