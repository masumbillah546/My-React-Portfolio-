import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer style={{backgroundColor: '#212529'}} class="footer w-100 text-white position-absolute bottom-0">
      <div class="container">
        <div class="row py-3 pb-0">
          <div class="col-5 d-flex flex-column align-items-center">
            <h6 class="text-uppercase">
              <span><FontAwesomeIcon icon={faLocationDot} /></span>
              <span className='mx-2'>Location</span>
            </h6>
            <p class="">Dhaka, Bangladesh</p>
          </div>
          <div class="col-7 d-flex flex-column align-items-center">
            <h6 class="text-uppercase">Get in touch</h6>
            <div className='m-2 mt-0 mx-0'>
              <a class="btn btn-danger m-1" href="https://www.facebook.com/masum.billah.7355079">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a class="btn btn-danger m-1" href="https://twitter.com/Masumbillah546">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a class="btn btn-danger m-1" href="https://www.linkedin.com/in/masum-billah-35756817b/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a class="btn btn-danger m-1" href="https://www.youtube.com/channel/UC5HOZf7S1_mp88M89fdCotQ?view_as=subscriber">
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