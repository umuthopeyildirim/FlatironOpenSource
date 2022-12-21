import CoreBar from "../components/CoreBar"
import LandingHero from "../components/Landing/LandingHero"
import Lessons from "../components/Landing/Lessons"
import About from "../components/Landing/About"
import OurMission from "../components/Landing/OurMission"
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
      <div id="our-mission">
        <OurMission img="https://flatironschool.com/wp-content/uploads/2021/11/1-SE-Career.svg" imgAlt="" title="Demo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        <OurMission img="https://flatironschool.com/wp-content/uploads/2021/11/2-SE-Career.svg" imgAlt="" title="Demo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        <OurMission img="https://flatironschool.com/wp-content/uploads/2021/11/3-SE-Career.svg" imgAlt="" title="Demo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
      </div>
      <CoreFooter />
    </div>
  )
}

export default App
