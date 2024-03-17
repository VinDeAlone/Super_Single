import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { submitInformation } from '../../../Redux/Actions/informationActions'

export const SubmitComponent = () => {

  let dispatch = useDispatch()

  let data = useSelector(state => state.informationReducer)

  const [submission, setSubmission] = useState(false)

  let toggle = () => {
    if (submission === true) {
      setSubmission(false)
    } else {
      setSubmission(true)
    }
  }

  let submit = () => {
    let data2 = {
      gender: data.gender,
      mobile: data.mobile,
      email: data.email,
      relegion: data.relegion,
      cast: data.cast,
      subcast: data.subcast,
      gotra: data.gotra,
      dosh: data.dosh,
      firstName: data.fName,
      middleName: data.mName,
      lastName: data.lName,
      bdate: data.bDate,
      age: data.age,
      height: data.height,
      disability: data.disability,
      country: data.country,
      state: data.state,
      city: data.city,
      maritalStatus: data.maritalStatus,
      familyStatus: data.familyStatus,
      familyType: data.familyType,
      familyType2: data.familyType2,
      education: data.education,
      employment: data.employment,
      occupation: data.occupation,
      salary: data.salary,
      workLocation: data.workLocation
    }
    console.log(data2)
    dispatch(submitInformation(data2))
  }

  return (
    <div style={{ marginInline: "25%" }}>
      <div className='text-center' style={{ marginBlock: "5%", fontSize: "40px", color: "red" }}>
        Submission
      </div>
      <div style={{ marginBlock: "5%", fontSize: "25px" }}>
        <div style={{ margin: "5px" }}>
          <div><b>Submit ? </b></div>
          <input type='checkbox' onChange={() => toggle()} /> <lable style={{ fontSize: "18px" }}>Check this for submisstion</lable>
        </div>
      </div>
      <div className='d-flex justify-content-end' style={{ marginBlock: "5%", fontSize: "25px" }}>
        {submission ? <button className='btn btn-primary' style={{ margin: "5px" }} onClick={submit}>Submit</button> : <button className='btn btn-primary' style={{ margin: "5px" }} disabled>Submit</button>}
      </div>
    </div>
  )
}
