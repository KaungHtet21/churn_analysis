import { Form, Select } from "antd";

const SelectOnlineBackup = ({ form }: any) => {
  const handleOnlineBackup = (value: string) => {
    form.setFieldValue("OnlineBackup", value);
  };

  return (
    <Form.Item
      label="Online backup"
      name={"OnlineBackup"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select online backup" }]}
      required
    >
      <Select
        placeholder={"Select online backup"}
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
        onChange={handleOnlineBackup}
      />
    </Form.Item>
  );
};

export default SelectOnlineBackup;
