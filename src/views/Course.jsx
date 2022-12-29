import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import CoreBar from "../components/CoreBar";
import CourseHero from "../components/Course/CourseHero";
import CourseBreadCrumb from "../components/Course/CourseBreadCrumb";
import CoreFooter from "../components/CoreFooter";

import coursesData from "../data/_Courses";

function Course() {
const [phaseData, setPhaseData] = useState("")
  const routeParams = useParams();
  console.log(routeParams)
  // Check if routeParams is valid by checking slug in coursesData if not redirect to 404
  const course = coursesData.find((course) => course.slug === routeParams.course);
  const phase = course.phases.find((phase1)=> phase1.slug === routeParams.phase)
  if (!course || !phase) {
    return <Navigate replace to="/404" />;
  }

// console.log(phase)
// console.log(course)

//if phase is not in local storage, then do fetch
//in fetch add data to local storage
useEffect(() => {
  fetch(`https://workers.flatironopensource.ml/course/${phase.key}`)
  .then(res=> res.json())
  .then(data=> setPhaseData(data))
},[])
  return (
    <div>
      <CoreBar />
      <CourseBreadCrumb course={course} phase={phase} phaseData = {phaseData}/>
      <CourseHero course={course} phase={phase} phaseData = {phaseData}/>
      <CoreFooter />
    </div>
  )
}
export default Course;
