import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import {setPersonalInformation} from '../../../Redux/Actions/informationActions'
import {setUrl} from '../../../Redux/Actions/urlActions'
import {useDispatch} from 'react-redux'

export const PersonalInfoComponent = () => {

  let dispatch = useDispatch()

  let personal = useSelector(state => state.personalReducer)

  const [enable, setEnable] = useState(false)

  const [data, setData] = useState({
    fName: "",
    mName: "",
    lName: "",
    bDate: "",
    age: -1,
    height: -1,
    disability: "None",
    country: "None",
    state: "None",
    city: "None",
    maritalStatus: ""
  })

  let setMaritialStatus = (e,a) => {
    e.target.style.color = "blue"
    setData({...data, maritalStatus : a})
    if(data.fName!==""&&data.mName!==""&&data.lName!==""&&data.bDate!==""&&data.age!==-1&&data.height!==-1&&data.country!=="None"&&data.state!=="None"&&data.city!=="None"){
      setEnable(true)
    }else{

    }
  }

  let clear = () => {
    setData({
      fName: "",
      mName: "",
      lName: "",
      bDate: "",
      age: -1,
      height: -1,
      disability: "None",
      country: "None",
      state: "None",
      city: "None",
      maritalStatus: ""
    })
  }

  let submit = () => {
    dispatch(setPersonalInformation(data))
    dispatch(setUrl("family"))
  }

  return (
    <div style={{ marginInline: "25%" }}>
      <div className='text-center' style={{ margin: "5px", color: "rgb(255, 41, 71)", fontSize: "40px" }}>Personal Information</div>
      <div style={{ marginBlock: "5%", fontSize: "25px" }}>
        <div style={{margin : "5px"}}>
          <div><b>First name : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' value={data.fName} placeholder='first name' onChange={(e) => setData({ ...data, fName: e.target.value })} />
        </div>
        <div style={{margin : "5px"}}>
          <div><b>Middle name : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' value={data.mName} placeholder='middle name' onChange={(e) => setData({ ...data, mName: e.target.value })} />
        </div>
        <div style={{margin : "5px"}}>
          <div><b>Last name : </b></div>
          <input style={{ borderRadius: "10px" }} type='text' value={data.lName} placeholder='last name' onChange={(e) => setData({ ...data, lName: e.target.value })} />
        </div>
        <div style={{margin : "5px"}}>
          <b>Birth date : </b>
          <input style={{borderRadius : "10px"}} type='date' value={data.bDate} onChange={(e) => setData({...data, bDate : e.target.value})}/>
        </div>
        <div style={{margin : "5px"}}>
          <b>Age : </b>
          <input style={{borderRadius : "10px", width : "80px"}} type='number' value={data.age} onChange={(e) => setData({...data, age : e.target.value})}/>
        </div>
        <div style={{margin : "5px"}}>
          <b>Height : </b>
          <input style={{borderRadius : "10px", width : "80px"}} type='number' value={data.height} onChange={(e) => setData({...data, height : e.target.value})}/>
        </div>
        <div style={{margin : "5px"}}>
          <b>Disability : </b>
          <select style={{borderRadius : "10px"}} onChange={(e) => setData({...data, disability : e.target.value})}>
            <option value="None">None</option>
            <option value="Physically challanged">Physically challanged</option>
          </select>
        </div>
        <div style={{margin : "5px"}}>
          <b>Country : </b>
          <select style={{borderRadius : "10px"}} onChange={(e) => {setData({...data, country : e.target.value}); }}>
            {personal.countries.map((a) => {
              return <option value={a}>{a}</option>
            })}
          </select>
        </div>
        <div style={{margin : "5px"}}>
          <b>State : </b>
          <select style={{borderRadius : "10px"}} onChange={(e) => setData({...data, state : e.target.value})}>
            {personal.states.map((a) => {
              return <option value={a}>{a}</option>
            })}
          </select>
        </div>
        <div style={{margin : "5px"}}>
          <b>City : </b>
          <select style={{borderRadius : "10px"}} onChange={(e) => setData({...data, city : e.target.value})}>
            {personal.cities.map((a) => {
              return <option value={a}>{a}</option>
            })}
          </select>
        </div>
        <div style={{margin : "5px"}}>
          <b>Marital status : </b>
            {personal.maritalStatuses.map((a) => {
              return <span style={{margin : "5px", color : "red"}} onClick={(e) => setMaritialStatus(e,a)}>{a} |</span>
            })}
        </div>
      </div>
      <div className='d-flex justify-content-end' style={{marginBlock : "5%", fontSize : "25px"}}>
        <button className='btn btn-secondary' style={{margin : "5px"}} onClick={clear}>Clear</button>
        {enable ? <button className='btn btn-primary' style={{margin : "5px"}} onClick={submit}>Proceed</button> : <button className='btn btn-primary' style={{margin : "5px"}} disabled>Proceed</button>}
      </div>
    </div>
  )
}
