import React from 'react'
import { logout } from '../redux/Authentication/actions/authActions';
import { useDispatch } from 'react-redux';
export function HomePage () {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div>
      <header className="homepage-header">
        Home
        <div className="home-div">
          <a href="/workerform">SearchJobs</a>
          <a href="/seekerform">SeekWorker</a>
          <a onClick={handleLogOut}>LogOut</a>
        </div>
      </header>
    </div>
  )
}

