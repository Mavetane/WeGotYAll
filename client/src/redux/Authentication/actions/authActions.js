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

export const saveUser = (username, email, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:9000/queries?sql=insert into "Authentication/Authorization".users (username, email, password) values('${username}','${email}','${password}')`);
      console.log('this baby just got fired', data)
    } catch (e) {
      dispatch({
        type: "GET_ERROR",
        payload: e.response,
      });
      console.log(e);
    }
  }
}



