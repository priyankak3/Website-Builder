import CanvasElement from "./CanvasElement";
import { useDrop } from "react-dnd";
import { useState, useRef } from "react";

function Canvas({
  elements,
  selectedElement,
  template,
  onElementSelect,
  onElementMove,
  onElementAdd,
  onCanvasClick,
}) {
  const canvasRef = useRef(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "element",
    drop: (item, monitor) => {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const clientOffset = monitor.getClientOffset();

      if (clientOffset && canvasRect) {
        const position = {
          x: clientOffset.x - canvasRect.left,
          y: clientOffset.y - canvasRect.top,
        };
        onElementAdd(item.type, position);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const handleCanvasClick = (e) => {
    // Only deselect if clicking directly on the canvas, not on an element
    if (e.target === canvasRef.current) {
      onCanvasClick();
    }
  };

  return (
    <div
      ref={(node) => {
        canvasRef.current = node;
        drop(node);
      }}
      className={`canvas ${template.layout} ${isOver ? "drop-active" : ""}`}
      onClick={handleCanvasClick}
    >
      {elements.map((element) => (
        <CanvasElement
          key={element.id}
          element={element}
          isSelected={selectedElement?.id === element.id}
          onSelect={() => onElementSelect(element)}
          onMove={onElementMove}
        />
      ))}
    </div>
  );
}
export default Canvas;
