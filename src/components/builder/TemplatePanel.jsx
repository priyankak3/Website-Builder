import React, { useState } from "react";

function TemplatePanel({ templates, selectedTemplate, onSelect }) {
  const [isOpen, setIsOpen] = useState(true); // Track if the panel is open or closed

  const togglePanel = () => {
    setIsOpen(!isOpen); // Toggle the open/close state
  };

  const handleTemplateSelect = (template) => {
    onSelect(template.id);
    setIsOpen(false); // Close the panel when a template is selected
  };

  return (
    <div className="template-panel">
      <div className="panel-header">
        <h2>Choose a Template</h2>
        <button className="toggle-btn" onClick={togglePanel}>
          {isOpen ? "↓" : "→"} {/* Arrow icon toggles between down and right */}
        </button>
      </div>
      {isOpen && (
        <div className="template-list">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`template-item ${selectedTemplate?.id === template.id ? "selected" : ""}`}
              onClick={() => handleTemplateSelect(template)}
            >
              <div className="template-preview">
                {/* Template preview image would go here */}
                <div className="template-layout-preview">
                  {template.layout === "two-column" && (
                    <div className="two-column-preview">
                      <div className="column"></div>
                      <div className="column"></div>
                    </div>
                  )}
                  {template.layout === "grid" && (
                    <div className="grid-preview">
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                      <div className="grid-item"></div>
                    </div>
                  )}
                  {template.layout === "single-column" && (
                    <div className="single-column-preview">
                      <div className="column"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="template-name">{template.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplatePanel;
