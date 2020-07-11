import axios from 'axios';
const INSTRUCTOR = 'hch0821';
const PASSWORD = '1234';
const INSTRUCTOR_API_URL = `/instructors/${INSTRUCTOR}`;

class CourseDataService {
    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}/courses`,
            // { headers: { authorization: 'Basic ' + window.btoa(INSTRUCTOR + ":" + PASSWORD) } }
        );
    }
}
export default new CourseDataService();