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
      <header className="App-header">
        <h3>SignUp</h3>
      </header>      <div>
        <p style={errorStyle}>{errors}</p>
      </div>
      <div className="div">
        <form onSubmit={onSubmit}>
          <label for="fname">Username</label>
          <input type="text" placeholder="Username" onChange={handleChange} value={username} name="username" />

          <label for="lname">Email</label>
          <input type="email" placeholder="Email" onChange={handleChange} value={email} name="email" />

          <label for="lname">Password</label>
          <input type="password" placeholder="Password" onChange={handleChange} value={password} name="password" /><br />
          <input type="submit" />
        </form>
      </div>

    </div>
  )
}

