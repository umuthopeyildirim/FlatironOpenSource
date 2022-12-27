import { Button, ButtonGroup} from "react-daisyui";
import { BsGithub } from "react-icons/bs";

function CourseTextArea({course, phase}) {
  return(
    <div className="flex md:flex-row flex-col mx-5">
      <ButtonGroup className="md:w-60 w-full" vertical>
        {course.phases.map((phase) => (
          <Button key={phase.name} href={phase.link}>{phase.name}</Button>
        ))}
      </ButtonGroup>
      <div className="flex flex-col w-full md:ml-5 mt-2.5">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold">{course.name}: {phase.name}</h1>
          <Button startIcon={BsGithub} href={course.link} size="md">Fork Github</Button>
        </div>
        <div className="mt-2">
          {course.description}
        </div>
      </div>
    </div>
  );
}

export default CourseTextArea;