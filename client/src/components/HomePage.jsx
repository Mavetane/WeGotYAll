import React from 'react'
import { logout } from '../redux/Authentication/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

export function HomePage () {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state)
  const handleLogOut = () => {
    dispatch(logout())
  }
  console.log('userInfo', userInfo)
  return (
    <div>
      <header className="homepage-header">
        <h3>Home</h3>
        <div className="home-div">
          <a href="/workerform">SearchJobs</a>
          <a href="/seekerform">SeekWorker</a>
          <a onClick={handleLogOut}>LogOut</a>
        </div>
      </header>

    </div>
  )
}

