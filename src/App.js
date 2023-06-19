import './App.css';
import logo from './images/logo.svg'
import img3 from './images/desktop-preview.jpg';
import illustration from './images/illustration-mockups.svg';
import Face from './images/Facebook.svg'
import Insta from './images/Instagram.svg'
import Twit from './images/Twitter.svg'


function App() {
  return (
    <div className="App">
      <div className='Logo'>
        <img src={logo}></img>
      </div>

      <div className='sections'>
        <div className='section1'>
          <img src={illustration}></img>
        </div>

        <div className='section2'>
          <div className='texts' style={{ marginTop: '5%' }}>
            <h1> Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>
            <div className='btn'>
              <button> Register</button>
            </div>
          </div>
        </div>
      </div>


      <footer>
        <div className='Ms'>
          <a href=''><img src={Face}></img></a>
          <a href=''><img src={Insta}></img></a>
          <a href=''><img src={Twit}></img></a>
        </div>
        <p class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Your Name Here</a>.
        </p>
      </footer>

    </div>
  );
}

export default App;
