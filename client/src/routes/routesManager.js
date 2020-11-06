import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { store } from '../redux/store/index';
import { HANDLE_AUTH, ADD_USER } from "../redux/Authentication/actions/actionTypes";

export const checkAuthState = async () => {
  var token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token)
    store.dispatch({ type: ADD_USER, payload: decodedToken })
    store.dispatch({
      type: HANDLE_AUTH,
      payload: true
    })
  }
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => store.getState().isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/dashboard" />
          )
      } />
  );
}

export const PublicRoute = ({
  component: Component,
  ...rest
}) => {
  checkAuthState()
  return (
    <Route {...rest}
      component={
        props => !store.getState().isAuthorized ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/public" />
          )
      } />
  );
}