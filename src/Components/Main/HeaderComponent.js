import React, { Suspense, useState } from 'react'
import { useSelector } from 'react-redux'

export const HeaderComponent = () => {

    const [defColor, setDefColor] = useState({ margin: "5px" })
    const [comColor, setComColor] = useState({ margin: "5px", color: "green" })

    let isGeneralInfo = useSelector(state => state.informationReducer.isGeneralInfo)
    let isAstrologicalInfo = useSelector(state => state.informationReducer.isAstrologicalInfo)
    let isPersonalInfo = useSelector(state => state.informationReducer.isPersonalInfo)
    let isFamilyInfo = useSelector(state => state.informationReducer.isFamilyInfo)
    let isEducationalInfo = useSelector(state => state.informationReducer.isEducationalInfo)
    let isSubmit = useSelector(state => state.informationReducer.isSubmit)

    return (
        <div style={{fontSize : "25px"}}>
            <b>
                <span style={isGeneralInfo ? comColor : defColor}>General Information</span>
                <span>&#8594;</span>
                <span style={isAstrologicalInfo ? comColor : defColor}>Astrological Information</span>
                <span>&#8594;</span>
                <span style={isPersonalInfo ? comColor : defColor}>Personal Information</span>
                <span>&#8594;</span>
                <span style={isFamilyInfo ? comColor : defColor}>Family Information</span>
                <span>&#8594;</span>
                <span style={isEducationalInfo ? comColor : defColor}>Educational Information</span>
                <span>&#8594;</span>
                <span style={isSubmit ? comColor : defColor}>Submission</span>
            </b>
        </div>
    )
}
