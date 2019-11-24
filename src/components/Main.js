import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Articles from "./Articles";
import Videos from "./Videos";

const Main = () => {
  return (
    <Route
      render={({ location }) => {
        const key = location.key;
        return (
          <TransitionGroup className="container">
            <CSSTransition
              key={key}
              timeout={500}
              classNames="page"
              unmountOnExit
            >
              <Switch>
                <Route path="/articles">
                  <Articles />
                </Route>
                <Route path="/videos">
                  <Videos />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        );
      }}
    />
  );
};

export default Main;
