import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faBuildingColumns,
  faCalendar,
  faCalendarDays,
  faCertificate,
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

function Education() {
  const { isDark } = useSelector((state) => state.theme)
  return (
    <Container>
      <hr className='hr' />
      <h2 style={{ color: 'orange' }}>EDUCATION</h2>
      <Row id='education'>
        <div className='col-lg-4 d-flex flex-column justify-content-center p-3'>
          <div style={{ color: isDark ? '#b4b6b5' : '#000000', fontSize: 20 }}>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faCalendarDays} />
              <div className='mx-2'>2014 - 2018</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faGraduationCap} />
              <div className='mx-2'>Bachelor of Arts</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBookOpen} />
              <div className='mx-2'>Islamic Studies</div>
            </div>
            <div className='d-flex align-items-center'>
              <FontAwesomeIcon icon={faBuildingColumns} />
              <div className='mx-2'>Bangladesh Islami University</div>
            </div>
            {/* <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFileCircleCheck}/>
              <div className='mx-2'>CGPA 4.51 out of 5</div>
            </div> */}
          </div>
        </div>
        <div className='col-lg-8 d-flex flex-column justify-content-center p-3'>
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
        </div>
      </Row>
    </Container>
  )
}

export default Education
