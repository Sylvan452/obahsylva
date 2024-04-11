import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="mt-16">Blog Articles</h1>
        <div className="text-center">COMING SOON</div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
