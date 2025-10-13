import React from "react";
import { Outlet, ScrollRestoration, NavLink, useLocation } from "react-router-dom";
import {
  Layout,
  Menu,
  theme,
} from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  PictureOutlined,
  SettingOutlined,
  BgColorsOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

type AdminNavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: AdminNavItem[];
};

const adminNav: AdminNavItem[] = [
  { label: "Dashboard", path: "/admin", icon: <DashboardOutlined /> },
  { label: "Services", path: "/admin/services", icon: <AppstoreOutlined /> },
  // { label: "About Us", path: "/admin/about", icon: <InfoCircleOutlined /> },
  { label: "Gallery", path: "/admin/gallery", icon: <PictureOutlined /> },
  {
    label: "Settings",
    path: "/admin/settings",
    icon: <SettingOutlined />,
    children: [
      { label: "Banner", path: "/admin/settings/banner", icon: <PictureOutlined /> },
      { label: "Theme Color", path: "/admin/settings/theme", icon: <BgColorsOutlined /> },
      { label: "FAQ", path: "/admin/settings/faq", icon: <QuestionCircleOutlined /> },
    ],
  },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Antd Menu expects items in a specific format
  const menuItems = adminNav.map((item) => {
    if (item.children) {
      return {
        key: item.path,
        icon: item.icon,
        label: item.label,
        children: item.children.map((child) => ({
          key: child.path,
          icon: child.icon,
          label: <NavLink to={child.path}>{child.label}</NavLink>,
        })),
      };
    }
    return {
      key: item.path,
      icon: item.icon,
      label: <NavLink to={item.path}>{item.label}</NavLink>,
    };
  });

  return (
    <Sider
      width={230}
      theme="light"
      className="shadow-sm"
      style={{
        borderRight: "1px solid #f0f0f0",
      }}
    >
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 600,
          fontSize: 18,
          color: "#1677ff",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        Admin Panel
      </div>

      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultOpenKeys={adminNav.map((i) => i.path)}
        items={menuItems}
        style={{ borderRight: 0, height: "100%" }}
      />
    </Sider>
  );
};

const AdminLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#1677ff",
          color: "white",
          fontWeight: 600,
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          paddingLeft: 24,
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          zIndex: 10,
        }}
      >
        Admin Dashboard
      </Header>

      <Layout>
        <Sidebar />

        <Layout style={{ padding: "16px", background: colorBgContainer }}>
          <Content
            style={{
              padding: 24,
              background: "#fff",
              borderRadius: 8,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              minHeight: "calc(100vh - 120px)",
            }}
          >
            <Outlet />
            <ScrollRestoration />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
