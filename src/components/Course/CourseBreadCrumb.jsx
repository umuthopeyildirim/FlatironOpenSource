import { Breadcrumbs} from "react-daisyui";

function CourseBreadCrumb({course, phase}){
    const phaseLink = course.phases.find((phase1)=> phase1.slug === phase)
    
    return(
        <Breadcrumbs className="my-3 mx-6">
            <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href={course.link}>{course.name}</Breadcrumbs.Item>
            <Breadcrumbs.Item href={phaseLink.link}>{phaseLink.name}</Breadcrumbs.Item>
        </Breadcrumbs>
    );
}

export default CourseBreadCrumb