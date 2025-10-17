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
  notification,
  Image,
} from "antd";
import { PlusOutlined, DeleteOutlined, UploadOutlined, CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import JoditEditor from "jodit-react";
import { useCreateServiceMutation, useDeleteServiceMutation, useGetServicesQuery } from "../../redux/feature/all-api/allApi";

type Service = {
  _id: number;
  name: string;
  description: string;
  features: string[];
  featured: boolean;
  image?: File;
};



const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const [editorContent, setEditorContent] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const [createService, { isLoading: isCreatingService }] = useCreateServiceMutation();
  const [deleteService] = useDeleteServiceMutation()
  const { data: servicesData } = useGetServicesQuery([])

  const handleAdd = () => {
    form.resetFields();
    setEditorContent("");
    setUploadFile(null);
    setEditingId(null);
    setModalOpen(true);
  };



  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you want to delete this service?",
      okText: "Yes, Delete",
      okType: "danger",
      centered: true,
      onOk: async () => {
        try {
          const res = await deleteService(id).unwrap()
          if (res.result) {
            notification.success({
              message: "Service created successfully",
              description: "Service created successfully",
            });
          }

        } catch (error: any) {
          notification.error({
            message: "Error",
            description: error?.data?.message || "Something went wrong",
          });
        }
      },
    });
  };

  const handleSave = async (values: any) => {
    try {


      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("description", values.description);
      formData.append("featured", values.featured);
      values.features.forEach((feature: string) => {
        formData.append("features[]", feature);
      });
      formData.append("content", editorContent);
      if (uploadFile) {
        formData.append("image", uploadFile);
      }

      // console.log(values)


      const res = await createService(formData).unwrap()
      if (res.result) {
        notification.success({
          message: "Service created successfully",
          description: "Service created successfully",
        });
      }


      setModalOpen(false);
    } catch (error: any) {
      console.log(error)
      notification.error({
        message: "Error",
        description: error?.data?.message || "Something went wrong",
      });
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
    { title: "image", dataIndex: "image", key: "image", render: (text: string) => <Image width={50} height={50} src={text} alt="" /> },
    { title: "Description", dataIndex: "description", key: "description" },
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
      title: "Featued",
      dataIndex: "featured",
      key: "featured",
      render: (isFeatured: boolean) =>
        <Tag
          icon={isFeatured ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
          color={isFeatured ? "green" : "red"}
          style={{ fontWeight: 500 }}
        >
          {isFeatured ? "Yes" : "No"}
        </Tag>

    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Service) => (
        <Space>

          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record?._id)}
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
        dataSource={servicesData}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingId ? "Update Service" : "Add Service"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={800}
        footer={false}


      >
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSave}

        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input placeholder="Enter service name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <Input placeholder="Enter description" />
          </Form.Item>

          <Form.Item label="Featured" name="featured">
            <Select>
              <Select.Option value={true}>Yes</Select.Option>
              <Select.Option value={false}>No</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Features" name="features">
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

          <Form.Item label="Content">
            <JoditEditor value={editorContent} onBlur={setEditorContent} onChange={() => { }} />
          </Form.Item>
          <div style={{ textAlign: "right", display: "flex", gap: 10, justifyContent: "flex-end" }}>
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button type="primary" htmlType="submit" loading={isCreatingService}>
              {editingId ? "Update" : "Add"}
            </Button>
          </div>
        </Form>

      </Modal>
    </div>
  );
};

export default Services;
