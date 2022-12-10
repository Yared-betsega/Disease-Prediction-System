import React from 'react'
import "./container.css"

export default function Container({ Component }) {
    return (
        <div className='background'>
            <Component />
        </div>
    )
}
