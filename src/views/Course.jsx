import CourseHero from "../components/Course/CourseHero";
import CourseTextArea from "../components/Course/CourseTextArea";
import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";
import { useParams } from "react-router-dom";

function Course() {
  const routeParams = useParams();
  console.log(routeParams)
  return (
    <div>
   <CoreBar/>
   <CourseHero course = {routeParams}/>
   <CourseTextArea course = {routeParams}/>
   <CoreFooter/>
    </div>
  )
}

export default Course;
