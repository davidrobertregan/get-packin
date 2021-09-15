import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div>
            <h1>Get Packin'</h1>
            <p>A backpacker's interactive packing list</p>
            <Navbar collapseOnSelect  className="justify-content-center">
              <Container>
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