import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCode } from '../../redux/Authentication/actions/authActions';
import history from '../../routes/history';
import { errorStyle, successStyle } from '../../containers/Seekers/HelperForm';


export function SignUp () {
  const [signUpDetails, setSignUpDetails] = useState({ username: '', email: '', password: '', errors: "", success: "" });
  const { username, email, password, errors } = signUpDetails;
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    if (username == "", email == "", password == "") {
      setSignUpDetails({ ...signUpDetails, errors: "Input fields required" })
    } else {
      dispatch(generateCode(signUpDetails))
      history.push('/verificationform')
    }
  }

  return (
    <div>
      <h1>SignUp</h1>
      <div>
        <p style={errorStyle}>{errors}</p>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} value={username} name="username" /><br />
        <input type="email" placeholder="Email" onChange={handleChange} value={email} name="email" /><br />
        <input type="password" placeholder="Password" onChange={handleChange} value={password} name="password" /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

