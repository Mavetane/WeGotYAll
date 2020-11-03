import React from "react";
import { Route, Redirect } from "react-router-dom";
import store from '../redux/store/index';
import { HANDLE_AUTH } from "../redux/Authentication/actions/actionTypes";

export const checkAuthState = async () => {
  // store.dispatch({
  //   type: HANDLE_AUTH,
  //   payload: false
  // })
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
            <Redirect to="/register" />
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