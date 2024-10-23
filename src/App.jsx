import React from 'react';
import './App.css';
import logo from '/src/assets/LOGOSB-1.svg';
import rectangle3 from '/src/assets/Rectangle-3.svg';
import rectangle4 from '/src/assets/Rectangle-4.svg';
import rectangle9 from '/src/assets/Rectangle-9.svg';
import image1 from '/src/assets/image-1.svg';
import group3 from '/src/assets/Group-3.svg';


const App = () => {
  return (
    <div className="container" style={{ backgroundImage: `url(${image1})` }}>
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="nav">
          <ul>
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>INFO</li>
            <li>LOGIN</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <section className="hero-text">
          <h1>Stop Spam Calls<br />Before They Reach<br />You</h1>
          <div className="learn-more-btn">
            <img src={rectangle3} alt="Learn More" />
            <button>Learn More</button>
          </div>
        </section>
        <div className="video-loop">
          <img src={rectangle4} alt="Video in loop" />
          <p>Video in loop</p>
        </div>
      </main>
      <footer className="footer">
        <div className="notification">
          <img src={group3} alt="Get Notified" />
          <div className="notify-text">
            <h2>Get Notified instantly on</h2>
            <h3><span>Spam Calls</span></h3>
            <p>Stay a step ahead with real-time alerts on spam calls—detect and dodge the hassle instantly!</p>
          </div>
        </div>
        <div className="get-started-btn">
          <img src={rectangle9} alt="Get Started" />
          <button>GET STARTED</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
