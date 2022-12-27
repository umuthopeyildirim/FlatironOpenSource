import { Button, ButtonGroup} from "react-daisyui";
import { BsGithub } from "react-icons/bs";
import data from "../../data/_Data";
import { useState, useEffect } from "react";

function CourseTextArea({course, phase}) {
  const [courseModule, setCourseModule] = useState(null)

  // fetch("https://workers.flatironopensource.ml/course/se-phase1")
  // .then(res=> console.log(res))
let testArray = data[0].modules.map((mod)=><Button onClick={()=>setCourseModule(mod.name)} key={mod.name}>{mod.name} </Button>)
let courseModuleArray = data[0].modules.find((mod)=> mod.name === courseModule)
  return(
    <div className="flex md:flex-row flex-col mx-5">
      <ButtonGroup className="md:w-60 w-full" vertical>
        {/* Lessons go hereeeee */}
        {course.phases.map((phase) => (
          <Button key={phase.name} size="sm" href={phase.link}>{phase.name}</Button>
        ))}
      </ButtonGroup>
      <div className="flex flex-col w-full md:ml-5 mt-2.5">
        <div className="flex flex-row justify-between">
          {/* Lesson name goes hereeee */}
          <h1 className="text-3xl font-bold">{course.name}: {phase.name}</h1>
          <Button startIcon={BsGithub} href={course.link} size="md">Fork Github</Button>
        </div>
        <div >
          {/* Markdown content hereeee */}
          <ButtonGroup className="md:w-100" vertical>
          {testArray}
          </ButtonGroup>
          <ButtonGroup className="md:w-100 md:ml-5 mt-2.5" vertical>
          {courseModule!==null?courseModuleArray.name: null}
          {courseModule!==null?courseModuleArray.items.map(data=><Button>{data.title}</Button>):null}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default CourseTextArea;