import { useParams, Navigate } from "react-router-dom";

import CoreBar from "../components/CoreBar"
import CoursesHero from "../components/Courses/CoursesHero"
import Lessons from "../components/Courses/Lessons"
import CoreFooter from "../components/CoreFooter"

import coursesData from "../data/_Courses";

function Courses() {
  const routeParams = useParams();

  // Check if routeParams is valid by checking slug in coursesData if not redirect to 404
  const course = coursesData.find((course) => course.slug === routeParams.course);
  if (!course) {
    return <Navigate replace to="/404" />;
  }

  return (
    <div>
      <CoreBar />
      <CoursesHero course={course}/>
      <div id="lessons">
        {course.phases.map((phase) => (
          <Lessons img={phase.image} imgAlt={phase.name} title={phase.name} description={phase.description} link={phase.link} />
        ))}
      </div>
      <CoreFooter />
    </div>
  )
}

export default Courses;
