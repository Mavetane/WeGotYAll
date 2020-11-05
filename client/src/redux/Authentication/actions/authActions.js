import axios from 'axios';
import history from '../../../routes/history';
import jwtDecode from "jwt-decode";
import { LOG_OUT, HANDLE_AUTH, ADD_USER, GET_ERROR, SAVE_CODE } from './actionTypes';


export const generateCode = (signUpDetails) => {
  return async (dispatch) => {
    try {
      var val = Math.floor(1000 + Math.random() * 9000);
      dispatch({ type: SAVE_CODE, payload: val });
      dispatch({ type: ADD_USER, payload: signUpDetails })
    } catch (e) {
      console.log(e);
    }
  };
}
export const logout = () => {
  return dispatch => {
    dispatch({ type: HANDLE_AUTH, payload: false })
    dispatch({ type: "LOG_OUT" })
    localStorage.removeItem("token")
    history.push('/')
  }
}

export const signup = (signUpDetails) => {
  const sanitizedDetails = {
    username: signUpDetails.username,
    email: signUpDetails.email,
    password: signUpDetails.password
  }
  return async (dispatch) => {
    console.log("Hello World!", signUpDetails)
    try {
      const { data } = await axios.post('http://localhost:9000/signup', { ...sanitizedDetails })
      const decodedToken = jwtDecode(data.token)
      console.log("decodeToken", decodedToken)
      dispatch({ type: "ADD_USER", payload: decodedToken })
      dispatch({ type: "HANDLE_AUTH", payload: true })
      localStorage.setItem("token", data.token)
    } catch (e) {
      dispatch({
        type: "GET_ERROR",
        payload: e.response,
      });
      console.log(e);
    }
  }
}


export const signin = (loginDetails) => {
  return async dispatch => {
    try {
      const { data } = await axios.post('http://localhost:9000/signin', loginDetails)
      if (!data.token) {
        dispatch({ type: GET_ERROR, payload: data })
        return
      }
      const decodedToken = jwtDecode(data.token)
      dispatch({ type: "ADD_USER", payload: decodedToken })
      dispatch({ type: "HANDLE_AUTH", payload: true })
      localStorage.setItem("token", data.token)
      history.push('/dashboard')
    } catch (e) {
      console.log(e)
    }
  }
}



