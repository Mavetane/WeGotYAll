import React, { } from 'react';
import { useSelector } from 'react-redux';
import { sendEmail } from '../../redux/Authentication/actions/authActions';



export function SeekerDashboard () {
  const workersInfo = useSelector(state => state.seekers.workersInfo);
  const seekerEmail = useSelector(state => state.auth.user.email)

  const workers = () => workersInfo.map(worker => <div key={worker.user_id} className="template-container">
    <h3>{worker.occupation}</h3>
    <label>Worker's Name:  </label><h9><strong>{worker.username}</strong></h9>
    <p><label>Description: </label><strong>{worker.description}</strong></p>
    <p><label>City: </label><strong>{worker.city}</strong></p>
    <p><label>Province: </label><strong>{worker.province}</strong></p>
    <button onClick={() => sendEmail('template_jx54y7o', 'wegotyouall@gmail.com', `${worker.email}`,
      `Hi ${worker.username} someone is interested in hiring you . Contact them ASAP on ${seekerEmail}`,
      'user_N17JPIiunsJWIe7FD2eQd')}>Request</button>
  </div >)

  return (
    <div>
      <header className="App-header">
        <div className="home-div">
          <a href="/dashboard">Home</a>
          <a href="/">LogOut</a>
        </div>
      </header>
      <div className="seeker-container">
        <h3>Here are available workers that meet your catergory.</h3>
        {workersInfo == null ? <div>Looks like there are no posts yet, reload to make sure or visit again later</div> :
          <div>
            {workers()}
          </div>}
      </div>
    </div>
  )
}

