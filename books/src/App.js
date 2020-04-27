import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Search from "./pages/SearchPage/search";
import Saved from "./pages/SavedPage/saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
