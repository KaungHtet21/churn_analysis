import { Form, Select } from "antd";

const SelectPaperlessBilling = ({ form }: any) => {
  const handlePaperlessBilling = (value: string) => {
    form.setFieldValue("PaperlessBilling", value);
  };

  return (
    <Form.Item
      label="Paperless billing"
      name={"PaperlessBilling"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select paperless billing" }]}
      required
    >
      <Select
        placeholder={"Select paperless billing"}
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
        onChange={handlePaperlessBilling}
      />
    </Form.Item>
  );
};

export default SelectPaperlessBilling;
