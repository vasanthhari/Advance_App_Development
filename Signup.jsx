import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom'; 
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function getCursorPosition(event) {
    const x = (event.clientX * 100) / window.innerWidth + "%";
    const y = (event.clientY * 100) / window.innerHeight + "%";

    const eyes1 = document.getElementById("eyes1");
    const eyes2 = document.getElementById("eyes2");

    if (eyes1 && eyes2) {
      eyes1.style.left = x;
      eyes1.style.top = y;
      eyes1.style.transform = `translate(-${x}, -${y})`;

      eyes2.style.left = x;
      eyes2.style.top = y;
      eyes2.style.transform = `translate(-${x}, -${y})`;
    }
  }

  return (
    
    
    <div className="wrapper" onMouseMove={getCursorPosition}>
      <main style={{alignSelf : "center"}}>
        <section>
          <div className="face">
            <img src="https://assets.codepen.io/9277864/PF.png" alt="Face" width="250" height="250" />
            <div className="eye-cover1">
              <div id="eyes1"></div>
            </div>

            <div className="eye-cover2">
              <div id="eyes2"></div>
            </div>
          </div>
          <div className="login-container">
            <div className="social-login">
              <div className="logo">
                <img src="https://assets.codepen.io/9277864/robot-face-3.svg" alt="Gravam Company Logo" width="100" height="100" />
                <p>Bash!</p>
              </div>
            </div>
            <div className="email-login">
              <div className="login-h-container">
                <h1>Welcome to Birthday Bash</h1>
                <p>Already have an account? <Link to="/">Login!</Link></p>
              </div>
              <form>
                <label htmlFor="email">
                  <input id="email" name="email" type="email" placeholder="" autoComplete="off" value={email} onChange={handleEmailChange} />
                  <span id="span-email">Role</span>
                </label>
                <label htmlFor="email">
                  <input id="email" name="email" type="email" placeholder="" autoComplete="off" value={email} onChange={handleEmailChange} />
                  <span id="span-email">Email</span>
                </label>
                <label htmlFor="password">
                  <input id="password" name="password" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                  <span id="span-password">Username</span>
                </label>
                <label htmlFor="password">
                  <input id="password" name="password" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                  <span id="span-password">Mobile Number</span>
                </label>
                <label htmlFor="password">
                  <input id="password" name="password" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                  <span id="span-password">Password</span>
                </label>
                <label htmlFor="password">
                  <input id="password" name="password" type="password" placeholder="" value={password} onChange={handlePasswordChange} />
                  <span id="span-password">Confirm-Password</span>
                </label>
                <div className="recovery">
                  
                </div>
                <Link to="/home">
                <input type="submit" value="Sign up" /></Link>
              </form>
            </div>
          </div>
        </section>
        <div className="vector-1"></div>
        <div className="vector-2"></div>
        <div className="vector-3"></div>
      </main>
      <div className="codepen-footer">
        <small>Created by <a href="https://twitter.com/intent/follow?screen_name=TanGravam" target="_top">@TanGravam</a></small>
        <small><a href="https://www.gravam.com/" target="_top">Go to My Website</a></small>
      </div>
    </div>
    
    
  );
}

export default Login;


// <div>
// <input type="checkbox" id="remember" name="remember" />
// <label htmlFor="remember">Remember me</label>
// </div>


