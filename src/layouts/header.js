import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';

const Header = () => {

    return(

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="jaycoded logo" id="brand__logoId" className="brand__logoClass"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <div className='space'></div>
          <Nav>
            <Nav.Link href="/#about-me" className='nav__link'>
                Meet Jay!
            </Nav.Link>
            <Nav.Link href="/projects" className='nav__link'>
                Projects
            </Nav.Link>
            <Nav.Link eventKey={2} href="/#contact" className='nav__link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );

}

export default Header