import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const profileImage = require('../assets/images/profile-picture.png')

function Banner() {
  return (
    <div id="profile" className="container-fluid profile">
      <div className="row py-4" style={{backgroundColor: '#1e1e1e'}}>
        <div className="col-lg-4 d-flex flex-column justify-content-center title p-3">
            <p> I want to <mark>make things</mark> that make a difference.</p>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center  p-3">
          <div className="profile-picture">
            <img className="" src={profileImage} height="200" alt="Person"/>
          </div>
          <div style={{color: 'white', fontSize: 40}}>Masum Billah</div>
          <div style={{color: 'orange', fontSize: 25, lineHeight: 1}}>Frontend Developer</div>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center p-3">
          <div style={{color: '#b4b6b5', fontSize: 20}}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone}/>
              <div className='mx-2'>+88 01738004246</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faMessage}/>
              <div className='mx-2'>masumbillah546@gmail.com</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub}/>
              <div className='mx-2'><a href='https://github.com/masumbillah546' target='_blank'>https://github.com/masumbillah546</a></div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLinkedin}/>
              <div className='mx-2'><a href='https://www.linkedin.com/in/masum-billah-35756817b/' target='_blank'>https://www.linkedin.com/in/masum-billah-35756817b/</a></div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLocationDot}/>
              <div className='mx-2'> Dhaka, Bangladesh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;