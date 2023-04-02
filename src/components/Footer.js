import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { footerHeight } from '../constants/constants';

function Footer() {
  return (
    <footer style={{backgroundColor: '#212529', height: footerHeight}} className="footer w-100 text-white">
      <div className="container">
        <div className="row py-3 pb-0">
          <div className="col-5 d-flex flex-column align-items-center">
            <h6 className="text-uppercase">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <span className='mx-2'>Location</span>
            </h6>
            <p className="">Dhaka, Bangladesh</p>
          </div>
          <div className="col-7 d-flex flex-column align-items-center">
            <h6 className="text-uppercase">Get in touch</h6>
            <div className='m-2 mt-0 mx-0'>
              <a className="btn btn-danger m-1" href="https://www.facebook.com/masum.billah.7355079">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="btn btn-danger m-1" href="https://twitter.com/Masumbillah546">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="btn btn-danger m-1" href="https://www.linkedin.com/in/masum-billah-35756817b/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a className="btn btn-danger m-1" href="https://www.youtube.com/channel/UC5HOZf7S1_mp88M89fdCotQ?view_as=subscriber">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        </div>
    </footer>
  );
}

export default Footer;