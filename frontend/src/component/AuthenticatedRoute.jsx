/**
 * We would want certain routes like /courses to be accessed only by authenticated users.
 *
 * AuthenticationRoute helps us implement this.
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';
function AuthenticatedRoute(props) {

    if (AuthenticationService.isUserLoggedIn()) {
        return <Route {...props} />
    } else {
        return <Redirect to="/login" />
    }
}
export default AuthenticatedRoute