import "./FirstSection.css";
import rectangleImg from "../../assets/Rectangle.png";
import landingPageCards from "../../assets/LandingPageCards.png";
import dashboardexample from "../../assets/test3.png"
import { Link } from "react-router-dom";

function LandingSection() {
  return (
    <div className="gap">
      {/* <img className="rectangle" src={rectangleImg} /> */}
      
      <div className="intro">
        <h1 id="title">Track your applications</h1>
        <p id="subhead">
        Our dashboard helps you keep track of all your technical job
          applications in one place. Stay organized and on top of your job
          search with Appli.
        </p>
        <Link to="/Login" className="link">
          <button className="sign-up-button">Get Started</button>
        </Link>
        
      </div>
      <img className="example" src={dashboardexample} />
    </div>
  );
}

export default LandingSection;
