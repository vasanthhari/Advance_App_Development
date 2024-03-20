import  { useState } from 'react';
import './FoodDetails.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
function FoodDetails() {
  const [formData, setFormData] = useState({
    foodType: '', // Initialize with an empty string
    vegQuantity: 0, // Initialize with 0
    nonVegQuantity: 0, // Initialize with 0
    addOns: [], // Initialize with an empty array
  });

  const handleFoodTypeChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddOnsChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        addOns: [...formData.addOns, value],
      });
    } else {
      setFormData({
        ...formData,
        addOns: formData.addOns.filter((addOn) => addOn !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert('Thanks for booking!');
    window.location.href = "/home";
  };

  const getAddOnPrice = (addOn) => {
    switch (addOn) {
      case 'Magic Show':
        return '$1000';
      case 'DJ Party':
        return '$1500';
      case 'Mehandi':
        return '$800';
      case 'Game Show':
        return '$1200';
      default:
        return '';
    }
  };

  return (
    <div>
    <div><Navbar/></div>
    <div className="food-details-container">
      <h1>Food Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="foodType">Food Type</label>
          <select id="foodType" name="foodType" value={formData.foodType} onChange={handleFoodTypeChange}>
            <option value="">Select Food Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
            <option value="Both">Both</option>
          </select>
        </div>
        {formData.foodType !== '' && (
          <>
            <div className="form-group">
              <label htmlFor="vegQuantity">Quantity of Veg Items</label>
              <input type="number" id="vegQuantity" name="vegQuantity" value={formData.vegQuantity} onChange={handleFoodTypeChange} />
            </div>
            <div className="form-group">
              <label htmlFor="nonVegQuantity">Quantity of Non-Veg Items</label>
              <input type="number" id="nonVegQuantity" name="nonVegQuantity" value={formData.nonVegQuantity} onChange={handleFoodTypeChange} />
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="addOns">Add-Ons</label>
          <div>
            <label>
              <input type="checkbox" name="addOns" value="Magic Show" onChange={handleAddOnsChange} /> Magic Show - {getAddOnPrice('Magic Show')}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="addOns" value="DJ Party" onChange={handleAddOnsChange} /> DJ Party - {getAddOnPrice('DJ Party')}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="addOns" value="Mehandi" onChange={handleAddOnsChange} /> Mehandi - {getAddOnPrice('Mehandi')}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" name="addOns" value="Game Show" onChange={handleAddOnsChange} /> Game Show - {getAddOnPrice('Game Show')}
            </label>
          </div>
        </div>
        <button type="submit" className="next-button">Book Event</button>
      </form>
      <Link to="/home"></Link>
    </div>
    </div>
  );
}

export default FoodDetails;