// Logout Component handles the click of Logout button at the top right corner of the screen

import React from 'react'
import AuthenticationService from '../service/AuthenticationService'
function LogoutComponent() {
    AuthenticationService.logout();
    return (
        <>
            <h1>You are logged out</h1>
            <div className="container">
                Thank You for Using Our Application.
                </div>
        </>
    )

}
export default LogoutComponent