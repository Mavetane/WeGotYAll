import React, { useState } from 'react';
import history from '../../routes/history';
import { addPost } from '../../redux/Seekers/actions/seekerActions';
import { useDispatch } from 'react-redux';



export function HelperForm () {
  const [seekerInfo, setSeekerInfo] = useState({ city: '', description: '', province: '', title: '', expdate: '', errors: "", success: "" })
  const [count, setCount] = useState(0);
  const [occupationStatus, setOccupationStatus] = useState(false);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value, name } = e.target;
    setSeekerInfo({ ...seekerInfo, [name]: value })
  }
  const onSubmit = e => {
    const { expdate, city, province, title, description, errors, success } = seekerInfo;
    e.preventDefault();
    if (expdate == "" || city == "" || province == "" || title == "" || description == "") {
      setSeekerInfo({ ...seekerInfo, errors: "Input fields required" })
      return
    } else {
      setSeekerInfo({ ...seekerInfo, success: "Congradulations your application has been accepted, Check your mail regularly", errors: "" })
      history.push('/seekerdashboard')
      dispatch(addPost(seekerInfo))
      console.log('seekerInfo', seekerInfo)
    }
  }
  const setOccupation = e => {
    const { name } = e.target
    setCount(count + 1)
    if (count < 1) {
      seekerInfo.title = name
      return seekerInfo.title
    } else {
      setSeekerInfo({ ...seekerInfo, errors: "You can only select one title at a time, please not that the first title will be the one saved on this post, complete this form and start again with a different title ." })
      return
    }
  }
  const toggle = () => {
    setOccupationStatus(!occupationStatus)
  }


  const { expdate, city, province, errors, success, description } = seekerInfo;
  return (
    <div>
      <div>
        <h3>
          Let's get to know you better as an employer, please fill the form below to make employees understand a little about you.
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
            <input type="checkbox" onClick={setOccupation} value="babysitters" name="babysitters" />
            <label>BabySitter</label><br />
            <input type="checkbox" onClick={setOccupation} value="dogwalkers" name="dogwalkers" />
            <label>DogWalker</label><br />
            <input type="checkbox" onClick={setOccupation} value="handymen" name="handymen" />
            <label>HandyMan/HandyWoman</label><br />
            <input type="checkbox" onClick={setOccupation} value="maids" name="maids" />
            <label>Maid</label><br />
            <input type="checkbox" onClick={setOccupation} value="plumbers" name="plumbers" />
            <label>Plumber</label><br />
          </div>}
        <input type="text" placeholder="Exp date YYYY-MM-DD" name="expdate" value={expdate} onChange={handleChange} /><br />
        <input type="text" placeholder="City" name="city" value={city} onChange={handleChange} /><br />
        <input type="text" placeholder="Description" name="description" value={description} onChange={handleChange} /><br />
        <input type="text" placeholder="Physical Address" name="province" value={province} onChange={handleChange} /><br />
        <input type="submit" />
      </form>
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