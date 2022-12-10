import React from 'react'

export default function PasswordInput() {
  return (
    <div>
        <p>Password</p>
        <input type="password" name='password' />
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
