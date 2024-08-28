import * as React from "react";
import { Route } from "react-router-dom";

// import Segments from "./segments/Segments";

export default [
  <Route key="/" exact path="/" render={() => <Home />} />,
  <Route
    key="/users"
    exact
    path="/users"
    render={() => <users />}
  />,

  <Route
    exact
    key="/xsdform"
    path="/xsdform/:responseId/:pprfId"
    render={(props) => <XsdForm {...props} mockTrial={false} />}
  />,
  <Route
    exact
    key="/xsdform"
    path="/xsdform/:pprfId"
    render={(props) => <XsdForm {...props} mockTrial={true} />}
  />,
  <Route
    key="/resetpassword"
    exact
    path="/resetpassword"
    render={() => <ResetPasswordForm />}
  />,
];
