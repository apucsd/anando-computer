import { Card, Row, Col, Statistic, Button } from "antd";
import { FaTh, FaImage, FaUser, FaCog, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetDashboardStatsQuery } from "../../redux/feature/all-api/allApi";

const Dashboard = () => {
  const { data } = useGetDashboardStatsQuery([])
  // console.log(data)

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
              value={data?.totalServices}
              prefix={<FaTh style={{ color: "#1677ff" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Banners"
              value={data?.totalBanners}
              prefix={<FaImage style={{ color: "#faad14" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="FAQs"
              value={data?.totalFaqs}
              prefix={<FaUser style={{ color: "#52c41a" }} />}
            />
          </Card>
        </Col>
        <Col xs={24} md={6}>
          <Card bordered>
            <Statistic
              title="Galleries"
              value={data?.totalGalleries}
              prefix={<FaCog style={{ color: "#722ed1" }} />}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Quick Links" bordered>
        <Row gutter={16}>
          <Col xs={24} md={6}>
            <Link to="/admin/services">
              <Button type="default" block icon={<FaTh />}>Manage Services <FaArrowRight /></Button>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <Link to="/admin/settings/banner">
              <Button type="default" block icon={<FaImage />}>Manage Banners <FaArrowRight /></Button>
            </Link>
          </Col>
          <Col xs={24} md={6}>
            <Link to="/admin/settings/faq">
              <Button type="default" block icon={<FaCog />}>FAQ Settings <FaArrowRight /></Button>
            </Link>
          </Col>
         
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;
