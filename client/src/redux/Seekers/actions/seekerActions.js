import axios from 'axios';
import store from '../../store';

export const addPost = (postData) => {
  const name = store.getState().auth.state.user.username;
  const newEmail = store.getState().auth.state.user.email;

  return async (dispatch) => {
    const table = postData.occupation;
    const sanitizedPost = {
      occupation: postData.occupation,
      username: name,
      city: postData.city,
      description: postData.description,
      email: newEmail,
      province: postData.province
    }
    try {
      const { occupation, username, city, description, email, province } = sanitizedPost
      const { data } = await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Seekers".${table} (occupation, username, city,description, email, province) values('${occupation}','${username}','${city}','${description}','${email}','${province}')`)
      dispatch({ type: "ADD_SEEKER_POST", payload: sanitizedPost })
    } catch (e) {
      console.log(e)
    }
  }
}

export const getWorkerData = (tableName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:9000/queries?sql=SELECT * FROM "Workers".${tableName}`);
      console.log('data', data)
      dispatch({ type: "GET_INFO", payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}