import { Container, Row } from 'react-bootstrap'

function Projects() {
  return (
    <Container>
      <hr className='hr' />
      <h2 style={{ color: 'orange' }}>PROJECTS</h2>
      <Row id='projects'>
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className='col-lg-4 d-flex flex-column justify-content-center p-3'
          >
            <div className='projects-container'>
              <div className='project-container project-card'>
                <img
                  src={require('../assets/images/Screenshot 2023-04-03 141536.png')}
                  alt='expense-tracker'
                  loading='lazy'
                  className='project-pic'
                />
                <h3 className='project-title'>Expense Tracker</h3>
                <p className='project-details'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  ratione vel inventore labore commodi modi quos culpa aut
                  saepe! Alias!
                </p>
                <a href='#' target='_blank' className='project-link'>
                  Check it Out
                </a>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </Container>
  )
}

export default Projects
