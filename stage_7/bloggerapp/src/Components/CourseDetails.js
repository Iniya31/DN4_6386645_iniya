import React from 'react';

function CourseItem({ name }) {
  return <li>{name}</li>;
}

function CourseDetails() {
  
  const courses = [
    { id: 101, name: "React Essentials" },
    { id: 102, name: "Spring Boot Deep Dive" },
    { id: 103, name: "Microservices Masterclass" }
  ];

  return (
    <div>
      <h3>📚 Course List</h3>
      <ul>
        {courses.map(course => (
          <CourseItem key={course.id} name={course.name} />
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;