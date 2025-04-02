import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../../styles/WebsitePublisher.css";
// Main publishing component
function WebsitePublisher({ elements, websiteData, selectedTemplate }) {
  const [showModal, setShowModal] = useState(false);
  const [publishUrl, setPublishUrl] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const [generatedHtml, setGeneratedHtml] = useState("");

  const handlePublish = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setPublishSuccess(false);
    setDownloadReady(false);
  };

  const simulatePublish = async () => {
    if (!elements.length || !websiteData) {
      alert(
        "Your website has no content or metadata. Please add elements to your website first."
      );
      return;
    }

    setIsPublishing(true);

    // Generate the HTML content
    const html = generateWebsiteHtml(elements, websiteData, selectedTemplate);
    setGeneratedHtml(html);

    // Simulate an API call with a timeout
    setTimeout(() => {
      setIsPublishing(false);
      setPublishSuccess(true);
      setPublishUrl(
        `https://websites.co.in/${websiteData.websiteName.toLowerCase().replace(/\s+/g, "-")}`
      );
      setDownloadReady(true);
    }, 2000);
  };

  const downloadWebsite = () => {
    // Create a Blob with the HTML content
    const blob = new Blob([generatedHtml], { type: "text/html" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = `${websiteData?.websiteName || "website"}.html`;
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Generate the final HTML for the website
  const generateWebsiteHtml = (elements, websiteData, template) => {
    // Sort elements by their Y position for proper ordering
    const sortedElements = [...elements].sort(
      (a, b) => a.position.y - b.position.y
    );

    // Generate content HTML
    const contentHtml = sortedElements
      .map((element) => {
        return generateElementHtml(element);
      })
      .join("\n");

    // Create complete HTML document
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${websiteData?.websiteName || "Websites.co.in Site"}</title>
    <style>
        :root {
            --primary-color: ${websiteData?.primaryColor || "#4CAF50"};
            --secondary-color: ${websiteData?.secondaryColor || "#333333"};
        }
        
        body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        
        .website-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }
        
        ${generateLayoutCss(template)}
        
        /* Responsive styles */
        @media (max-width: 768px) {
            .website-container {
                padding: 10px;
            }
            
            img {
                max-width: 100% !important;
                height: auto !important;
            }
            
            form input, form button {
                width: 100%;
                box-sizing: border-box;
            }
        }
    </style>
</head>
<body>
    <div class="website-container ${template?.layout || ""}">
        ${contentHtml}
    </div>
</body>
</html>`;
  };

  // Generate HTML for a specific element
  const generateElementHtml = (element) => {
    // Convert element style object to CSS string
    const styleString = Object.entries(element.style || {})
      .map(([key, value]) => `${camelToDash(key)}: ${value};`)
      .join(" ");

    // Create element HTML based on type
    switch (element.type) {
      case "heading":
        return `<h2 style="${styleString}">${element.content}</h2>`;

      case "paragraph":
        return `<p style="${styleString}">${element.content}</p>`;

      case "image":
        return `<img src="${element.content}" alt="${element.properties?.altText || "Image"}" style="${styleString}">`;

      case "button":
        return `<a href="${element.properties?.href || "#"}" class="button" style="${styleString}">${element.content}</a>`;

      case "divider":
        return `<hr style="${styleString}">`;

      case "spacer":
        return `<div style="${styleString}; height: ${element.properties?.height || 20}px;"></div>`;

      case "form":
        return `
          <form style="${styleString}" onsubmit="alert('Form submitted!'); return false;">
            <input type="text" placeholder="Name" style="padding: 10px; margin-bottom: 10px; width: 100%;">
            <input type="email" placeholder="Email" style="padding: 10px; margin-bottom: 10px; width: 100%;">
            <button type="submit" style="background-color: var(--primary-color); color: white; border: none; padding: 10px 20px; cursor: pointer;">Submit</button>
          </form>`;

      default:
        return "";
    }
  };

  // Generate CSS for the selected template layout
  const generateLayoutCss = (template) => {
    if (!template) return "";

    switch (template.layout) {
      case "two-column":
        return `
          @media (min-width: 768px) {
            .two-column {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 20px;
            }
          }`;

      case "grid":
        return `
          @media (min-width: 768px) {
            .grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 20px;
            }
          }`;

      case "single-column":
        return `
          .single-column {
            max-width: 800px;
            margin: 0 auto;
          }`;

      default:
        return "";
    }
  };

  // Helper function to convert camelCase to dash-case for CSS properties
  const camelToDash = (str) => {
    return str.replace(/([A-Z])/g, "-$1").toLowerCase();
  };

  return (
    <>
      <button onClick={handlePublish} className="publish-button">
        Publish Website
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Publish Your Website</h2>
              <button className="close-button" onClick={handleClose}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {!publishSuccess ? (
                <>
                  <p>
                    Ready to make your website live? Click 'Publish' to
                    continue.
                  </p>
                  <p className="text-muted">
                    Your website will be published with all current elements and
                    styling.
                  </p>
                </>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <div className="alert alert-success">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Website published successfully!
                    </div>
                    <p>Your website is now live at:</p>
                    <a
                      href={publishUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-weight-bold d-block mb-3"
                    >
                      {publishUrl}
                    </a>
                  </div>

                  {downloadReady && (
                    <div className="text-center">
                      <p>
                        You can also download your website for local hosting:
                      </p>
                      <button
                        onClick={downloadWebsite}
                        className="download-btn"
                      >
                        Download HTML
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="modal-footer">
              <button onClick={handleClose} className="cancel-button">
                Close
              </button>
              {!publishSuccess && (
                <button
                  onClick={simulatePublish}
                  disabled={isPublishing}
                  className="submit-button"
                >
                  {isPublishing ? "Publishing..." : "Publish"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WebsitePublisher;
