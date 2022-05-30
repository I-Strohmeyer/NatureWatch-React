import React from "react";
import ReactDOM from "react-dom";
import MainView from "./components/main-view/main-view";
import FooterView from "./components/footer-view/footer-view";
import { Container, Nav } from "react-bootstrap";
import { NavView } from "./components/nav-view/nav-view";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <>
        <header id="header">
          <NavView />
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
