import React, { useState } from 'react';


export function WorkerForm () {
  const [workerInfo, setWorkerInfo] = useState({ names: "", city: "", physicalAddress: "", occupation: "", errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setWorkerInfo({ ...workerInfo, [name]: value })
  }
  const onSubmit = e => {
    const { names, city, physicalAddress, occupation, errors, success } = workerInfo;
    e.preventDefault();
    if (names == "" || city == "" || physicalAddress == "" || occupation == "") {
      setWorkerInfo({ ...workerInfo, errors: "Input fields required" })
      return
    } else {
      setWorkerInfo({ ...workerInfo, success: "Congradulations your application has been accepted, Check your mail regularly", errors: "" })

      console.log('wokerInfo', workerInfo)
    }
  }
  const setOccupation = e => {
    const { name } = e.target
    setCount(count + 1)
    if (count < 1) {
      workerInfo.occupation = name
      return workerInfo.occupation
    } else {
      setWorkerInfo({ ...workerInfo, errors: "You can only select one occupation at a time, please not that the first occupation will be the one saved on this post, complete this form and start again with a different title ." })
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

  const { names, city, physicalAddress, errors, success } = workerInfo;

  return (
    <div>
      <div>
        <h3>
          Let's get to know you better as a worker, please fill the form below to make employers understand a little about you.
        </h3>
      </div>
      <div>
        <p style={errorStyle}>{errors}</p>
      </div>
      <div>
        <p style={successStyle}>{success}</p>
      </div>
      <form onSubmit={onSubmit}>
        <button onClick={toggle}>Title</button><br />
        {!occupationStatus ? null :
          <div>
            <input type="checkbox" onClick={setOccupation} value="babysitters" name="babysitters" /><label>BabySitter</label><br />
            <input type="checkbox" onClick={setOccupation} value="dogwalkers" name="dogwalkers" /><label>DogWalker</label><br />
            <input type="checkbox" onClick={setOccupation} value="handymen" name="handymen" /><label>HandyMan/HandyWoman</label><br />
            <input type="checkbox" onClick={setOccupation} value="maids" name="maids" /><label>Maid</label><br />
            <input type="checkbox" onClick={setOccupation} value="plumbers" name="plumbers" /><label>Plumber</label><br />
          </div>}
        <input type="text" placeholder="Full names" name="names" value={names} onChange={handleChange} /><br />
        <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
        <input type="text" placeholder="Physical Address" name="physicalAddress" value={physicalAddress} onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

