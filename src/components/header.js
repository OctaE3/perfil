import React from 'react'
import {Nav, Navbar, Container, Offcanvas} from 'react-bootstrap';
import cv from './extras/CV.pdf';
import './section1.css';
function header() {
  return (
    <>
    
  <Navbar fixed="top" variant="dark"  className='navbar' expand={false}>
  <Container fluid>
    <Navbar.Brand ></Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
     
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className='title' id="offcanvasNavbarLabel">Secciones</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link className='navtext' href="#ini">Inicio</Nav.Link>
          <Nav.Link className='navtext' href="#pre">Perfil</Nav.Link>
          <Nav.Link className='navtext' href="#ed">Educación</Nav.Link>
          <Nav.Link className='navtext' href="#con">Contacto</Nav.Link>
          <Nav.Link className='navtext' href={cv} target="_blank" rel="noopener noreferrer" download="CV_Octavio_Etchevarren.pdf">Descarga mi CV</Nav.Link>        
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
 </>
  )
}

export default header