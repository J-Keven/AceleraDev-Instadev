import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import FeedRoute from "./FeedRoute";
import UsersRoute from "./UsersRoute";
import ProfileRoute from "./ProfileRoute";
import NewUserRoute from "./NewUserRoute";

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" component={FeedRoute} />

    <Route exact path="/users" component={UsersRoute} />

    <Route path="/users/:username" component={ProfileRoute} />

    <Route path="/newuser" component={NewUserRoute} />
  </Switch>
);

export default Routes;
