import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbar1 = () => {
    return (
        <Navbar expand="lg" className="bg-black border-bottom border-warning" bg="dark" data-bs-theme="dark">
            <Container fluid>
       
                <Navbar.Brand href="#" className="text-warning fw-bold fs-4">
                    Coffee<span className="text-light">Shop</span>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" className='border border-warning' />

                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#Header">Home</Nav.Link>
                        <Nav.Link href="#services">Tentang Kami</Nav.Link>
                        <Nav.Link href="#products">Produk</Nav.Link>
                        <Nav.Link href="#contact">Kontak</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;
