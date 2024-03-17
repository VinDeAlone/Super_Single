import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {setFamilyInformation} from '../../../Redux/Actions/informationActions'
import {setUrl} from '../../../Redux/Actions/urlActions'


export const FamilyInfoComponent = () => {

  let dispatch = useDispatch()

  let family = useSelector(state => state.familyReducer)

  const [enable, setEnable] = useState(false)

  const [data, setData] = useState({
    familyStatus: "",
    familyType: "",
    familyType2: ""
  })

  let setFamilyStatus = (e, a) => {
    e.target.style.color = "blue"
    setData({
      ...data,
      familyStatus: a
    })
  }

  let setFamilyType = (e, a) => {
    e.target.style.color = "blue"
    setData({
      ...data,
      familyType: a
    })
  }

  let setFamilyTypes2 = (e, a) => {
    e.target.style.color = "blue"
    setData({
      ...data,
      familyType2: a
    })
    if (data.familyStatus !== "" && data.familyType !== "") {
      setEnable(true)
    }
  }

  let clear = () => {
    setData({
      familyStatus: "",
      familyType: "",
      familyType2: ""
    })
  }

  let submit = () => {
    dispatch(setFamilyInformation(data))
    dispatch(setUrl("education"))
  }

  return (
    <div style={{ marginInline: "25%" }}>
      <div className='text-center' style={{ margin: "5px", color: "rgb(255, 41, 71)", fontSize: "40px" }}>Family Information</div>
      <div style={{ marginBlock: "5%", fontSize: "25px" }}>
        <div style={{ margin: "5px" }}>
          <b>Family status : </b>
          {family.familyStatuses.map((a) => {
            return <span style={{ margin: "5px", color: "red" }} onClick={(e) => setFamilyStatus(e, a)}>{a} | </span>
          })}
        </div>
        <div style={{ margin: "5px" }}>
          <b>Family type : </b>
          {family.familyTypes.map((a) => {
            return <span style={{ margin: "5px", color: "red" }} onClick={(e) => setFamilyType(e, a)}>{a} | </span>
          })}
        </div>
        <div style={{ margin: "5px" }}>
          <b>Family type2 : </b>
          {family.familyTypes2.map((a) => {
            return <span style={{ margin: "5px", color: "red" }} onClick={(e) => setFamilyTypes2(e, a)}>{a} | </span>
          })}
        </div>
      </div>
      <div className='d-flex justify-content-end' style={{ marginBlock: "5%" }}>
        <button style={{margin : "5px"}} className='btn btn-secondary' onClick={clear}>Clear</button>
        {enable ? <button style={{margin : "5px"}} className='btn btn-primary' onClick={submit}>Proceed</button> : <button style={{margin : "5px"}} className='btn btn-primary' disabled>Proceed</button>}
      </div>
    </div>
  )
}
