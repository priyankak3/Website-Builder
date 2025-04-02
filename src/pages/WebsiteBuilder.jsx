import React, { useState, useEffect, useRef } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { nanoid } from "nanoid";
import "../styles/Website.css";
import TemplatePanel from "../components/builder/TemplatePanel";
import ElementsPanel from "../components/builder/ElementsPanel";
import Canvas from "../components/builder/Canvas";
import PropertiesPanel from "../components/builder/PropertiesPanel";
import TemplateFormModal from "../components/builder/TemplateFormModal";
import Navbar from "../components/common/Navbar";

function WebsiteBuilder() {
  const [elements, setElements] = useState([]);
  const [templates, setTemplates] = useState([
    {
      id: "template1",
      name: "Business",
      layout: "two-column",
      preview: "/api/placeholder/200/150",
    },
    {
      id: "template2",
      name: "Portfolio",
      layout: "grid",
      preview: "/api/placeholder/200/150",
    },
    {
      id: "template3",
      name: "Blog",
      layout: "single-column",
      preview: "/api/placeholder/200/150",
    },
  ]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [showTemplateForm, setShowTemplateForm] = useState(false);
  const [pendingTemplate, setPendingTemplate] = useState(null);
  const [websiteData, setWebsiteData] = useState(null);

  const handleTemplateSelect = (templateId) => {
    const template = templates.find((t) => t.id === templateId);
    setPendingTemplate(template);
    setShowTemplateForm(true);
  };

  const handleFormSubmit = (formData) => {
    setWebsiteData(formData);
    setSelectedTemplate(pendingTemplate);
    setShowTemplateForm(false);

    // Generate template elements based on the selected template
    generateTemplateElements(pendingTemplate, formData);
  };

  const handleFormCancel = () => {
    setShowTemplateForm(false);
    setPendingTemplate(null);
  };

  const generateTemplateElements = (template, data) => {
    // Reset elements
    setElements([]);

    // Generate elements based on template type
    const newElements = [];

    switch (template.id) {
      case "template1": // Business Template
        generateBusinessTemplate(newElements, data);
        break;
      case "template2": // Portfolio Template
        generatePortfolioTemplate(newElements, data);
        break;
      case "template3": // Blog Template
        generateBlogTemplate(newElements, data);
        break;
      default:
        break;
    }

    setElements(newElements);
  };

  const generateBusinessTemplate = (elementsArray, data) => {
    // Header
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 20 },
      content: data.websiteName,
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "32px",
        fontWeight: "bold",
        color: data.secondaryColor,
        textAlign: "center",
        width: "100%",
      },
      properties: {},
    });

    // Subheading
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 80 },
      content: data.subheading,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "18px",
        fontStyle: "italic",
        textAlign: "center",
        width: "100%",
      },
      properties: {},
    });

    // Spacer
    elementsArray.push({
      id: nanoid(),
      type: "spacer",
      position: { x: 20, y: 120 },
      content: "",
      style: {
        ...getDefaultStyle("spacer"),
        height: "30px",
        width: "100%",
      },
      properties: { height: 30 },
    });

    // Two column layout - Left column
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 170 },
      content:
        "Welcome to our business website. We provide top-notch services to meet all your needs. Our team is dedicated to ensuring customer satisfaction and delivering exceptional results.",
      style: {
        ...getDefaultStyle("paragraph"),
        width: "45%",
        float: "left",
        minHeight: "200px",
      },
      properties: {},
    });

    // Two column layout - Right column (image)
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 300, y: 170 },
      content: "/api/placeholder/400/300",
      style: {
        ...getDefaultStyle("image"),
        width: "45%",
        float: "right",
      },
      properties: { altText: "Business Image" },
    });

    // Clear float spacer
    elementsArray.push({
      id: nanoid(),
      type: "spacer",
      position: { x: 20, y: 400 },
      content: "",
      style: {
        ...getDefaultStyle("spacer"),
        clear: "both",
        height: "30px",
        width: "100%",
      },
      properties: { height: 30 },
    });

    // CTA Button
    elementsArray.push({
      id: nanoid(),
      type: "button",
      position: { x: 20, y: 450 },
      content: data.ctaText,
      style: {
        ...getDefaultStyle("button"),
        backgroundColor: data.primaryColor,
        fontSize: "18px",
        padding: "15px 30px",
        margin: "0 auto",
        display: "block",
      },
      properties: { href: "#" },
    });

    // Contact Section Title
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 520 },
      content: "Contact Us",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "24px",
        textAlign: "center",
      },
      properties: {},
    });

    // Contact Info
    if (data.contactEmail || data.contactPhone) {
      let contactText = "";
      if (data.contactEmail) contactText += `Email: ${data.contactEmail}\n`;
      if (data.contactPhone) contactText += `Phone: ${data.contactPhone}`;

      elementsArray.push({
        id: nanoid(),
        type: "paragraph",
        position: { x: 20, y: 570 },
        content: contactText,
        style: {
          ...getDefaultStyle("paragraph"),
          textAlign: "center",
          whiteSpace: "pre-line",
        },
        properties: {},
      });
    }

    // Footer text
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 650 },
      content: data.footerText,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "14px",
        color: "#666",
        textAlign: "center",
        borderTop: "1px solid #eee",
        paddingTop: "20px",
      },
      properties: {},
    });
  };

  const generatePortfolioTemplate = (elementsArray, data) => {
    // Header
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 20 },
      content: data.websiteName,
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "36px",
        fontWeight: "bold",
        color: data.secondaryColor,
        textAlign: "center",
        width: "100%",
      },
      properties: {},
    });

    // Subheading
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 80 },
      content: data.subheading,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "20px",
        fontStyle: "italic",
        textAlign: "center",
        width: "100%",
        marginBottom: "30px",
      },
      properties: {},
    });

    // Portfolio Grid Items
    // Item 1
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 20, y: 150 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 1" },
    });

    // Item 2
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 180, y: 150 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 2" },
    });

    // Item 3
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 340, y: 150 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 3" },
    });

    // Item 4
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 20, y: 350 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 4" },
    });

    // Item 5
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 180, y: 350 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 5" },
    });

    // Item 6
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 340, y: 350 },
      content: "/api/placeholder/300/300",
      style: {
        ...getDefaultStyle("image"),
        width: "30%",
        margin: "1.5%",
        float: "left",
      },
      properties: { altText: "Portfolio Item 6" },
    });

    // Clear float spacer
    elementsArray.push({
      id: nanoid(),
      type: "spacer",
      position: { x: 20, y: 550 },
      content: "",
      style: {
        ...getDefaultStyle("spacer"),
        clear: "both",
        height: "30px",
        width: "100%",
      },
      properties: { height: 30 },
    });

    // About Me section
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 600 },
      content: "About Me",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "28px",
        color: data.secondaryColor,
        textAlign: "center",
      },
      properties: {},
    });

    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 650 },
      content:
        "I am a creative professional specializing in design and development. With years of experience, I bring projects to life with a perfect blend of aesthetics and functionality.",
      style: {
        ...getDefaultStyle("paragraph"),
        textAlign: "center",
        maxWidth: "80%",
        margin: "0 auto",
      },
      properties: {},
    });

    // Contact button
    elementsArray.push({
      id: nanoid(),
      type: "button",
      position: { x: 20, y: 750 },
      content: data.ctaText,
      style: {
        ...getDefaultStyle("button"),
        backgroundColor: data.primaryColor,
        fontSize: "18px",
        padding: "15px 30px",
        margin: "20px auto",
        display: "block",
      },
      properties: { href: "#" },
    });

    // Footer
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 820 },
      content: data.footerText,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "14px",
        color: "#666",
        textAlign: "center",
        borderTop: "1px solid #eee",
        paddingTop: "20px",
        marginTop: "30px",
      },
      properties: {},
    });
  };

  const generateBlogTemplate = (elementsArray, data) => {
    // Header
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 20 },
      content: data.websiteName,
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "40px",
        fontWeight: "bold",
        color: data.secondaryColor,
        textAlign: "center",
        width: "100%",
      },
      properties: {},
    });

    // Subheading/Tagline
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 80 },
      content: data.subheading,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "18px",
        fontStyle: "italic",
        textAlign: "center",
        width: "100%",
        marginBottom: "20px",
      },
      properties: {},
    });

    // Featured Article
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 150 },
      content: "Featured Article: Getting Started with Web Design",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "28px",
        color: data.secondaryColor,
      },
      properties: {},
    });

    // Featured Image
    elementsArray.push({
      id: nanoid(),
      type: "image",
      position: { x: 20, y: 200 },
      content: "/api/placeholder/800/400",
      style: {
        ...getDefaultStyle("image"),
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        margin: "20px 0",
      },
      properties: { altText: "Featured Article Image" },
    });

    // Article excerpt
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 330 },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc sit amet aliquet ultricies, nisi nisl aliquam nunc, vitae aliquet nisl nunc vitae nisl. Sed euismod, nunc sit amet aliquet ultricies, nisi nisl aliquam nunc, vitae aliquet nisl nunc vitae nisl...",
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "16px",
        lineHeight: "1.6",
        marginBottom: "20px",
      },
      properties: {},
    });

    // Read more button
    elementsArray.push({
      id: nanoid(),
      type: "button",
      position: { x: 20, y: 430 },
      content: "Read More",
      style: {
        ...getDefaultStyle("button"),
        backgroundColor: data.primaryColor,
        fontSize: "16px",
        padding: "10px 20px",
      },
      properties: { href: "#" },
    });

    // Divider
    elementsArray.push({
      id: nanoid(),
      type: "divider",
      position: { x: 20, y: 490 },
      content: "",
      style: {
        ...getDefaultStyle("divider"),
        margin: "30px 0",
      },
      properties: {},
    });

    // Recent Posts Heading
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 540 },
      content: "Recent Posts",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "24px",
        color: data.secondaryColor,
        marginBottom: "20px",
      },
      properties: {},
    });

    // Post 1
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 590 },
      content: "10 Tips for Better UX Design",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "20px",
        marginBottom: "10px",
      },
      properties: {},
    });

    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 630 },
      content:
        "Discover essential tips to improve your user experience design skills and create more engaging interfaces...",
      style: {
        ...getDefaultStyle("paragraph"),
        marginBottom: "20px",
      },
      properties: {},
    });

    // Post 2
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 690 },
      content: "The Future of Web Development",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "20px",
        marginBottom: "10px",
      },
      properties: {},
    });

    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 730 },
      content:
        "Explore upcoming trends and technologies that will shape the future of web development in the coming years...",
      style: {
        ...getDefaultStyle("paragraph"),
        marginBottom: "20px",
      },
      properties: {},
    });

    // Sidebar layout on large screens - managed via CSS

    // Newsletter form
    elementsArray.push({
      id: nanoid(),
      type: "heading",
      position: { x: 20, y: 800 },
      content: "Subscribe to Our Newsletter",
      style: {
        ...getDefaultStyle("heading"),
        fontSize: "22px",
        marginTop: "30px",
      },
      properties: {},
    });

    elementsArray.push({
      id: nanoid(),
      type: "form",
      position: { x: 20, y: 850 },
      content: "",
      style: {
        ...getDefaultStyle("form"),
        maxWidth: "500px",
      },
      properties: {},
    });

    // Footer
    elementsArray.push({
      id: nanoid(),
      type: "paragraph",
      position: { x: 20, y: 960 },
      content: data.footerText,
      style: {
        ...getDefaultStyle("paragraph"),
        fontSize: "14px",
        color: "#666",
        textAlign: "center",
        borderTop: "1px solid #eee",
        paddingTop: "20px",
        marginTop: "40px",
      },
      properties: {},
    });
  };

  const handleElementAdd = (elementType, position = { x: 20, y: 20 }) => {
    const newElement = {
      id: nanoid(),
      type: elementType,
      position,
      content: getDefaultContent(elementType),
      style: getDefaultStyle(elementType),
      properties: getDefaultProperties(elementType),
    };
    setElements([...elements, newElement]);
    return newElement;
  };

  const handleElementUpdate = (id, updates) => {
    setElements(
      elements.map((el) => (el.id === id ? { ...el, ...updates } : el))
    );
  };

  const handleElementDelete = (id) => {
    setElements(elements.filter((el) => el.id !== id));
    if (selectedElement && selectedElement.id === id) {
      setSelectedElement(null);
    }
  };

  const handleElementSelect = (element) => {
    setSelectedElement(element);
  };

  const handleElementDeselect = () => {
    setSelectedElement(null);
  };

  const handlePropertyChange = (property, value) => {
    if (!selectedElement) return;

    const updatedProperties = {
      ...selectedElement.properties,
      [property]: value,
    };

    handleElementUpdate(selectedElement.id, { properties: updatedProperties });
    setSelectedElement({ ...selectedElement, properties: updatedProperties });
  };

  const handleStyleChange = (styleProperty, value) => {
    if (!selectedElement) return;

    const updatedStyle = {
      ...selectedElement.style,
      [styleProperty]: value,
    };

    handleElementUpdate(selectedElement.id, { style: updatedStyle });
    setSelectedElement({ ...selectedElement, style: updatedStyle });
  };

  const handleContentChange = (content) => {
    if (!selectedElement) return;

    handleElementUpdate(selectedElement.id, { content });
    setSelectedElement({ ...selectedElement, content });
  };

  const handleElementMove = (id, newPosition) => {
    handleElementUpdate(id, { position: newPosition });

    if (selectedElement && selectedElement.id === id) {
      setSelectedElement({ ...selectedElement, position: newPosition });
    }
  };

  // Add responsive CSS variables based on user selected colors
  useEffect(() => {
    if (websiteData) {
      document.documentElement.style.setProperty(
        "--primary-color",
        websiteData.primaryColor
      );
      document.documentElement.style.setProperty(
        "--secondary-color",
        websiteData.secondaryColor
      );
    }
  }, [websiteData]);
  // Render the main builder interface
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="website-builder">
        <Navbar
          elements={elements}
          websiteData={websiteData}
          selectedTemplate={selectedTemplate}
        />
        <main className="builder-main">
          {!selectedTemplate ? (
            <TemplatePanel
              templates={templates}
              selectedTemplate={selectedTemplate}
              onSelect={handleTemplateSelect}
            />
          ) : (
            <div className="editor-container">
              <ElementsPanel onAddElement={handleElementAdd} />

              <Canvas
                elements={elements}
                selectedElement={selectedElement}
                template={selectedTemplate}
                onElementSelect={handleElementSelect}
                onElementMove={handleElementMove}
                onElementAdd={handleElementAdd}
                onElementUpdate={handleElementUpdate}
                onCanvasClick={handleElementDeselect}
              />

              {selectedElement && (
                <PropertiesPanel
                  element={selectedElement}
                  onPropertyChange={handlePropertyChange}
                  onStyleChange={handleStyleChange}
                  onContentChange={handleContentChange}
                  onElementDelete={handleElementDelete}
                />
              )}
            </div>
          )}
        </main>

        {/* Modal Form */}

        {showTemplateForm && (
          <TemplateFormModal
            template={pendingTemplate}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        )}
      </div>
    </DndProvider>
  );
}
function getDefaultContent(type) {
  switch (type) {
    case "heading":
      return "Your Heading";
    case "paragraph":
      return "This is a paragraph. Click to edit this text.";
    case "button":
      return "Click Me";
    case "image":
      return "/api/placeholder/400/300";
    default:
      return "";
  }
}

