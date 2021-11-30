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
                  <Nav.Link href="/new">
                    Add New Gear
                  </Nav.Link>
                  <Nav.Link href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link>
                    Logout
                  </Nav.Link>
                </Nav>
              </Container>
            </Navbar>
        </div>
    )
}

export default Header