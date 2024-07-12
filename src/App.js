import "./App.css";
import Navbar from "./Navbar";
import Podcast from "./Podcast";
import LandingPage from "./Landing-page/Index";
import VideoSection from "./Videos";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Podcast />
      <VideoSection />
      <Portfolio />
    </div>
  );
}

export default App;
