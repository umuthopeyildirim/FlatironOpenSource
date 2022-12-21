import CoreBar from "../components/CoreBar"
import LandingHero from "../components/Landing/LandingHero"
import Lessons from "../components/Landing/Lessons"
import About from "../components/Landing/About"
import Salaries from "../components/Landing/Salaries"
import CoreFooter from "../components/CoreFooter"

function App() {
  return (
    <div>
      <CoreBar />
      <LandingHero />
      <div id="lessons">
        <Lessons />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="salaries">
        <Salaries img="/img/1-SE-Career.svg" imgAlt="Front End Developer" money="$96,637*"  title="Front End Developer" description="Front End Developer (can also be called Front End Engineer) is responsible for developing new user-facing features while building reusable codes and optimizing page load times within web/mobile applications." />
        <Salaries img="/img/2-SE-Career.svg" imgAlt="Back End Developer" money="$102,750*" title="Back End Developer" description="Back End Developer (can also be called Back End Engineer) is responsible for server-side web or mobile application logic and integration of user-facing features through APIs." />
        <Salaries img="/img/3-SE-Career.svg" imgAlt="Full Stack Developer" money="$103,891*" title="Full Stack Developer" description="Full Stack Developers (also called Full Stack Engineers) use front-end and back-end programming languages to design, develop, and maintain full-fledged and functioning platforms with databases and servers." />
      </div>
      <CoreFooter />
    </div>
  )
}

export default App
