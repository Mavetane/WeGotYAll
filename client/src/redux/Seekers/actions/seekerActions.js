import axios from 'axios';
import store from '../../store';

export const addPost = (postData) => {
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
      const { title, username, city, description, email, province } = sanitizedPost
      console.log('sanitizedPost', sanitizedPost, table)
      return await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Seekers".${table} (title, username, city,description, email, province) values('${title}','${username}','${city}','${description}','${email}','${province}')`)
    } catch (e) {
      console.log(e)
    }
  }
}