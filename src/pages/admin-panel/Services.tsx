import { useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Select,
  Space,
  Tag,
  Upload,
  message,
} from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";

type Service = {
  id: number;
  name: string;
  description: string;
  category: string;
  features: string[];
  featured: boolean;
  image?: File;
};

const initialServices: Service[] = [
  {
    id: 1,
    name: "ভিসা প্রসেসিং",
    description: "বিদেশ ভ্রমণের জন্য ভিসা প্রসেসিং সেবা।",
    category: "ভ্রমণ",
    features: ["দ্রুত প্রসেস", "কম খরচ"],
    featured: false,
  },
  {
    id: 2,
    name: "পাসপোর্ট রিনিউ",
    description: "পাসপোর্ট নবায়ন ও সংশোধন সেবা।",
    category: "ডকুমেন্ট",
    features: ["সহজ আবেদন", "অনলাইন ফলোআপ"],
    featured: false,
  },
];

const Services = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const handleAdd = () => {
    form.resetFields();
    setEditorContent("");
    setUploadFile(null);
    setEditingId(null);
    setModalOpen(true);
  };

  const handleEdit = (record: Service) => {
    setEditingId(record.id);
    form.setFieldsValue({
      ...record,
      featured: record.featured ? "true" : "false",
    });
    setEditorContent(record.description);
    setModalOpen(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you want to delete this service?",
      okText: "Yes, Delete",
      okType: "danger",
      onOk: () => {
        setServices((prev) => prev.filter((s) => s.id !== id));
        message.success("Service deleted");
      },
    });
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      const newData = {
        ...values,
        description: editorContent,
        image: uploadFile,
        featured: values.featured === "true",
      };

      if (editingId) {
        setServices((prev) =>
          prev.map((s) => (s.id === editingId ? { ...s, ...newData } : s))
        );
        message.success("Service updated successfully");
      } else {
        const newService: Service = {
          ...newData,
          id: Math.max(0, ...services.map((s) => s.id)) + 1,
        };
        setServices((prev) => [...prev, newService]);
        message.success("Service added successfully");
      }

      setModalOpen(false);
    } catch {
      message.error("Please fill all required fields");
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "id",
      key: "id",
      width: 50,
      render: (_: any, __: any, index: number) => index + 1,
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Features",
      dataIndex: "features",
      key: "features",
      render: (features: string[]) =>
        features?.map((f, i) => (
          <Tag color="blue" key={i}>
            {f}
          </Tag>
        )),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Service) => (
        <Space>
          <Button
            type="link"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
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
        <h1 style={{ fontSize: 22, fontWeight: 600 }}>Services</h1>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
        >
          Add Service
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={services}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingId ? "Update Service" : "Add Service"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={800}
        onOk={handleSave}
        okText={editingId ? "Update" : "Add"}
      >
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            featured: "false",
          }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter service name" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please enter category" }]}
          >
            <Input placeholder="Enter category" />
          </Form.Item>

          <Form.Item label="Featured" name="featured">
            <Select>
              <Select.Option value="true">Featured</Select.Option>
              <Select.Option value="false">Not Featured</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Features">
            <Select
              mode="tags"
              tokenSeparators={[","]}
              placeholder="Type and press Enter"
              onChange={(vals) =>
                form.setFieldValue("features", vals as string[])
              }
              value={form.getFieldValue("features")}
            />
          </Form.Item>

          <Form.Item label="Image">
            <Upload
              beforeUpload={(file) => {
                setUploadFile(file);
                return false; // prevent auto upload
              }}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            {uploadFile && (
              <p style={{ marginTop: 5, fontSize: 12 }}>
                Selected: {uploadFile.name}
              </p>
            )}
          </Form.Item>

          <Form.Item label="Details">
            <JoditEditor value={editorContent} onChange={setEditorContent} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Services;
