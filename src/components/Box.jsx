import React from "react";
import { useDrag } from "react-dnd";

const Box = () => {
  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    // "type" is required. It is used by the "accept" specification of drop targets.
    type: "BOX",
    // The collect function utilizes a "monitor" instance (see the Overview for what this is)
    // to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {/* The drag ref marks this node as being the "pick-up" node */}
      <div role="Handle" ref={drag} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis deleniti
        deserunt voluptate dolor at eaque, minus voluptatum sequi sunt
        exercitationem. Dolore optio laborum deserunt ducimus. Quisquam velit a
        harum tenetur?
      </p>
    </div>
  );
};

export default Box;
