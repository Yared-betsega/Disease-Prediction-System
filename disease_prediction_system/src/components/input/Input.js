import React from 'react'

export default function Input({type, label}) {
    return (
    <div>
        <p>{label}</p>
        <input type={type} name={label}/>
    </div>
  )
}
