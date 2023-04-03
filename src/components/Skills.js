import {Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJ, faLocationDot, faMessage, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faFigma, faGithub, faHtml5, faLaravel, faNodeJs, faPhp, faReact, faSquareJs, faWordpress } from '@fortawesome/free-brands-svg-icons'

function Skills() {
  return (
    <Container>
      <hr className='hr'/>
      <h2 style={{color: 'orange'}}>SKILLS</h2>
      <Row id='skills'>
        <div className="col-lg-4 d-flex flex-column justify-content-center p-3">
          <div style={{color: '#b4b6b5', fontSize: 20}}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHtml5}/>
              <div className='mx-2'>HTML</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCss3}/>
              <div className='mx-2'>CSS</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBootstrap}/>
              <div className='mx-2'>Bootstrap</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faReact}/>
              <div className='mx-2'>React</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faMobile}/>
              <div className='mx-2'>React Native</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center p-3">
          <div style={{color: '#b4b6b5', fontSize: 20}}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faJ}/>
              <div className='mx-2'>jQuery</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPhp}/>
              <div className='mx-2'>PHP</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub}/>
              <div className='mx-2'>MySQL</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faLaravel}/>
              <div className='mx-2'>Laravel</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faWordpress}/>
              <div className='mx-2'>Wordpress</div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 d-flex flex-column justify-content-center p-3">
          <div style={{color: '#b4b6b5', fontSize: 20}}>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub}/>
              <div className='mx-2'>Git</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFigma}/>
              <div className='mx-2'>Figma</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGithub}/>
              <div className='mx-2'>Adobe Photoshop</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSquareJs}/>
              <div className='mx-2'>Javascript</div>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faNodeJs}/>
              <div className='mx-2'>NodeJs</div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Skills;