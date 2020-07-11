package com.example.demo.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

/**
 * Business Logic for the application. CoursesHardcodedService exposes a few
 * methods we would invoke from our Rest Resource.
 */
@Service
public class CoursesHardcodedService {
    private static List<Course> courses = new ArrayList<>();
    private static long idCounter = 0;

    static {
        courses.add(new Course(++idCounter, "hch0821", "Learn Full stack with Spring Boot1"));
        courses.add(new Course(++idCounter, "hch0821", "Learn Full stack with Spring Boot2"));
        courses.add(new Course(++idCounter, "hch0821", "Learn Full stack with Spring Boot3"));
        courses.add(new Course(++idCounter, "hch0821", "Learn Full stack with Spring Boot4"));
    }

    public List<Course> findAll() {
        return courses;
    }
}