import { Form, Select } from "antd";

const SelectGender = ({ form }: any) => {
  const handleSelecGender = (value: string) => {
    form.setFieldValue("gender", value);
  };

  return (
    <Form.Item
      label="Gender"
      name={"gender"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select gender" }]}
      required
    >
      <Select
        placeholder={"Select gender"}
        options={[
          {
            label: "Male",
            value: "Male",
          },
          {
            label: "Female",
            value: "Female",
          },
        ]}
        onChange={handleSelecGender}
      />
    </Form.Item>
  );
};

export default SelectGender;
