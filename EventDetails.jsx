
import './EventDetails.css';
import { Link } from 'react-router-dom'; 
import Navbar from "./Navbar";
function EventDetails({ event }) {
  // Destructuring the event object
 const { id, name, image } = event;
  const rating = 4.5;
  const totalPrice = 15000;
  const place = "Coimbatore";
  const description= "Welcome to KSV Birthday Events! We're your one-stop destination for creating unforgettable birthday celebrations. Whether you're planning a milestone birthday, a surprise party for a loved one, or a themed extravaganza, we're here to turn your vision into reality. Our team of experienced event planners specializes in curating unique and personalized experiences tailored to your preferences and budget. From selecting the perfect venue to coordinating entertainment, catering, and decor, we handle every aspect of your event with meticulous attention to detail. Explore our range of customizable packages and themes, from elegant soirées to fun-filled adventures, designed to make your special day truly memorable. Let us take the stress out of planning so you can relax and enjoy every moment of your birthday celebration. Contact us today to start planning the ultimate birthday bash!";
  const imageClassName = `event-image-${id}`;
  return (
    <div>
    <div><Navbar/></div>
      <div className="event-details-page">
        <div className="image-and-details">
          <img src={image} alt={name} className={imageClassName} />
          <div className="details">
            <div className="detail-item"><b>Description:</b> {description}</div>
            <div className="detail-item"><b>Rating:</b> {rating}/5</div>
            <div className="detail-item"><b>Total Price:</b> ${totalPrice}</div>
            <div className="detail-item"><b>Place:</b> {place}</div>
            <Link to={{ pathname: "/bookdetails", search: `?eventName=${name}` }}>
              <button className="book-event-button">Book Event</button>
            </Link>
          </div>
        </div>
        <h1 className="title">{name}</h1>
      </div>
    </div>
  );
}

export default EventDetails;