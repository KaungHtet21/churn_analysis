import { Form, Select } from "antd";

const SelectDepedent = ({ form }: any) => {
  const handleDepedent = (value: string) => {
    form.setFieldValue("Dependents", value);
  };

  return (
    <Form.Item
      label="Depedent"
      name={"Dependents"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select depedent" }]}
      required
    >
      <Select
        placeholder={"Select depedent"}
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
        onChange={handleDepedent}
      />
    </Form.Item>
  );
};

export default SelectDepedent;
