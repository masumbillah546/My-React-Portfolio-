import { Container, Row } from 'react-bootstrap'
import { css3, html5, javaScript, bootstrap, react, git } from '../assets/icons'

function TopSkills() {
  return (
    <Container>
      <hr className='hr' />
      <h2 style={{ color: 'orange' }}>TOP SKILLS</h2>
      <Row id='Topskills'>
        <div className='skills-wrapper'>
          <img src={html5} alt='' loading='lazy' className='icon icon-card' />
          <img src={css3} alt='' loading='lazy' className='icon icon-card' />
          <img
            src={javaScript}
            alt=''
            loading='lazy'
            className='icon icon-card'
          />
          <img
            src={bootstrap}
            alt=''
            loading='lazy'
            className='icon icon-card'
          />
          <img src={react} alt='' loading='lazy' className='icon icon-card' />
          <img src={git} alt='' loading='lazy' className='icon icon-card' />
        </div>
      </Row>
    </Container>
  )
}

export default TopSkills
