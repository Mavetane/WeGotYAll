import React from 'react'

export function LandingPage () {
  return (
    <div className="landing-page">
      <header className="App-header">
        <h3>WE GOT Y'ALL</h3>
        <div className="log-div">
          <a href="/signin">SignIn  </a>
          <a href="/signup">SignUp </a>
          <a href="https://mavetane.github.io/">Developer</a>
        </div>
      </header>
      <div className="intro-wrapper">
        <p>Here at <strong>We Got Y'All</strong> we only offer two services, mind due we are a very small community.
        Nevertheless we specify in blue collar jobs and connecting workers with the their employers and vice versa in a few simple
        clicks. <a href="/signin">signin</a> if your new or just <a href="/signin">login</a> if you are already a member</p>
      </div>
    </div>
  )
}

