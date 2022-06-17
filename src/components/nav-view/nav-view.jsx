import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { connect } from "react-redux";

import { setAuth } from "../../actions/actions";
import "./nav-view.scss";

export class NavView extends React.Component {
  onLoggedOut() {
    localStorage.clear();
    this.setAuth(null, null);
    window.open("/", "_self");
  }

  render() {
    const user = this.props.user;
    console.log("from render: user is", user);

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
              {user == 0 && <Nav.Link href="/">Log in</Nav.Link>}
              {user !== 0 && (
                <>
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
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.userAuth,
  };
};

export default connect(mapStateToProps, { setAuth })(NavView);

/*const NavView = ({user}) => {
  return (
    <h1>Hello User, see extended Nav</h1>
  )
}

export default NavView */
