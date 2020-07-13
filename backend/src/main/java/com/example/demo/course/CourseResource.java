package com.example.demo.course;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.demo.jwt.JwtUserDetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

// Rest Resource exposing all the service methods discussed above.
@RestController
public class CourseResource {
    @Autowired
    private CoursesHardcodedService courseManagementService;

    // 다른 컨트롤러에서도 AuthenticationPrincipal 어노테이션으로 유저 정보를 가져올 수 있다.
    @GetMapping("/instructors/{username}/courses")
    public ResponseEntity<?> getAllCourses(@PathVariable String username,
            @AuthenticationPrincipal JwtUserDetails userDetails) {
        Map<String, Object> result = new HashMap<>();
        if (userDetails == null) {
            result.put("message", "Authentication is not correct");
            return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
        } else {

            List<Course> courses = courseManagementService.findAll();
            result.put("courses", courses);
            result.put("user", userDetails);
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}