import React, { useState } from 'react';
import './Addtheme.css'; // Import your CSS file for styling
import Sidebar from './Sidebar';

const AddTheme = () => {
  const [formData, setFormData] = useState({
    themeName: '',
    imageUrl: '',
    photographer: '',
    videographer: '',
    returnGift: '',
    cost: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form fields
    setFormData({
      themeName: '',
      imageUrl: '',
      photographer: '',
      videographer: '',
      returnGift: '',
      cost: '',
      description: '',
    });
  };

  return (
    <div>
      <div><Sidebar/></div>
      <div className="add-theme-container">
        <h1>Add Theme</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="themeName">Theme Name</label>
            <input type="text" id="themeName" name="themeName" value={formData.themeName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input type="text" id="imageUrl" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="photographer">Photographer Details</label>
            <input type="text" id="photographer" name="photographer" value={formData.photographer} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="videographer">Videographer Details</label>
            <input type="text" id="videographer" name="videographer" value={formData.videographer} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="returnGift">Return Gift</label>
            <input type="text" id="returnGift" name="returnGift" value={formData.returnGift} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Cost</label>
            <input type="text" id="cost" name="cost" value={formData.cost} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddTheme;
