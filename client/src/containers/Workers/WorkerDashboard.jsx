import React from 'react';
import { useSelector } from 'react-redux';
import { sendEmail } from '../../redux/Authentication/actions/authActions';

export function WorkerDashboard () {
  const seekersInfo = useSelector(state => state.workers.seekersData);
  const workerEmail = useSelector(state => state.auth)


  const seekers = () => seekersInfo.map(worker => <div key={worker.user_id}>
    <h2>{worker.username}</h2>
    <p><label>Brief Description:</label><br />{worker.description}</p>
    <h3>{worker.city}</h3>
    <h4>{worker.occupation}</h4>
    <h4>{worker.province}</h4>
    <button onClick={() => sendEmail('template_jx54y7o', 'wegotyouall@gmail.com', `${worker.email}`,
      `Hi ${worker.username} someone is interested in hiring you . Contact them ASAP on ${workerEmail}`,
      'user_N17JPIiunsJWIe7FD2eQd')}>Request Worker</button>
  </div >)

  console.log('workersInfo', seekersInfo, workerEmail)
  return (
    <div>
      <header className="App-header">
        <div className="home-div">
          <a href="/dashboard">Home</a>
          <a href="/">LogOut</a>
        </div>
      </header>
      {seekersInfo == null ? <div>Looks like there are no posts yet, reload to make sure or visit again later</div> :
        <div style={{ border: 'insert' }}>
          {seekers()}
        </div>}
    </div>
  )
}

