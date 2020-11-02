import React, { useState } from 'react';


function WorkerForm () {
  const [workerInfo, setWorkerInfo] = useState({ names: "", city: "", physicalAddress: "", occupation: "", errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setWorkerInfo({ ...workerInfo, [name]: value })
  }
  const onSubmit = (e) => {
    const { names, city, physicalAddress, occupation, errors, success } = workerInfo;
    e.preventDefault();
    if (names == "" || city == "" || physicalAddress == "" || occupation == "") {
      setWorkerInfo({ ...workerInfo, errors: "Input fields required" })
      return
    } else {
      console.log('wokerInfo', workerInfo)
    }
  }
  const setOccupation = (e) => {
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

  const { names, city, physicalAddress } = workerInfo;
  return (
    <div>
      <p>{workerInfo.errors}</p>
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

export default WorkerForm
