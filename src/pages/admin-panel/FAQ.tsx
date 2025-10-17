import { useState } from "react";
import { Table, Button, Modal, Form, Input, notification } from "antd";
import { PiPlusLight, PiTrashLight } from "react-icons/pi";
import { useCreateFAQMutation, useDeleteFAQMutation, useGetFAQsQuery } from "../../redux/feature/all-api/allApi";


interface FAQ { 
  _id: string;
  question: string;
  answer: string;
}

const FAQManager = () => {
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<FAQ | null>(null);
  const [form] = Form.useForm();

  // RTK Query hooks
  const { data: faqs = [], isLoading } = useGetFAQsQuery([]);
  const [createFaq, { isLoading: isCreating }] = useCreateFAQMutation();
  const [deleteFaq] = useDeleteFAQMutation();

  const handleAdd = () => {
    setEditing(null);
    form.resetFields();
    setOpen(true);
  };


  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Delete FAQ?",
      content: "This action cannot be undone.",
      okText: "Yes, delete",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteFaq(id).unwrap();
          notification.success({ message: "FAQ deleted successfully" });
        } catch (err: any) {
          notification.error({
            message: "Error",
            description: err?.data?.message || "Something went wrong",
          });
        }
      },
    });
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      
       const res = await createFaq(values).unwrap();
       if(res.result){
        notification.success({ message: "FAQ added successfully" });
       }
    
      setOpen(false);
    } catch (err: any) {
      notification.error({
        message: "Error",
        description: err?.data?.message || "Something went wrong",
      });
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
          
          <Button
            type="text"
            icon={<PiTrashLight />}
            danger
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
        </div>
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
        <h2 style={{ fontSize: 20, fontWeight: 600 }}>❓ FAQ Management</h2>
        <Button type="primary" icon={<PiPlusLight />} onClick={handleAdd}>
          Add FAQ
        </Button>
      </div>

      <Table
        bordered
        dataSource={faqs}
        columns={columns}
        rowKey="_id"
        pagination={false}
        loading={isLoading}
      />

      <Modal
        open={open}
        title={editing ? "Edit FAQ" : "Add FAQ"}
        okText={editing ? "Update" : "Save"}
        onCancel={() => setOpen(false)}
        onOk={handleSubmit}
        confirmLoading={isCreating}
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
