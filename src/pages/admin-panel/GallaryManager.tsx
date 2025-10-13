import { useState } from "react";
import { Table, Button, Modal, Form, Input, Upload, Image, message } from "antd";
import { PiPlusLight, PiTrashLight } from "react-icons/pi";

interface GalleryImage {
  id: number;
  title: string;
  url: string;
}

const initialGallery: GalleryImage[] = [
  {
    id: 1,
    title: "Beautiful Landscape",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "City View",
    url: "https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&fit=crop&w=900&q=80",
  },
];

const GalleryManager = () => {
  const [gallery, setGallery] = useState<GalleryImage[]>(initialGallery);
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.resetFields();
    setPreviewUrl("");
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Delete this image?",
      okText: "Yes, delete",
      okType: "danger",
      onOk: () => {
        setGallery(gallery.filter(img => img.id !== id));
        message.success("Image deleted");
      },
    });
  };

  const handleFileChange = (file: File) => {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return false; // prevent upload to server
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (!previewUrl) {
        message.error("Please upload an image!");
        return;
      }
      const newImage: GalleryImage = {
        id: Math.max(0, ...gallery.map(g => g.id)) + 1,
        title: values.title,
        url: previewUrl,
      };
      setGallery([...gallery, newImage]);
      message.success("Image added");
      setOpen(false);
      setPreviewUrl("");
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Preview",
      dataIndex: "url",
      key: "url",
      render: (url: string) => <Image src={url} width={100} height={60} style={{ objectFit: "cover" }} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: GalleryImage) => (
        <Button
          type="text"
          icon={<PiTrashLight />}
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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>🖼️ Gallery Images</h2>
        <Button type="primary" icon={<PiPlusLight />} onClick={handleAdd}>
          Add Image
        </Button>
      </div>

      <Table bordered dataSource={gallery} columns={columns} rowKey="id" pagination={false} />

      <Modal
        open={open}
        title="Add Gallery Image"
        okText="Save"
        onCancel={() => setOpen(false)}
        onOk={handleSubmit}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Image Title"
            name="title"
            rules={[{ required: true, message: "Please enter image title" }]}
          >
            <Input placeholder="Enter image title" />
          </Form.Item>

          <Form.Item label="Upload Image">
            <Upload
              beforeUpload={(file) => handleFileChange(file)}
              maxCount={1}
              showUploadList={false}
              accept="image/*"
            >
              <Button>Select Image</Button>
            </Upload>
          </Form.Item>

          {previewUrl && (
            <div style={{ textAlign: "center", marginTop: 10 }}>
              <Image src={previewUrl} width="100%" height={150} style={{ objectFit: "cover", borderRadius: 8 }} />
            </div>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default GalleryManager;
