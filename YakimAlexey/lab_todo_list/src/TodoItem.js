import { useState } from 'react';
import { List, Typography, Checkbox } from 'antd';

const TodoItem = ({ item }) => {
  const [complete, setcomplete] = useState(false);
  return (
    <List.Item>
      <Checkbox checked={complete} onChange={() => setcomplete(complete ? false : true)}></Checkbox>
      <Typography.Title level={5} type={complete ? 'success' : 'danger'}>
        {item}
      </Typography.Title>
    </List.Item>
  );
};

export default TodoItem;
