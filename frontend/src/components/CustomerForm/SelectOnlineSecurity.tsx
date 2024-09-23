import { Form, Select } from "antd";

const SelectOnlineSecurity = ({ form }: any) => {
  const handleOnlineSecurity = (value: string) => {
    form.setFieldValue("OnlineSecurity", value);
  };

  return (
    <Form.Item
      label="Online Security"
      name={"OnlineSecurity"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select online security" }]}
      required
    >
      <Select
        placeholder={"Select online security"}
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
        onChange={handleOnlineSecurity}
      />
    </Form.Item>
  );
};

export default SelectOnlineSecurity;
