// BookEventPage.jsx

import  { useState } from 'react';
import EventDetails from '../Components/EventDetails';
import './Bookevent.css';
import Navbar from "./Navbar";
function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle image click
  const handleImageClick = (event) => {
    setSelectedEvent(event);
  };

  return selectedEvent ? (
    <EventDetails event={selectedEvent} />
  ) : (
   <div>
   <div><Navbar/></div>
    <div className="book-event-page">
      <h1 className="event-title">Book Your Events</h1>
      <div className="image-grid">
        <div className="image-item item1" onClick={() => handleImageClick({id: 1 , name:  "KSV BIRTHDAY EVENTS" , image :"https://www.diytomake.com/wp-content/uploads/2021/03/How-To-Design-And-Decorate-A-Room-for-the-Perfect-Party.jpg"})}>
        <span className="event-name">KSV BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item2" onClick={() => handleImageClick({id:2 , name:"TS BIRTHDAY EVENTS" , image:"https://i.pinimg.com/originals/f8/10/9a/f8109a552f5e7f18c40f066032592d00.jpg"})}>
          <span className="event-name">TS BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item3" onClick={() => handleImageClick({id:3 , name: "TTT BIRTHDAY EVENTS", image:"https://i.pinimg.com/originals/69/ed/45/69ed455435f492a9f0c76e5a2776382e.jpg"})}>
          <span className="event-name">TTT BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item4" onClick={() => handleImageClick({id:4 , name:"BMS BIRTHDAY EVENTS", image:"https://1.bp.blogspot.com/-ebisd03_rl4/XPnTQl_WzkI/AAAAAAAAAfY/dEAsv_wn7-M7TC5TnwMwJnOoeAQkB039gCLcBGAs/s1600/rainbowfirstbirthdayparty.jpg"})}>
          <span className="event-name">BMS BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item5" onClick={() => handleImageClick({id:5 , name:"VS BIRTHDAY EVENTS" ,image:"https://i.pinimg.com/originals/69/c3/03/69c30385c2e2ab1b27064cecd4902235.jpg"})}>
          <span className="event-name">VS BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item6" onClick={() => handleImageClick({id:6, name:"SVK BIRTHDAY EVENTS" , image:"https://i.pinimg.com/originals/4e/5c/90/4e5c9060ebc64da507db5a07c35376b8.jpg"})}>
          <span className="event-name">SVK BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item7" onClick={() => handleImageClick({id:7, name:"VVS BIRTHDAY EVENTS" , image:"https://i.pinimg.com/originals/9d/89/9b/9d899b3159c4153995d2d0b8fc30d3e7.jpg"})}>
          <span className="event-name">VVS BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item8" onClick={() => handleImageClick({id:8, name:"LPK BIRTHDAY EVENTS", image:"https://cdn.diys.com/wp-content/uploads/2021/04/DIY-Birthday-decor-1.jpg"})}>
          <span className="event-name">LPK BIRTHDAY EVENTS</span>
        </div>
        <div className="image-item item9" onClick={() => handleImageClick({id:9, name:"SSS BIRTHDAY EVENTS", image:"https://www.togetherv.com/blog/wp-content/uploads/2021/04/shutterstock_2062979228.jpg"})}>
          <span className="event-name">SSS BIRTHDAY EVENTS</span>
        </div>       
      </div>
    </div>
    </div>
  );
}

export default Bookevent;