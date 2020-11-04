import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateCode } from '../../redux/Authentication/actions/authActions';
import history from '../../routes/history';


export function SignUp () {
  const [signUpDetails, setSignUpDetails] = useState({ username: '', email: '', password: '', errors: "", success: "" });
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    dispatch(generateCode(signUpDetails))
    history.push('/verificationform')
  }

  const { username, email, password } = signUpDetails;
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Username" onChange={handleChange} value={username} name="username" /><br />
        <input type="email" placeholder="Email" onChange={handleChange} value={email} name="email" /><br />
        <input type="password" placeholder="Password" onChange={handleChange} value={password} name="password" /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

