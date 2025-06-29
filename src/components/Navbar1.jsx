import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
    return (
        <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-black  border-warning" bg="dark" data-bs-theme="dark">
            
          <Container>
          <a href="#" className="navbar-logo">
          Coffee<span>Shop</span>
        </a>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggler navbar-dark border border-warning'/>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="text-center">
                <Nav.Link className="" href="">Home</Nav.Link>
                <Nav.Link  className="" href="">Tentang kami</Nav.Link>
                <Nav.Link className="" href="">Produk</Nav.Link>
                <Nav.Link className="" href="">Kontak</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default Navbar1