import { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Upload,
  Image,
  Input,
  message,
  notification,
  Typography,
  Space,
} from "antd";
import {
  UploadOutlined,
  DeleteOutlined,
  PlusOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import {
  useGetBannersQuery,
  useCreateBannerMutation,
  useDeleteBannerMutation,
} from "../../redux/feature/all-api/allApi";

const { Text } = Typography;

const Banner = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const { data: banners = [], isLoading } = useGetBannersQuery([]);
  const [createBanner, { isLoading: isCreating }] = useCreateBannerMutation();
  const [deleteBanner] = useDeleteBannerMutation();

  // 🟢 Open Modal
  const handleAdd = () => {
    form.resetFields();
    setPreviewUrl("");
    setUploadFile(null);
    setOpen(true);
  };

  // 🗑 Delete
  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "This banner will be permanently deleted.",
      okText: "Yes, delete",
      okType: "danger",
      centered: true,
      onOk: async () => {
        try {
          await deleteBanner(id).unwrap();
          notification.success({ message: "Banner deleted successfully" });
        } catch (error: any) {
          notification.error({
            message: "Error deleting banner",
            description: error?.data?.message || "Something went wrong",
          });
        }
      },
    });
  };

  // 📸 Handle upload preview
  const handleUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    setUploadFile(file);
    return false; // Prevent auto-upload
  };

  // 💾 Submit
  const handleSubmit = async () => {
    try {
      await form.validateFields();

      if (!uploadFile) {
        message.error("Please upload an image");
        return;
      }

      const values = form.getFieldsValue();
      const formData = new FormData();
      formData.append("image", uploadFile);
      if (values.title) formData.append("title", values.title);
      if (values.description) formData.append("description", values.description);

      await createBanner(formData).unwrap();

      notification.success({
        message: "Banner added successfully",
      });

      setOpen(false);
      form.resetFields();
      setPreviewUrl("");
      setUploadFile(null);
    } catch (err: any) {
      notification.error({
        message: "Failed to add banner",
        description: err?.data?.message || "Something went wrong",
      });
    }
  };

  // 🧱 Columns
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (url: string) => (
        <Image
          src={url}
          width={120}
          height={70}
          style={{
            borderRadius: 8,
            objectFit: "cover",
            boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          }}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title: string) => (
        <Text>{title || <Text type="secondary">No title</Text>}</Text>
      ),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (description: string) => (
        <span >{description ||   "No description"}</span>
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date: string) => (
        <Text type="secondary">
          {new Date(date).toLocaleDateString()}
        </Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          type="text"
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record._id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Space>
          <PictureOutlined style={{ fontSize: 22, color: "#1677ff" }} />
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: 0 }}>
            Homepage Banners
          </h2>
        </Space>

        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
        >
          Add Banner
        </Button>
      </div>

      {/* Table */}
      <Table
        bordered
        dataSource={banners}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
        loading={isLoading}
      />

      {/* Modal */}
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title="Add Banner"
        okText="Save"
        onOk={handleSubmit}
        confirmLoading={isCreating}
        centered
        width={800}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Title (optional)"
            name="title"
          >
            <Input placeholder="Enter banner title" />
          </Form.Item>

          <Form.Item
            label="Description (optional)"
            name="description"
          >
            <Input placeholder="Enter banner description" />
          </Form.Item>

          <Form.Item
            label="Upload Image"
            name="file"
            rules={[{ required: true, message: "Please upload an image" }]}
          >
            <Upload
              accept="image/*"
              beforeUpload={handleUpload}
              maxCount={1}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          {previewUrl && (
            <div style={{ textAlign: "center" }}>
              <Image
                src={previewUrl}
                width="100%"
                height={160}
                style={{
                  objectFit: "cover",
                  borderRadius: 10,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Banner;
