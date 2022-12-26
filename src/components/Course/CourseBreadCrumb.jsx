import { Breadcrumbs} from "react-daisyui";



function CourseBreadCrumb({course, phase}){
const phaseLink = course.phases.find((phase1)=> phase1.slug===phase)
console.log(phaseLink.link)
console.log(phase)
    return(
    <Breadcrumbs >
         <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href={course.link}>{course.name}</Breadcrumbs.Item>
      <Breadcrumbs.Item href={phaseLink.link}>{phase}</Breadcrumbs.Item>
  </Breadcrumbs>
    )

}


export default CourseBreadCrumb