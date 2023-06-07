import logo from "./logo.svg";
import "./App.css";
import PositionList from "./components/PositionList";
import { useEffect, useRef } from "react";
import Box from "./components/Box";
import Bucket from "./components/Bucket";
import TodoList from "./components/todolist/TodoList";
import Todo from "./components/todolist/Todo";
import Drag from "./components/drag/Drag";

function App() {
  const boxRef = useRef(null);
  const containerRef = useRef(null);
  const coords = useRef({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  const isClicked = useRef(false);

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) return;
    coords.current = {};
    const box = boxRef.current;
    const container = containerRef.current;

    const onMouseDown = (e) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e) => {
      if (!isClicked.current || isClicked.current === false) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      if (
        nextX >= container.offsetWidth - 50 ||
        nextX <= 0 ||
        nextY <= 0 ||
        nextY >= container.offsetHeight
      ) {
        return;
      }
      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanUp = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };
    return cleanUp;
  }, []);
  return (
    <div className="App">
      {/* <PositionList></PositionList> */}
      <div ref={containerRef} className="container">
        <div ref={boxRef} className="box"></div>
      </div>
      {/* <Todo></Todo> */}
      {/* <Drag></Drag> */}
    </div>
  );
}

export default App;
