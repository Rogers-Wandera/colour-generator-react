import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index}) => {
  const [alert, setAlert] = useState(false);

  let bcg = rgb.join(",");
  let hex = rgbToHex(...rgb);

  useEffect(() => {
    let time = setTimeout(() => {
      setAlert(false)
    },3000)
    return() => clearTimeout(time)
  },[alert])

  return (
    <article className={`color ${index > 10 && "color-light"}`} style={{backgroundColor:`rgb(${bcg})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {
        alert && <p  className='alert'>Color copied to clipboard</p>
      }
      <button 
        className='btn-color'
        onClick={() => {
          setAlert(true)
          navigator.clipboard.writeText(hex)
        }}
        >copy color</button>
    </article>
  )
}

export default SingleColor
