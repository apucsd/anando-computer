import { useState } from "react";
import { Table, Button, Modal, Form, Input, message } from "antd";
import {
  PiPlusLight,
  PiPencilSimpleLight,
  PiTrashLight
} from "react-icons/pi"; // Light variant icons

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const initialFAQs: FAQ[] = [
  {
    id: 1,
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    id: 2,
    question: "Do you provide international shipping?",
    answer: "Yes, we ship worldwide with additional shipping charges.",
  },
];

const FAQManager = () => {
  const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };

  const handleEdit = (faq: FAQ) => {
    setEditing(faq);
    form.setFieldsValue(faq);
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Delete FAQ?",
      content: "This action cannot be undone.",
      okText: "Yes, delete",
      okType: "danger",
      onOk: () => {
        setFaqs(faqs.filter(f => f.id !== id));
        message.success("FAQ deleted");
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      if (editing) {
        setFaqs(faqs.map(f => (f.id === editing.id ? { ...editing, ...values } : f)));
        message.success("FAQ updated");
      } else {
        const newFAQ: FAQ = {
          id: Math.max(0, ...faqs.map(f => f.id)) + 1,
          ...values,
        };
        setFaqs([...faqs, newFAQ]);
        message.success("FAQ added");
      }
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const columns = [
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
      render: (text: string) => <b>{text}</b>,
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
      ellipsis: true,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: FAQ) => (
        <div style={{ display: "flex", gap: 8 }}>
          <Button type="text" icon={<PiPencilSimpleLight />} onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="text" icon={<PiTrashLight />} danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>❓ FAQ Management</h2>
        <Button type="primary" icon={<PiPlusLight />} onClick={handleAdd}>
          Add FAQ
        </Button>
      </div>

      <Table bordered dataSource={faqs} columns={columns} rowKey="id" pagination={false} />

      <Modal
        open={open}
        title={editing ? "Edit FAQ" : "Add FAQ"}
        okText={editing ? "Update" : "Save"}
        onCancel={() => setOpen(false)}
        onOk={handleSubmit}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="question"
            label="Question"
            rules={[{ required: true, message: "Please enter a question" }]}
          >
            <Input placeholder="Enter FAQ question" />
          </Form.Item>
          <Form.Item
            name="answer"
            label="Answer"
            rules={[{ required: true, message: "Please enter the answer" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter FAQ answer" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FAQManager;
