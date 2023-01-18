import CoreBar from "../components/CoreBar";
import LandingHero from "../components/Landing/LandingHero";
import Lessons from "../components/Landing/Lessons";
import CoreFooter from "../components/CoreFooter";

// Datas
import coursesData from "../data/_Courses";

import { useState, useEffect } from "react";



function Landing() {

//Google Analytics Alert Impleenting local storage
//if the alert is saved in local storage, then consent for the current user already occurred so the alert won't pop up again
 

function setAlerts(){
  alert("Please know that we use Google Analytics and cookies to track user traffic for this site. By clicking ok, you consent to flatironopensource.com's Cookie and Privacy policies.")
  localStorage.setItem("alertOn", false)
}


  return (
    <div>
     {!localStorage.getItem("alertOn")? setAlerts(): null}
    
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
