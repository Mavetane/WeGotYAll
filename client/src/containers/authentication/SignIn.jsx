import React, { useState } from 'react';



export function SignIn () {
  const [signInDetails, setSignInDetails] = useState({ email: "", password: "", errors: "", success: "" });
  const { email, password } = signInDetails;

  const handleChange = e => {
    const { value, name } = e.target;
    setSignInDetails({ ...signInDetails, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log('signInDetails', signInDetails)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <form onSubmit={onSubmit} >
        <input type="email" placeholder="Email" value={email} onChange={handleChange} name="email" />
        <input type="password" placeholder="Password" value={password} onChange={handleChange} name="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

