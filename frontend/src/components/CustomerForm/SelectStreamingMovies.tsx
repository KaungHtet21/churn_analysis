import { Form, Select } from "antd";

const SelectStreamingMovies = ({ form }: any) => {
  const handleStreamingMovies = (value: string) => {
    form.setFieldValue("StreamingMovies", value);
  };

  return (
    <Form.Item
      label="Streaming Movies"
      name={"StreamingMovies"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select streaming movies" }]}
      required
    >
      <Select
        placeholder={"Select streaming movies"}
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
        onChange={handleStreamingMovies}
      />
    </Form.Item>
  );
};

export default SelectStreamingMovies;
