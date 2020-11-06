import React, { useState } from 'react';
import history from '../../routes/history';
import { addPost, getWorkerData } from '../../redux/Seekers/actions/seekerActions';
import { useDispatch, useSelector } from 'react-redux';



export function HelperForm () {
  const [seekerInfo, setSeekerInfo] = useState({ email: '', city: '', description: '', province: '', occupation: '', expdate: '', errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    setSeekerInfo({ ...seekerInfo, [name]: value })
  }
  const onSubmit = e => {
    const { expdate, city, province, occupation, description, errors, success } = seekerInfo;
    e.preventDefault();
    if (expdate == "" || city == "" || province == "" || occupation == "" || description == "") {
      setSeekerInfo({ ...seekerInfo, errors: "Input fields required" })
      return
    } else {
      setSeekerInfo({ ...seekerInfo, success: "Congradulations your application has been accepted, Check your mail regularly", errors: "" })
      history.push('/seekerdashboard')
      dispatch(addPost(seekerInfo))
      dispatch(getWorkerData(occupation))
    }
  }
  const setOccupation = e => {
    const { name } = e.target
    setCount(count + 1)
    if (count < 1) {
      seekerInfo.occupation = name
      return seekerInfo.occupation
    } else {
      setSeekerInfo({ ...seekerInfo, errors: "You can only select one occupation at a time, please not that the first occupation will be the one saved on this post, complete this form and start again with a different occupation ." })
      return
    }
  }
  const toggle = () => {
    setOccupationStatus(!occupationStatus)
  }


  const { expdate, occupation, city, province, errors, success, description } = seekerInfo;
  return (
    <div>
      <div>
        <h3>
          Let's get to know you better as an employer, please fill the form below to make employees understand a little about you.
        </h3>
      </div>
      <div className="div">
        <form onSubmit={onSubmit}>
          <p>Select the category of the employee you seek below</p>
          <button onClick={toggle}>Occupation</button><br />
          {!occupationStatus ? null :
            <div>
              <input type="checkbox" onClick={setOccupation} value={occupation} name="babysitters" />
              <label>BabySitter</label><br />
              <input type="checkbox" onClick={setOccupation} value={occupation} name="dogwalkers" />
              <label>DogWalker</label><br />
              <input type="checkbox" onClick={setOccupation} value={occupation} name="handymen" />
              <label>HandyMan/HandyWoman</label><br />
              <input type="checkbox" onClick={setOccupation} value={occupation} name="maids" />
              <label>Maid</label><br />
              <input type="checkbox" onClick={setOccupation} value={occupation} name="plumbers" />
              <label>Plumber</label><br />
            </div>}
          <div>
            <p style={errorStyle}>{errors}</p>
          </div>
          <div>
            <p style={successStyle}>{success}</p>
          </div>
          <input type="text" placeholder="Exp date YYYY-MM-DD" name="expdate" value={expdate} onChange={handleChange} /><br />
          <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
          <input type="text" placeholder="Description" name="description" value={description} onChange={handleChange} /><br />
          <input type="text" placeholder="Physical Address" name="province" value={province} onChange={handleChange} /><br />
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}


export const errorStyle = {
  color: 'Red',
  fontSize: 15,

}
export const successStyle = {
  color: 'Green',
  fontSize: 20
}