import { Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const projectDetails = [
  {
    title: 'Hostel Management System',
    description:
      'Here, Student/User can log in and view room details and book hostel easily. The user can change their password anytime. Admin can add/manage rooms, courses, students and many more.',
    image: require('../assets/images/HMS.png'),
    technology: 'PHP, Laravel, & MySQL',
    link: 'https://github.com/masumbillah546/laravel_hostel_management',
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio using React, Bootstrap & Javascript',
    image: require('../assets/images/Screenshot 2023-04-03 141536.png'),
    technology: 'React, Bootstrap & Javascript',
    link: 'https://github.com/masumbillah546/My-React-Portfolio-',
  },
  {
    title: 'News Portal Template',
    description:
      'This project is a template of Online News Portal has been developed on raw HTML, CSS & Javascript. ',
    image: require('../assets/images/news-portal.png'),
    technology: 'HTML, CSS, & Javascript',
    link: 'https://github.com/masumbillah546/news-portel-template-css',
  },
]

function Projects() {
  return (
    <Container>
      <hr className='hr' />
      <h2 style={{ color: 'orange' }}>PROJECTS</h2>
      <Row id='projects'>
        {projectDetails.map((item) => (
          <div
            key={item.title}
            className='col-lg-4 d-flex flex-column justify-content-center p-3'
          >
            <div className='projects-container'>
              <div className='project-container project-card'>
                <img
                  src={item.image}
                  alt='expense-tracker'
                  loading='lazy'
                  className='project-pic'
                />
                <h3 className='project-title'>{item.title}</h3>
                <p className='project-details'>{item.description}</p>
                <p className='project-details'>
                  <strong>Technology: </strong>
                  {item.technology}
                </p>
                <a href={item.link} target='_blank' className='project-link'>
                  <FontAwesomeIcon color='black' icon={faGithub} /> Check it Out
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
