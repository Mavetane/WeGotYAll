import React, { useState } from 'react';
import { errorStyle, successStyle } from '../../containers/Seekers/HelperForm';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/Authentication/actions/authActions';
import history from '../../routes/history';



export function SignIn () {
  const [signInDetails, setSignInDetails] = useState({ email: '', password: '', errors: '', success: '' });
  const { email, password, errors } = signInDetails;
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    setSignInDetails({ ...signInDetails, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    if (email == "" || password == "") {
      setSignInDetails({ ...signInDetails, errors: "Input fields required" })
    } else {
      dispatch(signin(signInDetails))
    }
  }

  return (
    <div>
      <h1>SignIn</h1>
      <div>
        <p style={errorStyle}>{errors}</p>
      </div>
      <form onSubmit={onSubmit} >
        <input type="email" placeholder="Email" value={email} onChange={handleChange} name="email" />
        <input type="password" placeholder="Password" value={password} onChange={handleChange} name="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

