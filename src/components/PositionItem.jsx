import { Card } from "antd";
import React from "react";
import { useDrag, useDrop } from "react-dnd";

const PositionItem = ({ id, name, index, movePosition, type }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: type,

    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      movePosition(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: type, id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    type: type,
  });

  const opacity = isDragging ? 0.5 : 1;

  drag(drop(ref));

  return (
    <Card
      bordered
      ref={ref}
      style={{
        opacity,
        border: opacity === 0.5 ? "1px dashed blue" : "",
        width: 150,
        height: 100,
      }}
    >
      {opacity !== 0.5 && name}
    </Card>
  );
};

export default PositionItem;
