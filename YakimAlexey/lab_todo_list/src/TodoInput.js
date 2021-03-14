import { useState, useRef, useEffect } from 'react';
import { Form, Input, Button } from 'antd';

// const initialState = '';

const TodoInput = ({ submitFn }) => {
  // const [val, setVale] = useState(initialState);
  const todoItem = useRef('');
  const submitFrom = (e) => {
    submitFn(todoItem.current.state.value);
    // setVale(initialState);
  };
  useEffect(() => {
    todoItem.current.focus();
  }, []);
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
        <Form.Item name="todo" label="Todo" rules={[{ required: true, message: 'Type your todo here' }]}>
          {/* ref allows to drop usage of useState */}
          <Input
            placeholder="Wash cat"
            /* value={val} onChange={setVale} */
            type="text"
            ref={todoItem}
          />
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
