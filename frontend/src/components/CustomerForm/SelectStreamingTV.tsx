import { Form, Select } from "antd";

const SelectStreamingTV = ({ form }: any) => {
  const handleStreamingTV = (value: string) => {
    form.setFieldValue("StreamingTV", value);
  };

  return (
    <Form.Item
      label="Streaming TV"
      name={"StreamingTV"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select streaming TV" }]}
      required
    >
      <Select
        placeholder={"Select streaming TV"}
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
        onChange={handleStreamingTV}
      />
    </Form.Item>
  );
};

export default SelectStreamingTV;
