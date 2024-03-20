import React, { useState } from 'react';
import './ViewBookedEvent.css'; // Assume this is your CSS file
import Navbar from './Navbar';
const BookedEventsPage = () => {
  // Sample data for booked events
  const [bookedEvents, setBookedEvents] = useState([
    {
      id: 1,
      eventName: 'Birthday Bash',
      place: 'The Grand Hall',
      date: '2024-04-15',
      time: '19:00',
      totalAmount: '$500',
    },
    {
      id: 2,
      eventName: 'Anniversary Celebration',
      place: 'The Rose Garden',
      date: '2024-05-20',
      time: '18:30',
      totalAmount: '$700',
    },
  ]);

  const handleEditEvent = (id) => {
    // Handle edit event action
    console.log('Edit event:', id);
  };

  const handleDeleteEvent = (id) => {
    // Handle delete event action
    console.log('Delete event:', id);
  };

  return (
    <div>
    <div><Navbar/></div>
    <div className="booked-events-container">
      <h2>Booked Events</h2>
      <table className="booked-events-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookedEvents.map((event) => (
            <tr key={event.id}>
              <td>{event.eventName}</td>
              <td>{event.place}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.totalAmount}</td>
              <td>
                <button className="edit-button" onClick={() => handleEditEvent(event.id)}>Edit</button>
                <button className="delete-button" onClick={() => handleDeleteEvent(event.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default BookedEventsPage;
