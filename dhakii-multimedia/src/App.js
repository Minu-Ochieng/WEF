
import './App.css';
import Navbar from './Navbar';
import LandingPage from './Landing-page/Index';
import Podcast from './Podcast';
import VideoSection from './Video/index'
import Blog from './Blogs';
import Portfolio from './Portfolio';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <LandingPage/>
     <Podcast/>
     <VideoSection/>
     <Blog/>
     <Portfolio/>
   
    </div>
  );
}

export default App;
