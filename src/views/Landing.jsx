import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/LandingHero";
import Lessons from "../components/Landing/Lessons";
import CoreFooter from "../components/CoreFooter";

// Datas
import coursesData from "../data/_Courses";

import { useState, useEffect } from "react";



function Landing() {

//Google Analytics Alert 
const [alertOn, setAlertOn] = useState(true)

function setAlerts(){
  alert("Please know that we use Google Analytics and cookies to track user traffic for this site. By clicking ok, you consent to allow this to occur.")
  setAlertOn(!alertOn)
}


  return (
    <div>
     {alertOn? setAlerts(): null}
    
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
