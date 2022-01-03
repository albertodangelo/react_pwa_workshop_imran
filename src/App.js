import React from "react";
import Home from "./pages/home";
import "./styles/style.css";
import { Router } from "@reach/router";
import TopPicks from "./pages/top-picks";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <TopPicks path="top-picks" />
      </Router>
    );
  }
}

export default App;
