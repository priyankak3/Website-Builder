// Properties Panel for editing selected element
import { useState } from "react";
import "../../styles/PropertiesPanel.css";
import React from "react";
function PropertiesPanel({
  element,
  onPropertyChange,
  onStyleChange,
  onContentChange,
  onElementDelete,
}) {
  const [activeTab, setActiveTab] = useState("content");

  const renderContentForm = () => {
    switch (element.type) {
      case "heading":
      case "paragraph":
      case "button":
        return (
          <div className="form-group">
            <label>Text</label>
            <textarea
              value={element.content}
              onChange={(e) => onContentChange(e.target.value)}
            />
          </div>
        );
      case "image":
        return (
          <>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                value={element.content}
                onChange={(e) => onContentChange(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Alt Text</label>
              <input
                type="text"
                value={element.properties.altText || ""}
                onChange={(e) => onPropertyChange("altText", e.target.value)}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderStyleForm = () => {
    return (
      <>
        <div className="form-group">
          <label>Width</label>
          <div className="input-with-unit">
            <input
              type="number"
              value={parseInt(element.style.width) || 0}
              onChange={(e) => onStyleChange("width", e.target.value + "px")}
            />
            <span>px</span>
          </div>
        </div>

        <div className="form-group">
          <label>Height</label>
          <div className="input-with-unit">
            <input
              type="number"
              value={parseInt(element.style.height) || 0}
              onChange={(e) => onStyleChange("height", e.target.value + "px")}
            />
            <span>px</span>
          </div>
        </div>

        <div className="form-group">
          <label>Background Color</label>
          <input
            type="color"
            value={element.style.backgroundColor || "#ffffff"}
            onChange={(e) => onStyleChange("backgroundColor", e.target.value)}
          />
        </div>

        {(element.type === "heading" ||
          element.type === "paragraph" ||
          element.type === "button") && (
          <>
            <div className="form-group">
              <label>Text Color</label>
              <input
                type="color"
                value={element.style.color || "#000000"}
                onChange={(e) => onStyleChange("color", e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Font Size</label>
              <div className="input-with-unit">
                <input
                  type="number"
                  value={parseInt(element.style.fontSize) || 16}
                  onChange={(e) =>
                    onStyleChange("fontSize", e.target.value + "px")
                  }
                />
                <span>px</span>
              </div>
            </div>

            <div className="form-group">
              <label>Text Align</label>
              <select
                value={element.style.textAlign || "left"}
                onChange={(e) => onStyleChange("textAlign", e.target.value)}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </>
        )}

        <div className="form-group">
          <label>Margin</label>
          <div className="four-values">
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.marginTop) || 0}
                onChange={(e) =>
                  onStyleChange("marginTop", e.target.value + "px")
                }
              />
              <span>Top</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.marginRight) || 0}
                onChange={(e) =>
                  onStyleChange("marginRight", e.target.value + "px")
                }
              />
              <span>Right</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.marginBottom) || 0}
                onChange={(e) =>
                  onStyleChange("marginBottom", e.target.value + "px")
                }
              />
              <span>Bottom</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.marginLeft) || 0}
                onChange={(e) =>
                  onStyleChange("marginLeft", e.target.value + "px")
                }
              />
              <span>Left</span>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Padding</label>
          <div className="four-values">
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.paddingTop) || 0}
                onChange={(e) =>
                  onStyleChange("paddingTop", e.target.value + "px")
                }
              />
              <span>Top</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.paddingRight) || 0}
                onChange={(e) =>
                  onStyleChange("paddingRight", e.target.value + "px")
                }
              />
              <span>Right</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.paddingBottom) || 0}
                onChange={(e) =>
                  onStyleChange("paddingBottom", e.target.value + "px")
                }
              />
              <span>Bottom</span>
            </div>
            <div className="input-with-label">
              <input
                type="number"
                value={parseInt(element.style.paddingLeft) || 0}
                onChange={(e) =>
                  onStyleChange("paddingLeft", e.target.value + "px")
                }
              />
              <span>Left</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderAdvancedForm = () => {
    return (
      <>
        <div className="form-group">
          <label>ID</label>
          <input
            type="text"
            value={element.properties.id || ""}
            onChange={(e) => onPropertyChange("id", e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Class</label>
          <input
            type="text"
            value={element.properties.className || ""}
            onChange={(e) => onPropertyChange("className", e.target.value)}
          />
        </div>

        {element.type === "button" && (
          <div className="form-group">
            <label>Link URL</label>
            <input
              type="text"
              value={element.properties.href || ""}
              onChange={(e) => onPropertyChange("href", e.target.value)}
            />
          </div>
        )}

        {element.type === "spacer" && (
          <div className="form-group">
            <label>Height</label>
            <div className="input-with-unit">
              <input
                type="number"
                value={element.properties.height || 20}
                onChange={(e) =>
                  onPropertyChange("height", parseInt(e.target.value))
                }
              />
              <span>px</span>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="properties-panel">
      <div className="panel-header">
        <h3>Element Properties</h3>
        <button
          className="delete-button"
          onClick={() => onElementDelete(element.id)}
        >
          Delete
        </button>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "content" ? "active" : ""}
          onClick={() => setActiveTab("content")}
        >
          Content
        </button>
        <button
          className={activeTab === "style" ? "active" : ""}
          onClick={() => setActiveTab("style")}
        >
          Style
        </button>
        <button
          className={activeTab === "advanced" ? "active" : ""}
          onClick={() => setActiveTab("advanced")}
        >
          Advanced
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "content" && renderContentForm()}
        {activeTab === "style" && renderStyleForm()}
        {activeTab === "advanced" && renderAdvancedForm()}
      </div>
    </div>
  );
}
export default PropertiesPanel;
