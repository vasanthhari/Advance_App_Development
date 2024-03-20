// import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookDetails.css';
import { Link } from 'react-router-dom'; 
import { useState,useEffect } from 'react';
import Navbar from "./Navbar";
function BookDetailsAlternate() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    eventName: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    address: '',
    dateOfEvent: '',
    timeOfEvent: '',
    numberOfPeople: '',
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const eventName = searchParams.get('eventName');
    if (eventName) {
      setFormData({
        ...formData,
        eventName: eventName,
      });
    }
  }, [location.search]);

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
  };

  return (
    <div>
    <div><Navbar/></div>
    <div className="book-details-container">
      <h1>Book Your Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="applicantName">Applicant Name</label>
            <input type="text" id="applicantName" name="applicantName" value={formData.applicantName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="applicantAddress">Applicant Address</label>
            <input type="text" id="applicantAddress" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="applicantMobile">Applicant Mobile No.</label>
            <input type="tel" id="applicantMobile" name="applicantMobile" value={formData.applicantMobile} onChange={handleChange} />
          </div>
        </div>
        <div className="form-column">
          <div className="form-group">
            <label htmlFor="applicantEmail">Applicant Email ID</label>
            <input type="email" id="applicantEmail" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfEvent">Date of Event</label>
            <input type="date" id="dateOfEvent" name="dateOfEvent" value={formData.dateOfEvent} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="timeOfEvent">Time of Event</label>
            <input type="time" id="timeOfEvent" name="timeOfEvent" value={formData.timeOfEvent} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People</label>
            <input type="number" id="numberOfPeople" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} />
          </div>
        </div>
        <Link to ="/fooddetails"><button type="submit" className="next-button">Next</button></Link>
      </form>
    </div>
    </div>
  );
}

export default BookDetailsAlternate;