import { Form, Select } from "antd";

const SelectContract = ({ form }: any) => {
  const handleContract = (value: string) => {
    form.setFieldValue("Contract", value);
  };

  return (
    <Form.Item
      label="Contract"
      name={"Contract"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select contract" }]}
      required
    >
      <Select
        placeholder={"Select contract"}
        options={[
          {
            label: "Month-to-month",
            value: "Month-to-month",
          },
          {
            label: "One year",
            value: "One year",
          },
          {
            label: "Two year",
            value: "Two year",
          },
        ]}
        onChange={handleContract}
      />
    </Form.Item>
  );
};

export default SelectContract;
