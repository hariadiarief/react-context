import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { LanguageProvider } from './context/LanguageContext'
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() { }

  render() {

    return (
      <LanguageProvider>
        <Router>
          <Layout>
            <Route lang={this} path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
          </Layout>
        </Router>
      </LanguageProvider>
    );
  }
}
