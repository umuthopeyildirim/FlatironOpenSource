import CoreBar from "../components/CoreBar"
import LandingHero from "../components/Landing/LandingHero"
import Lessons from "../components/Landing/Lessons"
import About from "../components/Landing/About"
import Salaries from "../components/Landing/Salaries"
import CoreFooter from "../components/CoreFooter"

// Datas
import coursesData from "../data/_Courses"
import salariesData from "../data/_Salaries"

function Landing() {

  return (
    <div>
      <CoreBar />
      <LandingHero />
      <div id="lessons">
        <Lessons coursesData={coursesData} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="salaries">
        {salariesData.map((salary) => (
          <Salaries img={salary.img} imgAlt={salary.imgAlt} money={salary.money} title={salary.title} description={salary.description} />
        ))}
      </div>
      <CoreFooter />
    </div>
  )
}

export default Landing;
