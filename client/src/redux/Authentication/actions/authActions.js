import axios from 'axios';

export const generateCode = (signUpDetails) => {
  return async (dispatch) => {
    try {
      var val = Math.floor(1000 + Math.random() * 9000);
      dispatch({ type: "SAVE_CODE", payload: val });
      dispatch({ type: "ADD_USER", payload: signUpDetails });
    } catch (e) {
      console.log(e);
    }
  };
}

export const signup = (signUpDetails) => {
  const sanitizedDetails = {
    username: signUpDetails.username,
    email: signUpDetails.email,
    password: signUpDetails.password
  }
  console.log('sanitizedDetails', sanitizedDetails)
  return async (dispatch) => {
    try {
      const { data } = await axios.post('http://localhost:9000/signup', { ...sanitizedDetails })
      dispatch({ type: "ADD_USER", payload: sanitizedDetails })
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
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
}



