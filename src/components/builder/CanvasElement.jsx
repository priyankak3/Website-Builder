import React from "react";
import { useState, useRef } from "react";

// Canvas Element that can be moved around
function CanvasElement({ element, isSelected, onSelect, onMove }) {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [elementPos, setElementPos] = useState(element.position);

  const handleMouseDown = (e) => {
    // Prevent default to avoid text selection during drag
    e.preventDefault();

    onSelect();
    setIsDragging(true);
    setStartPos({
      x: e.clientX - elementPos.x,
      y: e.clientY - elementPos.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const newPos = {
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    };

    setElementPos(newPos);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      onMove(element.id, elementPos);
    }
  };

  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging]);

  React.useEffect(() => {
    setElementPos(element.position);
  }, [element.position]);

  // Render the appropriate element based on type
  const renderElementContent = () => {
    switch (element.type) {
      case "heading":
        return <h2 style={element.style}>{element.content}</h2>;
      case "paragraph":
        return <p style={element.style}>{element.content}</p>;
      case "image":
        return (
          <img src={element.content} alt="Element" style={element.style} />
        );
      case "button":
        return <button style={element.style}>{element.content}</button>;
      case "divider":
        return <hr style={element.style} />;
      case "spacer":
        return (
          <div
            style={{
              ...element.style,
              height: element.properties.height + "px",
            }}
          ></div>
        );
      case "form":
        return (
          <form style={element.style}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`canvas-element ${isSelected ? "selected" : ""}`}
      style={{
        position: "absolute",
        left: elementPos.x + "px",
        top: elementPos.y + "px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      onMouseDown={handleMouseDown}
    >
      {renderElementContent()}
      {isSelected && (
        <div className="element-controls">
          <div className="resize-handle"></div>
        </div>
      )}
    </div>
  );
}
export default CanvasElement;
