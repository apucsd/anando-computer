import { useState, useEffect } from "react";
import { Card, Row, Col, Form, Input, Button, message, Divider } from "antd";
import { BgColorsOutlined, SaveOutlined, UndoOutlined } from "@ant-design/icons";

const ThemeSettings = () => {
  const [form] = Form.useForm();

  // Default or saved theme colors
  const [theme, setTheme] = useState({
    primary: "#1677ff",
    secondary: "#13c2c2",
    background: "#ffffff",
    text: "#000000",
  });

  useEffect(() => {
    // Load from localStorage or API if needed
    const saved = localStorage.getItem("theme-settings");
    if (saved) setTheme(JSON.parse(saved));
  }, []);

  const handleSave = async () => {
    const values = await form.validateFields();
    setTheme(values);
    localStorage.setItem("theme-settings", JSON.stringify(values));
    message.success("Theme colors updated!");
  };

  const handleReset = () => {
    const defaultTheme = {
      primary: "#1677ff",
      secondary: "#13c2c2",
      background: "#ffffff",
      text: "#000000",
    };
    setTheme(defaultTheme);
    form.setFieldsValue(defaultTheme);
    message.info("Theme reset to default");
  };

  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>
        🎨 Website Theme Settings
      </h2>

      <Row gutter={24}>
        {/* Left: Color pickers */}
        <Col xs={24} md={12}>
          <Card
            title={
              <span>
                <BgColorsOutlined /> Theme Customization
              </span>
            }
            bordered
          >
            <Form
              layout="vertical"
              form={form}
              initialValues={theme}
              onValuesChange={(_, all) => setTheme(all)}
            >
              <Form.Item label="Primary Color" name="primary">
                <Input type="color" />
              </Form.Item>

              <Form.Item label="Secondary Color" name="secondary">
                <Input type="color" />
              </Form.Item>

              <Form.Item label="Background Color" name="background">
                <Input type="color" />
              </Form.Item>

              <Form.Item label="Text Color" name="text">
                <Input type="color" />
              </Form.Item>

              <Divider />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  icon={<UndoOutlined />}
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  onClick={handleSave}
                >
                  Save Theme
                </Button>
              </div>
            </Form>
          </Card>
        </Col>

        {/* Right: Live Preview */}
        <Col xs={24} md={12}>
          <Card title="Live Website Preview" bordered>
            <div
              style={{
                borderRadius: 8,
                padding: 20,
                background: theme.background,
                color: theme.text,
                border: `1px solid ${theme.secondary}`,
                transition: "all 0.3s",
              }}
            >
              <h3 style={{ color: theme.primary, marginBottom: 10 }}>
                Example Hero Section
              </h3>
              <p style={{ color: theme.text }}>
                This is how your website text might look with current theme
                colors.
              </p>
              <Button
                type="primary"
                style={{
                  backgroundColor: theme.primary,
                  borderColor: theme.primary,
                  marginRight: 10,
                }}
              >
                Primary Button
              </Button>
              <Button
                style={{
                  backgroundColor: theme.secondary,
                  borderColor: theme.secondary,
                  color: "#fff",
                }}
              >
                Secondary
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ThemeSettings;
