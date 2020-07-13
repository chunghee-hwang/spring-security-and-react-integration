/**
 *  React Component for listing all the courses for an instructor.
 */
import React from 'react';
import CourseDataService from '../service/CourseDataService';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
export default function ListCoursesComponent(props) {
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState(null);
    const refreshCourses = useCallback(() => {
        CourseDataService.retrieveAllCourses('hch0821').then(
            response => {
                console.log(response);
                setCourses(response.data.courses);
                setUser(response.data.user);
            }
        ).catch(error => {
            alert('error: ' + error);
            props.history.push('/login');
        });

    }, [props.history]);
    useEffect(() => {
        refreshCourses();
    }, [refreshCourses]);

    return (
        <div className="container">
            <h3>All courses</h3>
            <h5>Username: {user && user.username}</h5>
            <h5>Nickname: {user && user.nickname}</h5>
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses.map(course =>
                                <tr key={course.id}>
                                    <td>{course.id}</td>
                                    <td>{course.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}