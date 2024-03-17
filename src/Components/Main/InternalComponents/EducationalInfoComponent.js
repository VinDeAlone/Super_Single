import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {setEducationalInformation} from '../../../Redux/Actions/informationActions'
import {setUrl} from '../../../Redux/Actions/urlActions'

export const EducationalInfoComponent = () => {

  let dispatch = useDispatch()

  let [enable, setEnable] = useState(false)

  const [data, setData] = useState({
    education: "",
    employment: "",
    occupation: "",
    salary: -1,
    workLocation: ""
  })

  let clear = () => {
    setData({
      education: "",
      employment: "None",
      occupation: "",
      salary: -1,
      workLocation: ""
    })
  }

  let setWorkLocation = (e) => {
    setData({ ...data, workLocation: e.target.value })
    if (data.education !== "" && data.employment !== "None" && data.occupation !== "" && data.salary !== -1) {
      setEnable(true)
    }
  }

  let submit = () => {
    dispatch(setEducationalInformation(data))
    dispatch(setUrl("submit"))
  }

  return (
    <div style={{ marginInline: "25%" }}>
      <div className='text-center' style={{ margin: "5px", fontSize: "40px", color: "rgb(255, 41, 71)" }}>
        Educational Information
      </div>
      <div style={{ marginBlock: "5%", fontSize: "25px" }}>
        <div style={{ margin: "5px" }}>
          <div><b>Education : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' placeholder='education' value={data.education} onChange={(e) => { setData({ ...data, education: e.target.value }); }} />
        </div>
        <div style={{ margin: "5px" }}>
          <b>Employment : </b>
          <select style={{ borderRadius: "10px" }} onChange={(e) => setData({ ...data, employment: e.target.value })}>
            <option value="None">None</option>
            <option value="Government/PSU">Government/PSU</option>
            <option value="Private">Private</option>
            <option value="Buiness">Buiness</option>
            <option value="Defence">Defence</option>
            <option value="Self employed">Self employed</option>
            <option value="Not working">Not working</option>
          </select>
        </div>
        <div style={{ margin: "5px" }}>
          <div><b>Occupation : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' placeholder='occupation' value={data.occupation} onChange={(e) => { setData({ ...data, occupation: e.target.value }); }} />
        </div>
        <div style={{ margin: "5px" }}>
          <div><b>Salary : </b></div>
          <input style={{ borderRadius: "10px" }} type='number' placeholder='salary' value={data.salary} onChange={(e) => { setData({ ...data, salary: e.target.value }); }} />
        </div>
        <div style={{ margin: "5px" }}>
          <div><b>Work location : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' placeholder='work location' value={data.workLocation} onChange={(e) => setWorkLocation(e)} />
        </div>
      </div>
      <div className='d-flex justify-content-end' style={{ marginInline: "25%", marginBlock: "2%" }}>
        <button className='btn btn-secondary' style={{ margin: "5px" }} onClick={clear}>Clear</button>
        {!enable ? <button className='btn btn-primary' style={{ margin: "5px" }} disabled>Proceed</button> : ""}
        {enable ? <button className='btn btn-primary' style={{ margin: "5px" }} onClick={submit}>Preceed</button> : ""}
      </div>
    </div>
  )
}
