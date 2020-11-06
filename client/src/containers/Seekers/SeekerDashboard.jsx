import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendEmail } from '../../redux/Authentication/actions/authActions';

export function SeekerDashboard () {
  const workersInfo = useSelector(state => state.seekers.workersInfo);
  const seekerEmail = useSelector(state => state.seekers.seekerPost.email)


  console.log('seekerEmail', seekerEmail)
  const workers = () => workersInfo.map(worker => <div key={worker.user_id}>
    <h2>{worker.username}</h2>
    <p><label>Brief Description:</label><br />{worker.description}</p>
    <h3>{worker.city}</h3>
    <h4>{worker.occupation}</h4>
    <h4>{worker.province}</h4>
    <button onClick={() => sendEmail('template_jx54y7o', 'wegotyouall@gmail.com', `${worker.email}`,
      `Hi ${worker.username} someone is interested in hiring you . Contact them ASAP on ${seekerEmail}`,
      'user_N17JPIiunsJWIe7FD2eQd')}>Request Worker</button>
  </div >)

  console.log('workersInfo', workersInfo)
  return (
    <div>
      <header className="App-header">
        <div className="home-div">
          <a href="/dashboard">Home</a>
          <a href="/">LogOut</a>
        </div>
      </header>
      <div style={{ border: 'insert' }}>
        {workers()}
      </div>
    </div>
  )
}

