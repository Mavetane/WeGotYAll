import React from 'react'
import { logout } from '../redux/Authentication/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

export function HomePage () {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state)
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div>
      <header className="App-header">
        <h3>Home</h3>
        <div className="log-div">
          <a href="/workerform">SearchJobs</a>
          <a href="/seekerform">SeekWorker</a>
          <a onClick={handleLogOut} href="/">LogOut</a>
        </div>
      </header>

    </div>
  )
}

