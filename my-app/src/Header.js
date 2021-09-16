import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
              <Container>
                <Navbar.Brand><h3>⛺️Get Packin'</h3></Navbar.Brand>
                <Nav.Link className="button" href="/">
                  Gear List
                </Nav.Link>
                <Nav.Link className="button" href="/gear/new">
                  Add New Gear
                </Nav.Link>
                <Nav.Link className="button" href="/about">
                  About
                </Nav.Link>
              </Container>
            </Navbar>
        </div>
    )
}

export default Header