import { useState } from "react";
import { Table, Button, Modal, Form, Select, Upload, Image, message } from "antd";
import { UploadOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const initialBanners = [
  {
    id: 1,
    type: "image",
    url: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    type: "video",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const Banner = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleAdd = () => {
    form.resetFields();
    setPreviewUrl("");
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Delete this banner?",
      content: "This action cannot be undone.",
      okText: "Yes, delete",
      okType: "danger",
      onOk: () => setBanners((b) => b.filter((bn) => bn.id !== id)),
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (!previewUrl) {
        message.error("Please upload a file first!");
        return;
      }
      const newBanner = {
        id: Math.max(0, ...banners.map((b) => b.id)) + 1,
        type: values.type,
        url: previewUrl,
      };
      setBanners([...banners, newBanner]);
      message.success("Banner added successfully!");
      setOpen(false);
    } catch (err) {
      console.log("Validation failed:", err);
    }
  };

  const handleUpload = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return false; // prevent upload to server
  };

  const columns = [
    {
      title: "Preview",
      dataIndex: "url",
      key: "url",
      render: (url: string, record: any) =>
        record.type === "image" ? (
          <Image src={url} width={100} height={60} style={{ objectFit: "cover" }} />
        ) : (
          <video
            src={url}
            width={120}
            height={60}
            style={{ borderRadius: 6 }}
            controls
          />
        ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type: string) => type.charAt(0).toUpperCase() + type.slice(1),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button
          type="text"
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>🎯 Hero Section Banners</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
        >
          Add Banner
        </Button>
      </div>

      <Table
        bordered
        dataSource={banners}
        columns={columns}
        rowKey="id"
        pagination={false}
      />

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        title="Add Banner"
        okText="Save"
        onOk={handleSubmit}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: "Please select a type" }]}
            initialValue="image"
          >
            <Select
              onChange={() => {
                setPreviewUrl("");
              }}
            >
              <Option value="image">Image</Option>
              <Option value="video">Video</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Upload File" name="file" rules={[{ required: true }]}>
            <Upload
              accept={
                form.getFieldValue("type") === "video" ? "video/*" : "image/*"
              }
              beforeUpload={handleUpload}
              maxCount={1}
              showUploadList={false}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          {previewUrl && (
            <div style={{ textAlign: "center" }}>
              {form.getFieldValue("type") === "image" ? (
                <Image
                  src={previewUrl}
                  width="100%"
                  height={150}
                  style={{ objectFit: "cover", borderRadius: 8 }}
                />
              ) : (
                <video
                  src={previewUrl}
                  controls
                  width="100%"
                  height={150}
                  style={{ borderRadius: 8 }}
                />
              )}
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default Banner;
