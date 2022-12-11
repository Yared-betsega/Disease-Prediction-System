import React from 'react'

export default function SignUpForm() {
    return (
        <div>
            <div className='my-4 lg:my-8'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Email</label>
                <input id="emailAddress" type="email" className="block w-full lg:h-14 px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div className='my-4 lg:my-8'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Username</label>
                <input id="username" type="text" className="block w-full lg:h-14 px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div className='my-4 lg:my-8'>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">Password</label>
                <input id="password" type="password" className="block w-full lg:h-14 px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                <ul className='gap-2 px-5 list-disc font-thin text-sm grid grid-cols-2 gap-6 mt-4 md:grid-cols-3'>
                    <li>Use 4 or more characters</li>
                    <li>One Special Character</li>
                    <li>One uppercase character</li>
                    <li>One number</li>
                    <li>One lowercase character</li>
                </ul>
            </div>

            <div className="flex justify-start mt-6">
                <button className="px-10 py-4 leading-5 text-white text-lg transition-colors duration-300 transform bg-gray-900 rounded-3xl hover:bg-blue-900 focus:outline-none focus:bg-blue-900">Create an account</button>
            </div>
        </div>
    )
}
