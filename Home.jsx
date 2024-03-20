
import { Link } from 'react-router-dom'; 
import "./Home.css"
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
function Home()

{
    return(
        <div>
       <div><Navbar/></div>
        <div className='home-container'>
        <h1 className='home'>JOIN US FOR AN UNFORGETTABLE BIRTHDAY EXPERIENCE</h1><br/>
        <div className='text'>
        <p>"Make your birthday glamorous with our event management services."</p>
        <p>Create memorable moments with our birthday event planning."
        "Experience a joyful birthday celebration."</p>
        </div>
        <br/><br/>
        <Link to="/book">
        <button className="home-button">Book Event</button></Link>
        </div>
        </div>
    );
}
export default Home;