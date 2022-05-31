import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

import "./nav-view.scss";

export class NavView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem("user"),
      });
    }
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear();
    this.setState({
      user: null,
    });
    window.open("/", "_self");
  }

  render() {
    const { user } = this.state;

    if (user !== null) {
      return (
        <Navbar bg="light" expand="lg">
          <Container className="nav-wrap">
            <Navbar.Brand className="logo" href="/">
              Nature & Watch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                <Nav.Link href="/">Movies</Nav.Link>
                <NavDropdown title={user} id="basic-nav-dropdown">
                  <NavDropdown.Item href={`/users/${user}`}>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      this.onLoggedOut();
                    }}
                    href="/"
                  >
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
          <Container className="nav-wrap">
            <Navbar.Brand className="logo" href="/">
              Nature & Watch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="me-auto">
                <Nav.Link href="/">Log in</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}

/*const NavView = ({user}) => {
  return (
    <h1>Hello User, see extended Nav</h1>
  )
}

export default NavView */
