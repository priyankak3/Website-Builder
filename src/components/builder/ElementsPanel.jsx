import DraggableElement from "./DraagableElement";

// Elements Panel with draggable elements
function ElementsPanel({ onAddElement }) {
  const elements = [
    { type: "heading", label: "Heading", icon: "T" },
    { type: "paragraph", label: "Paragraph", icon: "¶" },
    { type: "image", label: "Image", icon: "🖼️" },
    { type: "button", label: "Button", icon: "⬜" },
    { type: "divider", label: "Divider", icon: "—" },
    { type: "spacer", label: "Spacer", icon: "⎵" },
    { type: "form", label: "Form", icon: "📋" },
  ];

  return (
    <div className="elements-panel">
      <h3>Elements</h3>
      <div className="elements-list">
        {elements.map((element) => (
          <DraggableElement
            key={element.type}
            element={element}
            onAddElement={onAddElement}
          />
        ))}
      </div>
    </div>
  );
}
export default ElementsPanel;
