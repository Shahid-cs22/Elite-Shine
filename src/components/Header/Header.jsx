import { useState } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { HashLink } from "react-router-hash-link"
import "./Header.css"

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="main-navbar"
      sticky="top"
    >
      <Container>

        {/* LOGO */}
        <Navbar.Brand
          as={HashLink}
          smooth
          to="/#home"
          className="logo"
          onClick={() => setExpanded(false)}
        >
          Elite<span>Shine</span>
        </Navbar.Brand>

        {/* TOGGLE */}
        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navbar-nav">

          {/* CENTER MENU */}
          <Nav className="mx-auto nav-links">
            {["home", "about", "services", "price", "contact"].map(item => (
              <Nav.Link
                key={item}
                as={HashLink}
                smooth
                to={`/#${item}`}
                onClick={() => setExpanded(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Nav.Link>
            ))}
          </Nav>

          {/* RIGHT BUTTON */}
          <Button
            className="appointment-btn"
            href="tel:+917010181206"
            onClick={() => setExpanded(false)}
          >
            Call Now
          </Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
