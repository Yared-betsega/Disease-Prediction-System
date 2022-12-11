import React from 'react'
import {
    Link
} from "react-router-dom"
import SignUpForm from '../../components/signupForm/SignUpForm'

export default function Signup() {
    return (
        <div className='text-[#5A5A5A] bg-white rounded-3xl font-sans' >
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-16 md:pr-0 py-14'>
                    <div className='mx-3 my-5' >
                        <h1 className='sm:text-3xl md:text-lg lg:text-3xl font-bold'>Welcome to Disease Prediction System</h1>
                        <p className='text-xs sm:text-sm md:text-base '>Already have an account?
                            <Link color='red' to="/login">  Log in</Link>
                        </p>
                    </div>
                    <div className='mx-3 my-5'>
                        <div className='my-6'>
                            <SignUpForm />
                        </div>

                    </div>
                    <div className='mx-3 my-5'>
                        <p className='text-xs sm:text-sm md:text-base '>Already have an account?
                            <Link color='red' to="/login">  Log in</Link>
                        </p>
                    </div>
                </div>
                <div className='hidden md:block md:pl-10 lg:pl-28'>
                    <img src="https://res.cloudinary.com/diwvuplis/image/upload/v1670766308/DPS/Auth/signup_hpuojf.jpg" alt="side image here" className='h-full w-full' />
                </div>
            </div>
        </div >
    )
}
