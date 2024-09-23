import { Form, Select } from "antd";

const SelectDeviceProtection = ({ form }: any) => {
  const handleDeviceProtection = (value: string) => {
    form.setFieldValue("DeviceProtection", value);
  };

  return (
    <Form.Item
      label="Device Protection"
      name={"DeviceProtection"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select device protection" }]}
      required
    >
      <Select
        placeholder={"Select device protection"}
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
        onChange={handleDeviceProtection}
      />
    </Form.Item>
  );
};

export default SelectDeviceProtection;
