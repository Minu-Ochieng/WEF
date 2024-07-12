
import './App.css';

import "./App.css";
import Navbar from "./Navbar";
import Podcast from "./Podcast";
import LandingPage from './Landing-page/Index';
import VideoSection from './Video';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Podcast/>
      <VideoSection/>
    </div>
  );
}

export default App;
