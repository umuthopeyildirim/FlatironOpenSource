import { Textarea} from "react-daisyui";

function CourseTextArea({course}) {
  return(
    <Textarea>
      {course.name}
    </Textarea>
  );
}

export default CourseTextArea;