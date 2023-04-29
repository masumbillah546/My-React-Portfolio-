import { Container, Nav, Navbar } from 'react-bootstrap'
import ThemeSwitch from './ThemeSwitch'
import { useSelector } from 'react-redux'

function NavigationBar() {
  const { isDark } = useSelector((state) => state.theme)
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      bg={isDark ? 'dark' : 'light'}
      variant={isDark ? 'dark' : 'light'}
      sticky='top'
    >
      <Container className='position-relative'>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav bg-danger'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#experiences'>Experiences</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#education'>Education</Nav.Link>
            {/* <Nav.Link href='#contact'>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        <ThemeSwitch />
      </Container>
    </Navbar>
  )
}

export default NavigationBar
