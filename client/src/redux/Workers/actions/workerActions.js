import axios from 'axios';
import store from '../../store';

export const addWorkerPost = (postData) => {
  const name = store.getState().auth.state.user.username;
  const newEmail = store.getState().auth.state.user.email;

  return async (dispatch) => {
    const table = postData.title;
    const sanitizedPost = {
      title: postData.title,
      username: name,
      city: postData.city,
      description: postData.description,
      email: newEmail,
      province: postData.province
    }
    try {
      console.log('Hello World!', sanitizedPost, table)
      const { title, username, city, description, email, province } = sanitizedPost
      return await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Workers".${table} (title, username, city,description, email, province) values('${title}','${username}','${city}','${description}','${email}','${province}')`)
    } catch (e) {
      console.log(e)
    }
  }
}