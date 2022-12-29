import { useParams, Navigate } from "react-router-dom";

import CoreBar from "../components/CoreBar";
import CourseTextArea from "../components/Course/CourseTextArea";
import CourseBreadCrumb from "../components/Course/CourseBreadCrumb";
import CoreFooter from "../components/CoreFooter";

import coursesData from "../data/_Courses";

function Course() {
  const routeParams = useParams();
  console.log(routeParams)
  // Check if routeParams is valid by checking slug in coursesData if not redirect to 404
  const course = coursesData.find((course) => course.slug === routeParams.course);
  const phase = course.phases.find((phase1)=> phase1.slug === routeParams.phase)
  if (!course || !phase) {
    return <Navigate replace to="/404" />;
  }


  fetch('https://workers.flatironopensource.ml/course/se-phase4')
  .then(res=>console.log(res.json()))

  return (
    <div>
      <CoreBar />
      <CourseBreadCrumb course={course} phase={phase} />
      <CourseTextArea course={course} phase={phase} />
      <CoreFooter />
    </div>
  )
}
export default Course;