function getDefaultStyle(type) {
  const baseStyle = {
    backgroundColor: "transparent",
    padding: "10px",
    margin: "0px",
  };

  switch (type) {
    case "heading":
      return {
        ...baseStyle,
        fontSize: "24px",
        fontWeight: "bold",
        color: "#333333",
        width: "100%",
      };
    case "paragraph":
      return {
        ...baseStyle,
        fontSize: "16px",
        color: "#666666",
        width: "100%",
      };
    case "button":
      return {
        ...baseStyle,
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "10px 20px",
        cursor: "pointer",
        width: "auto",
      };
    case "image":
      return {
        ...baseStyle,
        width: "300px",
        height: "auto",
        objectFit: "cover",
      };
    case "divider":
      return {
        ...baseStyle,
        width: "100%",
        height: "1px",
        backgroundColor: "#CCCCCC",
        margin: "20px 0",
      };
    case "spacer":
      return {
        ...baseStyle,
        width: "100%",
        padding: "0",
        margin: "0",
      };
    case "form":
      return {
        ...baseStyle,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      };
    default:
      return baseStyle;
  }
}

function getDefaultProperties(type) {
  switch (type) {
    case "spacer":
      return { height: 20 };
    case "image":
      return { altText: "Image description" };
    case "button":
      return { href: "#" };
    default:
      return {};
  }
}
export default WebsiteBuilder;
