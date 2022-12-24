import { useParams } from "react-router-dom";

import CourseHero from "../components/Course/CourseHero";
import CourseTextArea from "../components/Course/CourseTextArea";
import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";

function Course() {
  const routeParams = useParams();
  return (
    <div>
      <CoreBar />
      <CourseHero course={routeParams} />
      <CourseTextArea course={routeParams} />
      <CoreFooter />
    </div>
  )
}

export default Course;
