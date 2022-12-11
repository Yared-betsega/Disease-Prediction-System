import React from 'react'
import "./container.css"

export default function Container({ Component }) {
    return (

        <div className='bg-[#E6E6E6] px-4 py-6'>
            <Component />
        </div>
    )
}
