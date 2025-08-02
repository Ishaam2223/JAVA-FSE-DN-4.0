import React from 'react';

const CourseDetails = ({ courses }) => {
  // Method 10: Variable-based conditional rendering
  const hasCourses = courses && courses.length > 0;
  
  // Method 11: Conditional content based on data availability
  const courseList = hasCourses && courses.map((course) => (
    <div key={course.id} className="course-item">
      {/* Method 12: Individual field conditional rendering */}
      {course.name && <h3>{course.name}</h3>}
      {course.date && <p>{course.date}</p>}
    </div>
  ));

  return (
    <div className="section">
      <h1>Course Details</h1>
      
      {/* Method 13: Multiple conditional rendering approaches combined */}
      {hasCourses ? (
        courseList
      ) : (
        <div>
          <p>No courses available</p>
          {/* Method 14: Conditional rendering with inline styles */}
          <p style={{ display: !hasCourses ? 'block' : 'none', color: 'gray' }}>
            Please check back later for course updates.
          </p>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;