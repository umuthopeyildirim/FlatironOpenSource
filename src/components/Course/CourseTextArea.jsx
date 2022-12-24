import { Hero , Textarea} from "react-daisyui";



function CourseTextArea({course}) {
  return(
    <Textarea>
   {course.course}
  </Textarea>
  )
}

export default CourseTextArea;