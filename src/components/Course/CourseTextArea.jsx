import { Textarea, Divider, Button} from "react-daisyui";

function CourseTextArea({course, phase}) {
 


  return(
    <div className="flex flex-row w-full">
    <div className="flex-grow card h-400  rounded-box place-items-center outline">
    {course.phases.map((phase) => (
          <Button key= {phase.name} href={phase.link}>{phase.name} </Button>
        ))}
    </div>
    <Divider> </Divider>
    <div className="w-5/6 flex-grow h-400 card rounded-box place-items-center outline">
    {phase}
    </div>
  
  </div>
  );
}

export default CourseTextArea;