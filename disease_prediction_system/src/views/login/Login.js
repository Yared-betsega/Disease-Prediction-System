import React from 'react'
import { Container } from '@material-ui/core'
import {
    Link
} from "react-router-dom"
import Input from '../../components/input/Input'
import SubmitButton from '../../components/SubmitButton/SubmitButton'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import "./login.css"
export default function Login() {
    return (
        <Container className='outer'>
            <div>
                <div>
                    <h1>Welcome to Disease Prediction System</h1>
                    <p>New to diseases prediction system?
                        <Link to="/signup">  Sign up</Link>
                    </p>
                </div>
                <div>
                    <Input type="text" label="Email" />
                    <PasswordInput />
                    <SubmitButton />
                </div>
                <div>
                    <p>New to diseases prediction system?
                        <Link to="/signup">  Sign up</Link>
                    </p>
                </div>
            </div>
            <div>
                <img src="" alt="" />
            </div>

        </Container>
    )
}
