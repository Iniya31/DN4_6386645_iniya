import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function ContentDisplay() {
  const [type, setType] = useState('book');

  // 1. If/Else rendering
  function renderContentIfElse() {
    if (type === 'book') return <BookDetails />;
    else if (type === 'blog') return <BlogDetails />;
    else return <CourseDetails />;
  }

  // 2. Element variables
  let display;
  if (type === 'book') display = <BookDetails />;
  else if (type === 'blog') display = <BlogDetails />;
  else display = <CourseDetails />;

  // 3. Ternary operator
  const ternaryContent = type === 'book' ? <BookDetails /> : <BlogDetails />;

  // 4. Logical AND (&&)
  const showCourse = type === 'course' && <CourseDetails />;

  // 5. switch-case (using helper)
  function renderSwitch() {
    switch (type) {
      case 'book': return <BookDetails />;
      case 'blog': return <BlogDetails />;
      case 'course': return <CourseDetails />;
      default: return null;
    }
  }

  return (
    <div>
      <h2>🎯 Blogger Dashboard</h2>

      <button onClick={() => setType('book')}>Show Books</button>
      <button onClick={() => setType('blog')}>Show Blogs</button>
      <button onClick={() => setType('course')}>Show Courses</button>

      <hr />

      <h4>🔍 If/Else:</h4> {renderContentIfElse()}

      <h4>🔍 Element Variable:</h4> {display}

      <h4>🔍 Ternary:</h4> {ternaryContent}

      <h4>🔍 Logical AND:</h4> {showCourse}

      <h4>🔍 Switch Case:</h4> {renderSwitch()}
    </div>
  );
}

export default ContentDisplay;