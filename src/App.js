import BlogPage from './Blogs_Articles/Blogs';
import React from 'react'
import Navbar from './Navbar'
import LandingPage from './Landing-page'
import Podcast from './Podcast'
import VideoSection from './Video'





function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Podcast/>
      <VideoSection/>
      <BlogPage/>
    </div>
  )
};

export default App;