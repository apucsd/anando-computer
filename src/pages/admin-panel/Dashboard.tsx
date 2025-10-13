import { Card, Row, Col, Statistic, Button } from "antd";
import {
  AppstoreOutlined,
  PictureOutlined,
  UserOutlined,
  SettingOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 16 }}>
        👋 Welcome, Admin!
      </h2>

      <Row gutter={24} style={{ marginBottom: 32 }}>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Total Services"
              value={8}
              prefix={<AppstoreOutlined style={{ color: "#1677ff" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Banners"
              value={3}
              prefix={<PictureOutlined style={{ color: "#faad14" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Users"
              value={12}
              prefix={<UserOutlined style={{ color: "#52c41a" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Settings"
              value={4}
              prefix={<SettingOutlined style={{ color: "#722ed1" }} />}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Quick Links" bordered>
        <Row gutter={16}>
          <Col xs={24} md={6}>
            <Link to="/admin/services">
              <Button type="default" block icon={<AppstoreOutlined />}>Manage Services <ArrowRightOutlined /></Button>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <Link to="/admin/settings/banner">
              <Button type="default" block icon={<PictureOutlined />}>Manage Banners <ArrowRightOutlined /></Button>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <Link to="/admin/settings/faq">
              <Button type="default" block icon={<SettingOutlined />}>FAQ Settings <ArrowRightOutlined /></Button>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <Link to="/admin/settings/theme">
              <Button type="default" block icon={<SettingOutlined />}>Theme Settings <ArrowRightOutlined /></Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;
