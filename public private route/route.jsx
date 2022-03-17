import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";







<Router>
<Switch>
  <PublicRoute path="/" exact>
    <Login />
  </PublicRoute>

  <PublicRoute path="/signup">
    <SignUp />
  </PublicRoute>

  <PrivateRoute exact path="/profile">
     <Profile />
   </PrivateRoute>
   
   <PrivateRoute exact path="/home">
     <Home />
   </PrivateRoute>
</Switch>
</Router>