import React, { useState } from 'react';


export function SignUp () {
  const [signUpDetails, setSignUpDetails] = useState({ email: "", password: "", errors: "", success: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value })
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log('signUpDetails', signUpDetails)
  }
  const { email, password } = signUpDetails;
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="Email" onChange={handleChange} value={email} name="email" />
        <input type="password" placeholder="Password" onChange={handleChange} value={password} name="password" />
        <input type="submit" />
      </form>
    </div>
  )
}

