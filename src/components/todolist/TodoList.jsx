import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list }) => {
  return (
    <div className="todo-list">
      <h2>{list.title}</h2>
      {list.items.map((itemId) => (
        <TodoItem key={itemId} itemId={itemId} />
      ))}
    </div>
  );
};

export default TodoList;
