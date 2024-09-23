import { Form, Select } from "antd";

const SelectMultipleLines = ({ form }: any) => {
  const handleMultipleLines = (value: string) => {
    form.setFieldValue("MultipleLines", value);
  };

  return (
    <Form.Item
      label="Multiple lines"
      name={"MultipleLines"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select multiple lines" }]}
      required
    >
      <Select
        placeholder={"Select multiple lines"}
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
        onChange={handleMultipleLines}
      />
    </Form.Item>
  );
};

export default SelectMultipleLines;
