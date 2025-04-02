// Draggable Element
import { useDrag } from "react-dnd";
function DraggableElement({ element, onAddElement }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "element",
    item: { type: element.type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`element-item ${isDragging ? "dragging" : ""}`}
      onClick={() => onAddElement(element.type)}
    >
      <div className="element-icon">{element.icon}</div>
      <div className="element-label">{element.label}</div>
    </div>
  );
}
export default DraggableElement;
