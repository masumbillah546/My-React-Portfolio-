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
              <div className='mx-2'>Feb, 2021 - Present</div>
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
                Coordinating with development teams and designers to develop
                web/mobile applications.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Using React Native, designing and developing user interface
                components for JavaScript-based online and mobile apps.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon size={5} icon={faCircle} />
              </td>
              <td>
                {' '}
                Developing responsive, mobile-optimized interfaces and websites
                aligned with user experience requirements.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Troubleshooting issues and improving front-end performance.
              </td>
            </tr>

            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Writing reusable, effective, as well as scalable JavaScript code
                and creating interchangeable front-end modules.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Understanding clients’ needs to build apps in stipulated
                time/budget.
              </td>
            </tr>
            <tr>
              <td>
                <FontAwesomeIcon icon={faCircle} />
              </td>
              <td>
                {' '}
                Using additional JavaScript libraries such as Redux to make
                asynchronous API calls as well as improve the performance of the
                websites/mobile apps.
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
