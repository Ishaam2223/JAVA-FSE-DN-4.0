import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';


const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 }
];

const courses = [
  { id: 1, name: 'Angular', date: '3/8/2025' },
  { id: 2, name: 'React', date: '6/5/2025' }
];

const blogContent = {
  title: 'React Learning',
  author: 'Stephen Biz',
  welcome: 'Welcome to learning React!',
  section: 'Installation',
  instructor: 'Schewzdenier',
  description: 'You can install React from npm.'
};

const App = () => {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <CourseDetails courses={courses} />
        <BookDetails books={books} />
        <BlogDetails content={blogContent} />
      </div>
    </div>
  );
};

export default App;