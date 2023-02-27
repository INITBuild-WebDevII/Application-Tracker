import "./Home.css";
import Navbar from "../../components/Navbar";
import LandingSection from "./LandingSection";
import FirstSection from "./FirstSection";

function Home() {
  return (
    <div className="main">
      <Navbar />
      <div className="landing-section">
        <LandingSection />
      </div>
      <div className="first-section">
        <FirstSection />
      </div>
      <div className="section">
        <h1>Find Jobs</h1>
        <h1>Resources</h1>
      </div>
      <div className="section">
        <h1>What Our Clients Say About Us</h1>
      </div>
      <div className="section">
        <h1>Hey</h1>
      </div>
    </div>
  );
}

export default Home;
