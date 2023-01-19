import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import CoreBar from "../components/CoreBar";
import CourseHero from "../components/Course/CourseHero";
import CourseBreadCrumb from "../components/Course/CourseBreadCrumb";
import CoreFooter from "../components/CoreFooter";

import coursesData from "../data/_Courses";

function Course() {
  const routeParams = useParams();
  const [phaseData, setPhaseData] = useState(null)
  // Check if routeParams is valid by checking slug in coursesData if not redirect to 404
  const course = coursesData.find((course) => course.slug === routeParams.course);
  const phase = course.phases.find((phase1)=> phase1.slug === routeParams.phase)
  if (!course || !phase) {
    return <Navigate replace to="/404" />;
  }

  //if phase is not in local storage, then do fetch
  //in fetch add data to local storage
  useEffect(() => {
    if(localStorage.getItem(phase.key)){
      setPhaseData(JSON.parse(localStorage.getItem(phase.key)))
    }
    else{
      // fetch json from API
      fetch(`https://workers.flatironopensource.com/course/${phase.key}`)
      .then((response) => response.json())
      .then((data) => {
        setPhaseData(data)
        localStorage.setItem(phase.key, JSON.stringify(data))
      })
    }
  },[])

  return (
    <div>
      <CoreBar />
      <CourseBreadCrumb course={course} phase={phase} />
      {phaseData && <CourseHero course={course} phase={phase} phaseData={phaseData}/>}
      <CoreFooter />
    </div>
  );
}
export default Course;
