import React, { useState } from 'react';
import history from '../../routes/history';
import { addPost, getWorkerData } from '../../redux/Seekers/actions/seekerActions';
import { useDispatch } from 'react-redux';


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
      dispatch(addPost(seekerInfo))
      dispatch(getWorkerData(occupation))
      history.push('/seekerdashboard')
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
        <h2 style={{ fontFamily: "'Oswald', sans-serif", size: 20 }}>
          Let's get to know you better as an employer, please fill the form below to make employees understand a little about you.
        </h2>
      </div>
      <div className="helperForm-wrapper">
        <form onSubmit={onSubmit}>
          <div className="div">
            <p>Select the category of the employee you seek below</p>
            <button onClick={toggle}>Occupation</button><br />
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
            <div>
              <p style={errorStyle}>{errors}</p>
            </div>
            <div>
              <p style={successStyle}>{success}</p>
            </div>
            <input type="text" placeholder="Exp date YYYY-MM-DD" name="expdate" value={expdate} onChange={handleChange} /><br />
            <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
            <input type="text" placeholder="Description" name="description" value={description} onChange={handleChange} /><br />
            <input type="text" placeholder="Province" name="province" value={province} onChange={handleChange} /><br />
            <input type="submit" />
          </div>
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