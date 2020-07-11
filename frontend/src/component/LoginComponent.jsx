// Login Component representing the login screen.
import React from 'react';
import AuthenticationService from '../service/AuthenticationService';
import { useState } from 'react';
export default function LoginComponent(props) {
    const [state, setState] = useState({
        username: 'hch0821',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const loginClicked = () => {
        AuthenticationService.executeBasicAuthenticationService(state.username, state.password)
            .then(() => {
                debugger;
                AuthenticationService.registerSuccessfulLogin(state.username, state.password);
                props.history.push('/courses')
            }).catch(e => {
                console.log(e);
                setState(
                    {
                        ...state,
                        showSuccessMessage: false,
                        hasLoginFailed: true
                    }
                );
            });
    };

    return (
        <div>
            <h1>Login</h1>
            <div className="container">
                {state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {state.showSuccessMessage && <div>Login successful</div>}
                User Name: <input type="text" name="username" value={state.username} onChange={handleChange}></input>
                Password: <input type="password" name="password" value={state.password} onChange={handleChange}></input>
                <button className="btn btn-success" onClick={loginClicked}>Login</button>
            </div>
        </div>
    );
}
