import { useState } from 'react';
import { Form, Input, Button } from 'antd';

const initialState = '';

const TodoInput = ({ submitFn }) => {
  const [val, setVale] = useState(initialState);
  const submitFrom = (e) => {
    submitFn(e.todo);
    setVale(initialState);
  };
  return (
    <div
      style={{
        border: '1px solid #d9d9d9',
        borderRadius: '2px',
        padding: '8px',
        paddingBottom: 0,
      }}
    >
      <Form onFinish={submitFrom}>
        <Form.Item
          // labelCol={{ span: 0 }}
          // wrapperCol={{ span: 32 }}
          name="todo"
          label="Todo"
          rules={[{ required: true, message: 'Type your todo here' }]}
        >
          <Input value={val} onChange={setVale} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TodoInput;
