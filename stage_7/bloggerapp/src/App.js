import React from 'react';
import BlogDetails from './Components/BlogDetails';
import BookDetails from './Components/BookDetails';
import CourseDetails from './Components/CourseDetails';
import ContentDisplay from './Components/ContentDisplay';

function App() {
  return (
    <div className="App">
      <h2>📘 Welcome to the Knowledge Hub</h2>
      
      <BlogDetails />
      <BookDetails />
      <CourseDetails />
      <ContentDisplay />
    </div>
  );
}

export default App;