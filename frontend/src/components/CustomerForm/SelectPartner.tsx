import { Form, Select } from "antd";

const SelectPartner = ({ form }: any) => {
  const handlePartner = (value: string) => {
    form.setFieldValue("Partner", value);
  };

  return (
    <Form.Item
      label="Partner"
      name={"Partner"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select partner" }]}
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
        onChange={handlePartner}
      />
    </Form.Item>
  );
};

export default SelectPartner;
