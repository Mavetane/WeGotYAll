import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../routes/history';
import { signup } from '../redux/Authentication/actions/authActions';

export function CodeForm () {
  const [verifcationCode, setVerificationCode] = useState({ input: undefined, errors: "", success: "" });
  const code = useSelector(state => state.auth.state.code);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [occupationStatus, setOccupationStatus] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setVerificationCode({ ...verifcationCode, [name]: value })
  }
  const onSubmit = e => {
    const { username, email, password } = user
    console.log(code, Number(verifcationCode.input))
    e.preventDefault();
    if (!code == "") {
      if (code == verifcationCode.input) {
        setVerificationCode({ ...verifcationCode, sucess: "Correct code one last step", errors: "" })
        dispatch(signup(user))
        if (!occupationStatus) {
          history.push('/seekerform')
        } else {
          history.push('/workerform')
        }
      } else {
        setVerificationCode({ ...verifcationCode, errors: "Incorrect code, check your mail and re-insert the code.", success: "" })
        return
      }
    }
  }

  const handleOccupation = () => {
    setOccupationStatus(!occupationStatus)
  }

  return (
    <div>
      <div>
        <h2>Welcome {user.username}, You're almost there! Open your mail and copy the verification code. Remeber to check your spam folder</h2>
      </div>
      <div>
        <label>{verifcationCode.success}</label>
        <label>{verifcationCode.errors}</label>
      </div>
      <div>
        <p>Help us set your platform before you get there, clik on the box if you are looking for a job or leave it blank if your looking for help.</p>
        <input type="checkbox" onClick={handleOccupation} />
        <label>Looking for Work?</label>
      </div>

      <form onSubmit={onSubmit}>
        <input type="number" onChange={handleChange} value={verifcationCode.input} name="input" placeholder="Your code here " />
        <input type="submit" />
      </form>
    </div>
  )
}

