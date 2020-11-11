import axios from 'axios';
import { store } from '../../store';

export const reloadWindow = () => {
  window.location.reload()
}

export const addWorkerPost = (postData) => {
  const name = store.getState().auth.user.username;
  const newEmail = store.getState().auth.user.email;
  const table = postData.occupation;
  const sanitizedPost = {
    occupation: postData.occupation,
    username: name,
    city: postData.city,
    description: postData.description,
    email: newEmail,
    province: postData.province
  }
  return async (dispatch) => {
    try {
      const { occupation, username, city, description, email, province } = sanitizedPost
      await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Workers".${table} (occupation, username, city,description, email, province) values('${occupation}','${username}','${city}','${description}','${email}','${province}')`)
      dispatch({ type: "ADD_WORKER_POST", payload: sanitizedPost })
      reloadWindow()
    } catch (e) {
      console.log(e)
    }
  }
}

export const getSeekerData = (tableName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:9000/queries?sql=SELECT * FROM "Seekers".${tableName}`);
      dispatch({ type: "GET_SEEKER_DATA", payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}