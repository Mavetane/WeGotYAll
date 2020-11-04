import axios from 'axios';
import store from '../../store';

export const addPost = (postData) => {
  const name = store.getState().auth.state.user.username;
  return async (dispatch) => {
    const table = postData.title;
    const sanitizedPost = {
      title: postData.title,
      username: name,
      city: postData.city,
      descripton: postData.description,
      province: postData.province
    }
    try {
      console.log('sanitizedPost', sanitizedPost)
      // const { data } = await axios.get(`http://localhost:9000/queries?sql=INSERT INTO "Seekers".${table} (title, username, city,description, email, province) values(${sanitizedPost})`)
    } catch (e) {
      console.log(e)
    }
  }
}