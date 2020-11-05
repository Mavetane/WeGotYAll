import React, { useState } from 'react';
import { errorStyle, successStyle } from '../../containers/Seekers/HelperForm';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../../redux/Authentication/actions/authActions';
import history from '../../routes/history';




export function SignIn () {
  const [signInDetails, setSignInDetails] = useState({ email: '', password: '', errors: '', success: '' });
  const { email, password, errors } = signInDetails;
  const dispatch = useDispatch();
  const backEndError = useSelector(state => state.auth.error)

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
  console.log('error', backEndError)
  return (
    <div className="signin-container">
      <header className="App-header">
        <h3>SignIn</h3>
      </header>
      <div className="signin-wrapper">
        <div>
          <p style={errorStyle}>{errors}</p>
          <p style={errorStyle}>{backEndError !== "Password or email is incorrect" ? null : `${backEndError}`}</p>
        </div>
        <div className="signin-form">
          <form onSubmit={onSubmit} >
            <input type="email" placeholder="Email" value={email} onChange={handleChange} name="email" /><br />
            <input type="password" placeholder="Password" value={password} onChange={handleChange} name="password" /><br />
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  )
}

