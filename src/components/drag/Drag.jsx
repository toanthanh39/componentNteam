import { Card, Col, Row, Typography } from "antd";
import React, { Suspense, useState } from "react";
import { Data } from "../../constants/Data";
import { DragDropContext } from "react-beautiful-dnd";
const Column = React.lazy(() => import("./Column"));
const Drag = () => {
  const [initialData, setInitialData] = useState(Data);

  const reOrderColumnList = (sourceCol, startIndex, endIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    const [revoved] = newTaskIds.splice(startIndex, 1);

    newTaskIds.splice(endIndex, 0, revoved);
    const newColumns = {
      ...sourceCol,
      taskIds: newTaskIds,
    };
    return newColumns;
  };

  //
  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log("🚀 ~ file: Drag.jsx:24 ~ onDragEnd ~ source:", source);
    console.log(
      "🚀 ~ file: Drag.jsx:24 ~ onDragEnd ~ destination:",
      destination
    );

    if (!destination) return;
    if (
      destination.droppableid === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const sourceCol = initialData.columns[source.droppableId];
    const destinationCol = initialData.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reOrderColumnList(
        sourceCol,
        source.index,
        destination.index
      );
      const newState = {
        ...initialData,
        columns: {
          ...initialData.columns,
          [newColumn.id]: newColumn,
        },
      };
      setInitialData(newState);
      return;
    }

    // Di chuyen quan col khac
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };
    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...initialData,
      columns: {
        ...initialData.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };
    setInitialData(newState);
  };
  return (
    <Suspense fallback={<div>...loading</div>}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div style={{ width: "80vw" }}>
          <header>
            <Typography.Title style={{ color: "whitesmoke" }}>
              React Beautiful Drag and Drop
            </Typography.Title>
            <Typography.Title level={5} style={{ color: "#989899" }}>
              React Beautiful Drag and Drop
            </Typography.Title>
          </header>
          <main style={{ margin: "3rem 0" }}>
            <Row gutter={[16, 16]} justify={"space-around"}>
              {initialData.columnOrder.map((col, index) => {
                const columns = initialData.columns[col];
                const tasks = columns.taskIds.map(
                  (id) => initialData.tasks[id]
                );
                return (
                  <Column
                    key={columns.id}
                    colData={columns}
                    tasks={tasks}
                  ></Column>
                );
              })}
            </Row>
          </main>
        </div>
      </DragDropContext>
    </Suspense>
  );
};

export default Drag;
