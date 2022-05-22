import React from "react";
import ReactDOM from "react-dom";
import MainView from "./components/main-view/main-view";
import FooterView from "./components/footer-view/footer-view";
import { Container, Nav } from "react-bootstrap";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <>
        <header>
          <Container className="nav-wrap">
            <div className="logo">Nature & Watch</div>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </header>

        <Container id="bs-override">
          <MainView />
          <FooterView />
        </Container>
      </>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName("app-container")[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);
