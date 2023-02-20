import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Header } from "../../components/moleculs";
import CreateBlog from "../CreateBlog";
import DetilBlog from "../DetilBlog";
import Home from "../home";
const MainApp = () => {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/create-blog">
            <CreateBlog />
          </Route>
          <Route path="/detil-blog">
            <DetilBlog />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default MainApp;
