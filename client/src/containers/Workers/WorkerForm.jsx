import { addWorkerPost } from '../../redux/Workers/actions/workerActions'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import history from '../../routes/history';
import { getSeekerData } from '../../redux/Workers/actions/workerActions'


export function WorkerForm () {
  const dispatch = useDispatch()
  const [workerInfo, setWorkerInfo] = useState({ names: '', city: '', province: '', physicalAddress: '', occupation: '', description: ``, errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setWorkerInfo({ ...workerInfo, [name]: value })
  }
  const onSubmit = e => {
    const { names, city, physicalAddress, occupation, province, errors, success } = workerInfo;
    e.preventDefault();
    if (names == "" || city == "" || physicalAddress == "" || occupation == "" || province == "") {
      setWorkerInfo({ ...workerInfo, errors: "Input fields required" })
      return
    } else {
      dispatch(addWorkerPost(workerInfo))
      dispatch(getSeekerData(occupation))
      setWorkerInfo({ ...workerInfo, success: "Congradulations your application has been accepted, Check your mail regularly", errors: "" })
      history.push('/workerdashboard')
    }
  }
  const setOccupation = e => {
    const { name } = e.target
    setCount(count + 1)
    if (count < 1) {
      workerInfo.occupation = name
      return workerInfo.occupation
    } else {
      setWorkerInfo({ ...workerInfo, errors: "You can only select one occupation at a time, please not that the first occupation will be the one saved on this post, complete this form and start again with a different occupation ." })
      return
    }
  }
  const toggle = () => {
    setOccupationStatus(!occupationStatus)
  }

  const errorStyle = {
    color: 'Red',
    fontSize: 15,

  }
  const successStyle = {
    color: 'Green',
    fontSize: 20
  }

  const { names, city, physicalAddress, description, province, occupation, errors, success } = workerInfo;

  return (
    <div className="workerForm-container">
      <h3>
        Let's get to know you better as a worker, please fill the form below to make employers understand a little about you.
        </h3>
      <div className="div">
        <div>
          <p style={errorStyle}>{errors}</p>
        </div>
        <div>
          <p style={successStyle}>{success}</p>
        </div>
        <form onSubmit={onSubmit}>
          <button onClick={toggle}>occupation</button><br />
          {!occupationStatus ? null :
            <div>
              <label>BabySitter
                <input type="checkbox" onClick={setOccupation} value={occupation} name="babysitters" />
                <span className="checkmark"></span>
              </label><br />
              <label>DogWalker
                <input type="checkbox" onClick={setOccupation} value={occupation} name="dogwalkers" />
                <span className="checkmark"></span>
              </label><br />
              <label>HandyMan/HandyWoman
                <input type="checkbox" onClick={setOccupation} value={occupation} name="handymen" />
                <span className="checkmark"></span>
              </label><br />
              <label>Maid
                <input type="checkbox" onClick={setOccupation} value={occupation} name="maids" />
                <span className="checkmark"></span>
              </label><br />
              <label>Plumber
                <input type="checkbox" onClick={setOccupation} value={occupation} name="plumbers" />
                <span className="checkmark"></span>
              </label>
            </div>}
          <input type="text" placeholder="Description" name="description" value={description} onChange={handleChange} /><br />
          <input type="text" placeholder="Full names" name="names" value={names} onChange={handleChange} /><br />
          <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
          <input type="text" placeholder="Physical Address" name="physicalAddress" value={physicalAddress} onChange={handleChange} /><br />
          <input type="text" placeholder="Province" name="province" value={province} onChange={handleChange} /><br />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

