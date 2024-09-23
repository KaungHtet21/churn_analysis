import { Form, Select } from "antd";

const SelectPaymentMethod = ({ form }: any) => {
  const handlePaymentMethod = (value: string) => {
    form.setFieldValue("PaymentMethod", value);
  };

  return (
    <Form.Item
      label="Payment method"
      name={"PaymentMethod"}
      labelCol={{ span: 24 }}
      style={{ width: "100%" }}
      rules={[{ required: true, message: "Please select payment method" }]}
      required
    >
      <Select
        placeholder={"Select payment method"}
        options={[
          {
            label: "Electronic check",
            value: "Electronic check",
          },
          {
            label: "Mailed check",
            value: "Mailed check",
          },
          {
            label: "Bank transfer (automatic)",
            value: "Bank transfer",
          },
          {
            label: "Credit card (automatic)",
            value: "Credit card",
          },
        ]}
        onChange={handlePaymentMethod}
      />
    </Form.Item>
  );
};

export default SelectPaymentMethod;
