import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function SeekerDashboard () {
  const workersInfo = useSelector(state => state.seekers.workersInfo)

  // const workers = () => workersInfo.map(worker => <div key={worker.user_id}>
  //   <h2>{worker.username}</h2>
  //   <h3>{worker.city}</h3><br />
  //   <p>Profession: {worker.occupation}</p><br />
  //   <button>Request Worker</button>
  // </div >)


  console.log('workersInfo', workersInfo)
  return (
    <div>
      <header>
        <h1>SeekersDashboard</h1>
        <a href="/dashboard">Home</a>
      </header>
      <div style={{ border: 'insert' }}>
        {/* {workers()} */}
      </div>
    </div>
  )
}

