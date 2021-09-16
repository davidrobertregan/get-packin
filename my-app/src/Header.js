import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="/">⛺️Get Packin'</Navbar.Brand>
                <Nav>
                  <Nav.Link href="/">
                    Gear List
                  </Nav.Link>
                  <Nav.Link href="/gear/new">
                    Add New Gear
                  </Nav.Link>
                  <Nav.Link href="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        </div>
    )
}

export default Header