import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import history from '../routes/history';

export function CodeForm () {
  const [verifcationCode, setVerificationCode] = useState({ input: undefined, errors: "", success: "" });
  const code = useSelector(state => state.auth.state.code);
  const [occupationStatus, setOccupationStatus] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setVerificationCode({ ...verifcationCode, [name]: value })
  }
  const onSubmit = e => {
    console.log(code, Number(verifcationCode.input))
    e.preventDefault();
    if (!code == "") {
      if (code == verifcationCode.input) {
        setVerificationCode({ ...verifcationCode, sucess: "Correct code one last step", errors: "" })
        if (!occupationStatus) {
          history.push('/seekerform')
        } else {
          history.push('/workerform')
        }
      } else {
        setVerificationCode({ ...verifcationCode, errors: "Incorrect code, check your mail and re-insert the code.", success: "" })
        console.log('Incorrect')
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
        <h2>Well, You're almost there! Open your mail and copy the verification code. Remeber to check your spam folder</h2>
      </div>
      <div>
        <label>{verifcationCode.success}</label>
        <label>{verifcationCode.errors}</label>
      </div>
      <div>
        <p>Help us set your platform before you get there</p>
        <button onClick={handleOccupation}>True/False</button>
      </div>
      <form onSubmit={onSubmit}>
        <input type="number" onChange={handleChange} value={verifcationCode.input} name="input" placeholder="Your code here" />
        <input type="submit" />
      </form>
    </div>
  )
}

