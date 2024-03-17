import React, {useEffect, useState} from 'react'
import {setUrl} from '../../../Redux/Actions/urlActions'
import {useDispatch} from 'react-redux'

export const LinkComponent = (props) => {

  let dispatch = useDispatch()

  const [styles, setStyles] = useState({ color: "black" })
  const [text, setText] = useState("<=Link=>")
  const [nav, setNav] = useState("")

  useEffect(() => {
    if ("styles" in props) {
      setStyles(props.styles)
    }
    if ("text" in props) {
      setText(props.text)
    }
    if("navigateTo" in props){
      setNav(props.navigateTo)
    }
  }, [styles,text,nav])

  let navigateTo = (data) => {
    dispatch(setUrl(data))
  }

  return (
    <span style={styles} onClick={() => navigateTo(nav)}>
      {text}
    </span>
  )
}
