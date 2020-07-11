// React Component representing the high-level structure of the application. Routing is defined in this file.
import React from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import MenuComponent from './MenuComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
function InstructorApp() {
    return (
        <>
            <Router>
                <>
                    <MenuComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} />
                    </Switch>
                </>
            </Router>
        </>
    );
}

export default InstructorApp;