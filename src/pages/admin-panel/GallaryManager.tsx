import { useState } from "react";
import {
  Button,
  Table,
  Modal,
  Form,
  Input,
  Upload,
  Space,
  notification,
  Image,
} from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useCreateGalleryMutation, useDeleteGalleryMutation, useGetGalleryQuery } from "../../redux/feature/all-api/allApi";


type Gallery = {
  _id: number;
  title: string;
  image?: string | File;
};

const GalleryManager = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form] = Form.useForm();
  const [uploadFile, setUploadFile] = useState<File | null>(null);

  const [createGallery, { isLoading: isCreatingGallery }] =
    useCreateGalleryMutation();
  const [deleteGallery] = useDeleteGalleryMutation();
  const { data: galleryData } = useGetGalleryQuery([]);

  const handleAdd = () => {
    form.resetFields();
    setUploadFile(null);
    setEditingId(null);
    setModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    Modal.confirm({
      title: "Are you sure?",
      content: "Do you want to delete this image?",
      okText: "Yes, Delete",
      okType: "danger",
      centered: true,
      onOk: async () => {
        try {
          await deleteGallery(id).unwrap();
          notification.success({
            message: "Image deleted successfully",
          });
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
    if (!uploadFile) {
      notification.error({ message: "Please upload an image!" });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("image", uploadFile);

      await createGallery(formData).unwrap();
      notification.success({ message: "Image added successfully" });
      setModalOpen(false);
      setUploadFile(null);
    } catch (error: any) {
      notification.error({
        message: "Error",
        description: error?.data?.message || "Something went wrong",
      });
    }
  };

  const columns = [
    {
      title: "#",
      key: "index",
      render: (_: any, __: any, index: number) => index + 1,
      width: 50,
    },
    {
      title: "Preview",
      dataIndex: "image",
      key: "image",
      render: (img: string) => <Image width={80} height={50} src={img} />,
    },
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Gallery) => (
        <Space>
          <Button
            type="link"
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record._id)}
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
        <h1 style={{ fontSize: 22, fontWeight: 600 }}>Gallery</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
          Add Image
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={galleryData}
        rowKey="_id"
        bordered
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title={editingId ? "Update Image" : "Add Image"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={false}
      >
        <Form layout="vertical" form={form} onFinish={handleSave}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter image title" }]}
          >
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload
              beforeUpload={(file) => {
                setUploadFile(file);
                return false;
              }}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select Image</Button>
            </Upload>
            {uploadFile && (
              <p style={{ marginTop: 5, fontSize: 12 }}>
                Selected: {uploadFile.name}
              </p>
            )}
          </Form.Item>

          <div
            style={{
              textAlign: "right",
              display: "flex",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={isCreatingGallery}
            >
              {editingId ? "Update" : "Add"}
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default GalleryManager;
