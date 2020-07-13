import axios from 'axios';
const INSTRUCTOR_API_URL = `/instructors/`;

class CourseDataService {
    retrieveAllCourses(name) {
        return axios.get(`${INSTRUCTOR_API_URL}${name}/courses`,
        );
    }
}
export default new CourseDataService();