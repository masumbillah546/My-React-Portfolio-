import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faBriefcase,
  faBuilding,
  faBuildingColumns,
  faBullseye,
  faCalendar,
  faCalendarDays,
  faCertificate,
  faCircle,
  faFileCircleCheck,
  faGraduationCap,
  faJ,
  faLocationDot,
  faMessage,
  faMobile,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'

function Experiences() {
  const { isDark } = useSelector((state) => state.theme)
  return (
    <Container>
      <hr className='hr' />
      <h2 style={{ color: 'orange' }}>EXPERIENCES</h2>
      <Row id='experiences'>
        <div className='col-12 d-flex flex-column justify-content-center p-3'>
          <div style={{ color: isDark ? '#b4b6b5' : '#000000', fontSize: 20 }}>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className='mx-2'>Feb, 2021 - Current</div>
            </div>
            <div className='d-flex align-items-center'>
              {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
              <FontAwesomeIcon icon={faBriefcase} />
              <div className='mx-2'>Junior Programmer (Frontend)</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBuilding} />
              <div className='mx-2'>Eon Infosys Technology</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faLocationDot} />
              <div className='mx-2'>304, Tejgaon I/A, Dhaka-1208</div>
            </div>
          </div>
          <div
            className='job-responsibility'
            style={{ color: isDark ? '#b4b6b5' : '#000000' }}
          >
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Develop new mobile application on Android and IOS using React
                Native.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Designing and developing responsive, mobile-optimized interfaces
                and websites aligned with user experience requirements.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon size={5} icon={faCircle} />
              </td>
              <td>
                {' '}
                Developing front-end features, components, and libraries,
                translating designs, reusable code optimized for maximum
                performance across various web-capable devices and browsers.
              </td>
            </tr>
            {/* <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Responsible for design and development of various components
                such as tab bars, map view, image picker, date picker, push
                notifications, sign-in/out features, profile management and
                navigation using react-native.
              </td>
            </tr> */}

            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Implementing dynamic Webpages where the content was fetched via
                API calls using end point and updating the DOM.
              </td>
            </tr>
          </div>
        </div>
        {/* <div className='col-lg-8 d-flex flex-column justify-content-center p-3'>
          <div style={{ color: isDark ? '#b4b6b5' : '#000000', fontSize: 20 }}>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className='mx-2'>2020 - 2021</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className='mx-2'>Diploma</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBookOpen} />
              <div className='mx-2'>
                Web Application Development with PHP & Frameworks
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBuildingColumns} />
              <div className='mx-2'>IsDB-BISEW</div>
            </div>
          </div>
        </div> */}
      </Row>
    </Container>
  )
}

export default Experiences
