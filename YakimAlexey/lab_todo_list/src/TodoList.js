import { List } from 'antd';
import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(prevProps) {
    return prevProps.todoList.length % 5 === 0;
  }

  render() {
    return (
      <List
        size="small"
        header={<div>Todo list</div>}
        itemLayout="horizontal"
        dataSource={this.props.todoList}
        renderItem={(item) => <TodoItem item={item} />}
        pagination={{ pageSize: 10 }}
      />
    );
  }
}
