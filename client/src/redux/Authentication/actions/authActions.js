import axios from 'axios';
import history from '../../../routes/history';
import jwt from "jwt-decode";
import jwtDecode from "jwt-decode";

import { LOG_OUT, HANDLE_AUTH, ADD_USER, GET_ERROR, SAVE_CODE } from './actionTypes';
import emailjs from 'emailjs-com';

export const sendEmail = (templateId, senderEmail, receiverEmail, feedback, user) => {
  emailjs.send(
    'service_xz1xdyb',
    templateId,
    {
      senderEmail,
      receiverEmail,
      feedback
    },
    user
  )
    .then(res => {
      console.log('Email sent')
      alert("Email sent, check your mail")
    })
}
export const generateCode = (signUpDetails) => {
  return async (dispatch) => {
    try {
      var val = Math.floor(1000 + Math.random() * 9000);
      dispatch({ type: SAVE_CODE, payload: val });
      dispatch({ type: ADD_USER, payload: signUpDetails })
      const emailData = {
        templateId: 'template_jx54y7o',
        senderEmail: 'wegotyouall@gmail.com',
        receiverEmail: signUpDetails.email,
        feedback: `Copy this code and paste on your form to verify your email: ${val}`,
        user: 'user_N17JPIiunsJWIe7FD2eQd'
      }
      const { templateId, senderEmail, receiverEmail, feedback, user } = emailData;
      console.log("Email Sent")
      sendEmail(templateId, senderEmail, receiverEmail, feedback, user)
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
    try {
      const { data } = await axios.post('/signup', { ...sanitizedDetails })
      const decodedToken = jwtDecode(data.token)
      console.log("decodeToken", data)
      dispatch({ type: "ADD_EMAIL", payload: data.info })
      dispatch({ type: "ADD_TOKEN", payload: decodedToken })
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
      const { data } = await axios.post('/signin', loginDetails)
      if (!data.token) {
        dispatch({ type: GET_ERROR, payload: data })
        return
      }
      const decodedToken = jwtDecode(data.token)
      const newToken = data.token
      console.log('newToken',)
      dispatch({ type: "ADD_TOKEN", payload: decodedToken })
      dispatch({ type: "HANDLE_AUTH", payload: true })
      dispatch({ type: "ADD_USER", payload: data.info })
      localStorage.setItem("token", data.token)
      history.push('/dashboard')
    } catch (e) {
      console.log(e)
    }
  }
}



