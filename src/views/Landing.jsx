import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/LandingHero";
import Lessons from "../components/Landing/Lessons";
import CoreFooter from "../components/CoreFooter";
import LandingModal from "../components/Landing/LandingModal";

// Datas
import coursesData from "../data/_Courses";


function Landing() {

 

  return (
    <div>
    {
      localStorage.getItem("consent")?
      null:
      <LandingModal/>
    }
      <CoreBar />
      <LandingHero />
      <div id="lessons">
        <Lessons coursesData={coursesData} />
      </div>
      <CoreFooter />
    </div>
  );
}

export default Landing;
