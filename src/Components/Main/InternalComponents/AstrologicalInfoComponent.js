import React, { useEffect, useRef, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setAstrologicalInformation} from '../../../Redux/Actions/informationActions'
import {setUrl} from '../../../Redux/Actions/urlActions'

export const AstrologicalInfoComponent = () => {

  let dispatch = useDispatch()

  let astrology = useSelector(state => state.astrologyReducer)

  const [enable,setEnable] = useState(false)

  const [data,setData] = useState({
    relegion : "Hindu",
    cast : "",
    subcast : "",
    gotra : "",
    dosh : ""
  })

  let setGotra = (e,a) => {
    e.target.style.color = "blue"
    setData({...data, gotra : a})
  }

  let setDoshas = (e,a) => {
    e.target.style.color = "blue"
    setData({...data, dosh : a})
    if(data.relegion !== "" && data.cast !== "" && data.subcast !=="" && data.gotra !==""){
      setEnable(true)
    }else{
      
    }
  }

  let submit = () => {
    dispatch(setAstrologicalInformation(data))
    dispatch(setUrl("personal"))
  }

  return (
    <div style={{marginInline : "25%" }}>
        <div className='text-center' style={{margin: "5px", fontSize: "40px", color: "rgb(255, 41, 71)"}}>
          Astrological Information
        </div>
        <div style={{marginBlock : "5%", fontSize : "25px"}}>
          <div style={{margin : "5px"}}>
            <b>Relegion : </b>
            <select style={{borderRadius : "10px"}} onChange={(e) => setData({...data, relegion : e.target.value})}>
              {astrology.relegions.map((r) => {
                return <option value={r}>{r}</option>
              })}
            </select>
          </div>
          <div style={{margin : "5px"}}>
            <div><b>Cast : </b></div>
            <input style={{borderRadius : "10px"}} type='text' value={data.cast} placeholder='cast' onChange={(e) => setData({...data, cast : e.target.value})}/>
          </div>
          <div style={{margin : "5px"}}>
            <div><b>Subcast : </b></div>
            <input style={{borderRadius : "10px"}} type='text' value={data.subcast} placeholder='sub-cast' onChange={(e) => setData({...data, subcast : e.target.value})}/>
          </div>
          <div style={{margin : "5px"}}>
            <div><b>Gotra</b></div>
            <div>
              {astrology.gotras.map((a) => {
                return <span style={{margin : "5px", color : "rgb(255, 41, 22)", borderRadius : "10px", padding : "2px"}} onClick={(e) => setGotra(e,a)}>{a}</span>
              })}
            </div>
          </div>
          <div style={{margin : "5px"}}>
            <div><b>Doshas : </b></div>
            <div>
              {astrology.doshas.map((a) => {
                return <span style={{margin : "5px", color : "rgb(255, 41, 22)", borderRadius : "10px", padding : "2px"}} onClick={(e) => setDoshas(e,a)}>{a}</span>
              })}
            </div>
          </div>
        </div>
        <div style={{marginInline : "25%"}}>
          <button style={{margin : "5px"}} className='btn btn-secondary'>Clear</button>
          { !enable ? <button style={{margin : "5px"}} className='btn btn-primary' disabled>Proceed</button> :
          <button style={{margin : "5px"}} className='btn btn-primary' onClick={submit}>Proceed</button> }
        </div>
    </div>
 )
}
