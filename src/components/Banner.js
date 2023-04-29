import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'
import TsParticles from './TsParticles'
import TsParticles2 from './TsParticles2'
import TsParticles3 from './TsParticles3'
const profileImage = require('../assets/images/profile-picture.png')

function Banner() {
  const { isDark } = useSelector((store) => store.theme)
  return (
    <div id='home' className='container profile position-relative'>
      {/* <TsParticles /> */}

      {isDark ? <TsParticles3 /> : <TsParticles2 />}
      <div
        className='row py-4 zindex-1 position-relative'
        // style={{ backgroundColor: isDark ? '#1e1e1e' : '#FFFFFF' }}
      >
        <div
          style={{ color: isDark ? '#FFFFFF' : '#000000' }}
          className='col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center title p-3'
        >
          <h1>Welcome.</h1>
          <p style={{ fontSize: 20 }}>
            My name is Masum Billah,
            <br /> A highly ambitious Full Stack Web Developer with{' '}
            <span className='text-warning fw-bold'>2+ years</span> of experience
            working with{' '}
            <span className='text-warning fw-bold'>
              HTML, CSS, JavaScript, Bootstrap, React,
            </span>{' '}
            and <span className='text-warning fw-bold'>React Native</span>. And
            <span className='text-warning fw-bold'> 1 year</span> of experience
            working with{' '}
            <span className='text-warning fw-bold'>PHP & Laravel</span>. Highly
            adept at both independent and collaborative projects, with an
            emphasis on Landing page, Website, Android, and IOS app development.
            {/* <br />
            Check out some of my work in the Projects section. */}
          </p>
          {/* <p style={{ fontSize: 20 }}>
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p> */}
          {/* <p> I want to <mark>make things</mark> that make a difference.</p> */}
        </div>
        <div className='col-lg-4 order-1 order-lg-2 d-flex flex-column justify-content-center align-items-center  p-3'>
          <div className='profile-picture'>
            <img
              className=''
              src={profileImage}
              height={200}
              width={200}
              alt='Person'
            />
          </div>
          <div style={{ color: isDark ? '#FFFFFF' : '#000000', fontSize: 40 }}>
            Masum Billah
          </div>
          <div style={{ color: 'orange', fontSize: 25, lineHeight: 1 }}>
            Full Stack Web Developer
          </div>
        </div>
        <div className='col-lg-4 order-3 d-flex flex-column justify-content-center p-3'>
          <div style={{ color: isDark ? '#b4b6b5' : '#000000', fontSize: 20 }}>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faPhone} />
              <div className='mx-2'>+88 01738004246</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faEnvelope} />
              <div className='mx-2'>masumbillah546@gmail.com</div>
            </div>
            {/* <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub}/>
              <div className='mx-2'><a href='https://github.com/masumbillah546' target='_blank'>https://github.com/masumbillah546</a></div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLinkedin}/>
              <div className='mx-2'><a href='https://www.linkedin.com/in/masum-billah-35756817b/' target='_blank'>https://www.linkedin.com/in/masum-billah-35756817b/</a></div>
            </div> */}
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
              <div className='mx-2'> Dhaka, Bangladesh</div>
            </div>
          </div>

          {/* <div className='mx-2'>
            <a href='https://github.com/masumbillah546' target='_blank'>
              <FontAwesomeIcon icon={faGithub}/>
            </a>
          </div>
          <div className='mx-2'>
            <a href='https://www.linkedin.com/in/masum-billah-35756817b/' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Banner
