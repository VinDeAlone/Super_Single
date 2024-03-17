import React, { useState } from 'react'
import {setGeneralInfo} from '../../../Redux/Actions/informationActions'
import {useDispatch} from 'react-redux'
import {setUrl} from '../../../Redux/Actions/urlActions'

export const GeneralInfoComponent = () => {

    let dispatch = useDispatch()

    const [enable, setEnable] = useState(false)

    const [data,setData] = useState({
        gender : "none",
        mobile : "",
        email : ""
    })

    let clearData = () => {
        setData({
            gender : "none",
            mobile : "",
            email : ""
        })
    }

    let enableSet = () => {
        if(data.gender !== "none" && data.mobile !== "" && data.email !== ""){
            setEnable(true)
        }else{
            setEnable(false)
        }
    }

    let submit = () => {
        dispatch(setGeneralInfo(data))
        dispatch(setUrl("astrological"))
    }

    return (
        <div style={{ marginInline: "25%" }}>
            <div className='text-center' style={{ margin: "5px", fontSize: "40px", color: "rgb(255, 41, 71)" }}>
                General Information
            </div>
            <div style={{ marginBlock : "5%", fontSize : "25px" }}>
                <div style={{margin : "5px"}}>
                    <b>Gender : </b>
                    <select style={{ borderRadius: "10px" }} onChange={(e)=>{setData({...data, gender : e.target.value});}}>
                    <option value="none">None</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="trans">Trans</option>
                    </select>
                </div>
                <div style={{margin : "5px"}}>
                    <div><b>Mobile number : </b></div>
                    <input style={{borderRadius : "10px"}} type='number' placeholder='mobile number' value={data.mobile} onChange={(e)=>{setData({...data, mobile : e.target.value}); }}/>
                </div>
                <div style={{margin : "5px"}}>
                    <div><b>Email address : </b></div>
                    <input style={{borderRadius : "10px"}} type='email' placeholder='email' value={data.email} onChange={(e)=>{setData({...data, email : e.target.value}); enableSet()}}/>
                </div>
            </div>
            <div className='d-flex justify-content-end' style={{marginInline : "25%", marginBlock : "2%"}}>
                <button className='btn btn-secondary' style={{margin : "5px"}} onClick={clearData}>Clear</button>
                {!enable ? <button className='btn btn-primary' style={{margin : "5px"}} disabled>Proceed</button> : ""}
                {enable ? <button className='btn btn-primary' style={{margin : "5px"}} onClick={submit}>Preceed</button> : ""}
            </div>
        </div>
    )
}
