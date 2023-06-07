import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TodoList from "./TodoList";
const state = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "To Do",
      items: ["item-1", "item-2", "item-3"],
    },
    "list-2": {
      id: "list-2",
      title: "In Progress",
      items: ["item-4", "item-5"],
    },
  },
  items: {
    "item-1": { id: "item-1", content: "Task 1" },
    "item-2": { id: "item-2", content: "Task 2" },
    "item-3": { id: "item-3", content: "Task 3" },
    "item-4": { id: "item-4", content: "Task 4" },
    "item-5": { id: "item-5", content: "Task 5" },
  },
};
const Todo = () => {
  //function
  const [state, setState] = useState({
    lists: {
      "list-1": {
        id: "list-1",
        title: "To Do",
        items: ["item-1", "item-2", "item-3"],
      },
      "list-2": {
        id: "list-2",
        title: "In Progress",
        items: ["item-4", "item-5"],
      },
    },
    items: {
      "item-1": { id: "item-1", content: "Task 1" },
      "item-2": { id: "item-2", content: "Task 2" },
      "item-3": { id: "item-3", content: "Task 3" },
      "item-4": { id: "item-4", content: "Task 4" },
      "item-5": { id: "item-5", content: "Task 5" },
    },
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const startList = this.state.lists[source.droppableId];
    const endList = this.state.lists[destination.droppableId];

    if (startList === endList) {
      const newItems = Array.from(startList.items);
      newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, draggableId);

      const newList = {
        ...startList,
        items: newItems,
      };

      setState({
        lists: {
          ...this.state.lists,
          [newList.id]: newList,
        },
      });
    } else {
      const startItems = Array.from(startList.items);
      startItems.splice(source.index, 1);

      const newStartList = {
        ...startList,
        items: startItems,
      };

      const endItems = Array.from(endList.items);
      endItems.splice(destination.index, 0, draggableId);

      const newEndList = {
        ...endList,
        items: endItems,
      };

      this.setState({
        lists: {
          ...this.state.lists,
          [newStartList.id]: newStartList,
          [newEndList.id]: newEndList,
        },
      });
    }
  };

  const renderLists = () => {
    return Object.values(state.lists).map((list) => (
      <TodoList key={list.id} list={list} />
    ));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            className="app"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {renderLists()}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todo;
