import { useState } from "react";
import { Button, ButtonGroup } from "react-daisyui";
import { BsGithub } from "react-icons/bs";
import data from "../../data/_Data";

function CourseHero({ course, phase, phaseData }) {
  const [courseModule, setCourseModule] = useState(null)

  console.log(phaseData)
  let testArray = phaseData.modules.map((mod)=>
    <Button onClick={()=>setCourseModule(mod.name)} key={mod.name}>{mod.name}</Button>
  )
  let courseModuleArray = phaseData.modules.find((mod)=> mod.name === courseModule)

  return(
    <div className="flex md:flex-row flex-col mx-5">
      <ButtonGroup className="md:w-60 w-full" vertical>
        {course.phases.map((phase) => (
          <Button key={phase.name} size="sm" href={phase.link}>{phase.name}</Button>
        ))}
      </ButtonGroup>
      <div className="flex flex-col w-full md:ml-5 mt-2.5">
        <div className="flex md:flex-row flex-row justify-between">
          <h1 className="text-3xl font-bold">{course.name}: {phase.name}</h1>
          <Button startIcon={BsGithub} href={course.link} size="md">Fork Github</Button>
        </div>
        <div className="flex md:flex-row flex-col justify-between">
          <ButtonGroup className="md:w-100 w-full md:ml-5 mt-2.5" vertical>
            {testArray}
          </ButtonGroup>
          <ButtonGroup className="md:w-100 w-full md:ml-5 mt-2.5" vertical>
            {courseModule!==null?courseModuleArray.name: null}
            {courseModule!==null?courseModuleArray.items.map(data=><Button href={data.content}>{data.title}</Button>):null}
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default CourseHero;