import { Navbar, Nav, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom"

function Header({setCurrentUser}) {
  
  let history = useHistory()

  function handleClick() {
    fetch("/api/logout", { method: "DELETE" })
    setCurrentUser(null)
    history.push('/')
}
  
  return (
        <div>
            <Navbar fluid bg="dark" variant="dark" expand='lg'>
              <Container>
                <Navbar.Brand href="/">⛺️Get Packin'</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='me-auto'>
                  <Nav.Link href="/">
                    Gear List
                  </Nav.Link>
                  <Nav.Link href="/new">
                    Add New Gear
                  </Nav.Link>
                  <Nav.Link href="/about">
                    About
                  </Nav.Link>
                  <Nav.Link onClick={handleClick}>
                    Logout
                  </Nav.Link>
                </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    )
}

export default Header