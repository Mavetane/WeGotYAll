import React, { useState } from 'react';


function HelperForm () {
  const [seekerInfo, setSeekerInfo] = useState({ city: "", province: "", occupation: "", expdate: "", errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setSeekerInfo({ ...seekerInfo, [name]: value })
  }
  const onSubmit = (e) => {
    const { expdate, city, province, occupation, errors, success } = seekerInfo;
    e.preventDefault();
    if (expdate == "" || city == "" || province == "" || occupation == "") {
      setSeekerInfo({ ...seekerInfo, errors: "Input fields required" })
      return
    } else {
      console.log('seekerInfo', seekerInfo)
    }
  }
  const setOccupation = (e) => {
    const { name } = e.target
    setCount(count + 1)
    if (count < 1) {
      seekerInfo.occupation = name
      return seekerInfo.occupation
    } else {
      setSeekerInfo({ ...seekerInfo, errors: "You can only select one occupation at a time, please not that the first occupation will be the one saved on this post, complete this form and start again with a different title ." })
      return
    }
  }
  const toggle = () => {
    setOccupationStatus(!occupationStatus)
  }

  const { expdate, city, province } = seekerInfo;
  return (
    <div>
      <div>
        <h3>
          Let's get to know you better as an employer, please fill the form below to make employees understand a little about you.
        </h3>
      </div>
      <p>{seekerInfo.errors}</p>
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
        <input type="text" placeholder="Exp date YYYY-MM-DD" name="expdate" value={expdate} onChange={handleChange} /><br />
        <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
        <input type="text" placeholder="Physical Address" name="province" value={province} onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default HelperForm
