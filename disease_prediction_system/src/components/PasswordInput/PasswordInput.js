import React from 'react'

export default function PasswordInput() {
  return (
    <div>
        <p>Password</p>
        <input type="password" name='password' className="block w-11/12 h-14 px-4 py-2 mt-2 text-gray-700 bg-white border-2 border-gray-200 rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
        <ul>
            <li>Use 4 or more characters</li>
            <li>One Special Character</li>
            <li>One uppercase character</li>
            <li>One number</li>
            <li>One lowercase character</li>
        </ul>
    </div>
  )
}
