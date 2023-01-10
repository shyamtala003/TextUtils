import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

function NavBar({ title, mode, toggleTheme }) {
  return (
    <Navbar bg={mode} variant={mode} expand="lg">
      <Container>
        <Navbar.Brand href="#home">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>
          <Form.Check
            style={mode === "light" ? { color: "black" } : { color: "white" }}
            type="switch"
            id="custom-switch"
            label="Enable dark mode"
            onClick={toggleTheme}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "textUtils",
};

export default NavBar;
