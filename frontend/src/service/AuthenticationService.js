// Service handling all details related to JWT and Basic Authentication.
import axios from 'axios';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
class AuthenticationService {
    executeBasicAuthenticationService(username, password) {
        return axios.get('/basicauth',
            { headers: { authorization: this.createBasicAuthToken(username, password) } }
        );
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ":" + password);
    }

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
    }

    // sets up the axios interceptor to add the authorization token on every subsequent REST API call. config.headers.authorization = token
    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            config => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config;
            }
        )
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) return false;
        return true;
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
}

export default new AuthenticationService();