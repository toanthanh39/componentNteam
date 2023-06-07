import React, { useState } from "react";
import PositionItem from "./PositionItem";
import { Card, Space } from "antd";

const PositionList = () => {
  const [positions, setPositions] = useState([
    { id: 1, name: "Position 1" },
    { id: 2, name: "Position 2" },
    { id: 3, name: "Position 3" },
  ]);

  const [positions2, setPositions2] = useState([
    { id: 5, name: "Position 5" },
    { id: 6, name: "Position 6" },
    { id: 7, name: "Position 7" },
  ]);

  const movePosition = (dragIndex, hoverIndex) => {
    const dragPosition = positions[dragIndex];
    setPositions((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions.splice(dragIndex, 1);
      updatedPositions.splice(hoverIndex, 0, dragPosition);
      return updatedPositions;
    });
  };

  const movePosition2 = (dragIndex, hoverIndex) => {
    const dragPosition = positions2[dragIndex];
    setPositions2((prevPositions) => {
      const updatedPositions = [...prevPositions];
      updatedPositions.splice(dragIndex, 1);
      updatedPositions.splice(hoverIndex, 0, dragPosition);
      return updatedPositions;
    });
  };

  return (
    <Space direction="horizontal">
      <Card>
        {positions.map((position, index) => (
          <PositionItem
            key={position.id}
            id={position.id}
            name={position.name}
            index={index}
            type="positon1"
            movePosition={movePosition}
          />
        ))}
      </Card>
      {/* <Card>
        {positions2.map((position, index) => (
          <PositionItem
            key={position.id}
            id={position.id}
            name={position.name}
            index={index}
            movePosition={movePosition2}
            type="positon2"
          />
        ))}
      </Card> */}
    </Space>
  );
};

export default PositionList;
