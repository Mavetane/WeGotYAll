import axios from 'axios';
import store from '../../store';

export const addWorkerPost = (postData) => {
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
      console.log('Hello World!', sanitizedPost, table)
      const { occupation, username, city, description, email, province } = sanitizedPost
      return await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Workers".${table} (occupation, username, city,description, email, province) values('${occupation}','${username}','${city}','${description}','${email}','${province}')`)
    } catch (e) {
      console.log(e)
    }
  }
}

export const getSeekerData = (tableName) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:9000/queries?sql=SELECT * FROM "Seekers".${tableName}`);
      console.log('data', data)
      dispatch({ type: "GET_SEEKER_DATA", payload: data })
    } catch (e) {
      console.log(e)
    }
  }
}