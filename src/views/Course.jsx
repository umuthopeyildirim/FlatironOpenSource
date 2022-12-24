import CoursesHero from "../components/Courses/CoursesHero";
import CourseTextArea from "../components/Course/CourseTextArea";
import CoreBar from "../components/CoreBar";
import CoreFooter from "../components/CoreFooter";

function Course() {
  return (
    <div>
   <CoreBar/>
   <CoursesHero/>
   <CourseTextArea/>
   <CoreFooter/>
    </div>
  )
}

export default Course;
