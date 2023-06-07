import { Card, Col } from "antd";
import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Column = ({ colData, tasks }) => {
  return (
    <Col span={8} style={{ minHeight: "500px" }}>
      <Card
        bordered={false}
        style={{
          height: "100% ",
          backgroundColor: "#2e2e37",
          boxShadow: "0 0 2px #9a9aa1",
          color: "whitesmoke",
        }}
        bodyStyle={{ height: "100%", padding: "0 8px 8px" }}
        title={
          <h4 style={{ color: colData.color }}>
            {colData.title.toUpperCase()}
          </h4>
        }
      >
        <Droppable droppableId={colData.id}>
          {(droppableProvided, droppableSnapshot) => (
            <div
              id="wrapper_item"
              ref={droppableProvided.innerRef}
              {...droppableProvided.droppableProps}
            >
              {tasks.map((t, index) => (
                <Draggable key={t.id} draggableId={`${t.id}`} index={index}>
                  {(droppableProvided, droppableSnapshot) => (
                    <div
                      id="item"
                      style={{
                        width: "100%",
                        backgroundColor: "#57575d",
                        borderRadius: "4px",
                        height: "70px",
                      }}
                      ref={droppableProvided.innerRef}
                      {...droppableProvided.dragHandleProps}
                      {...droppableProvided.draggableProps}
                    >
                      <p
                        style={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          padding: "1rem",
                        }}
                      >
                        {t.content}
                      </p>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </Card>
    </Col>
  );
};

export default Column;
