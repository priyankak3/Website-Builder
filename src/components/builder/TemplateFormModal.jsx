import React, { useState } from "react";

// Template Form Modal Component
function TemplateFormModal({ template, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    websiteName: "",
    subheading: "",
    logoUrl: "",
    primaryColor: "#4CAF50",
    secondaryColor: "#333333",
    ctaText: "Get Started",
    footerText: "© 2025 All Rights Reserved",
    contactEmail: "",
    contactPhone: "",
    socialLinks: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay" >
      <div className="modal-content">
        <div className="modal-header">
          <h2>Configure Your {template.name} Website</h2>
          <button className="close-button" onClick={onCancel}>
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="template-form">
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-group">
              <label htmlFor="websiteName">Website Name</label>
              <input
                type="text"
                id="websiteName"
                name="websiteName"
                value={formData.websiteName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subheading">Subheading/Tagline</label>
              <input
                type="text"
                id="subheading"
                name="subheading"
                value={formData.subheading}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="logoUrl">Logo URL</label>
              <input
                type="text"
                id="logoUrl"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
              />
              <small>Leave blank to use text logo</small>
            </div>
          </div>

          <div className="form-section">
            <h3>Design</h3>
            <div className="form-group">
              <label htmlFor="primaryColor">Primary Color</label>
              <input
                type="color"
                id="primaryColor"
                name="primaryColor"
                value={formData.primaryColor}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="secondaryColor">Secondary Color</label>
              <input
                type="color"
                id="secondaryColor"
                name="secondaryColor"
                value={formData.secondaryColor}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="ctaText">Call to Action Text</label>
              <input
                type="text"
                id="ctaText"
                name="ctaText"
                value={formData.ctaText}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Contact Information</h3>
            <div className="form-group">
              <label htmlFor="contactEmail">Email</label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactPhone">Phone</label>
              <input
                type="text"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="footerText">Footer Text</label>
              <input
                type="text"
                id="footerText"
                name="footerText"
                value={formData.footerText}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Social Media</h3>
            <div className="form-group">
              <label htmlFor="socialLinks.facebook">Facebook URL</label>
              <input
                type="text"
                id="socialLinks.facebook"
                name="socialLinks.facebook"
                value={formData.socialLinks.facebook}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialLinks.twitter">Twitter URL</label>
              <input
                type="text"
                id="socialLinks.twitter"
                name="socialLinks.twitter"
                value={formData.socialLinks.twitter}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialLinks.instagram">Instagram URL</label>
              <input
                type="text"
                id="socialLinks.instagram"
                name="socialLinks.instagram"
                value={formData.socialLinks.instagram}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialLinks.linkedin">LinkedIn URL</label>
              <input
                type="text"
                id="socialLinks.linkedin"
                name="socialLinks.linkedin"
                value={formData.socialLinks.linkedin}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-button" onClick={onCancel}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Create Template
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TemplateFormModal;

// // Updated Template Selection Panel with previews
// function TemplatePanel({ templates, selectedTemplate, onSelect }) {
//   return (
//     <div className="template-panel">
//       <h2>Choose a Template</h2>
//       <div className="template-list">
//         {templates.map((template) => (
//           <div
