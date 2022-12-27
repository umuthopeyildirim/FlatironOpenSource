import { Breadcrumbs} from "react-daisyui";

function CourseBreadCrumb({course, phase}){

    return(
        <Breadcrumbs className="my-3 mx-6">
            <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
            <Breadcrumbs.Item href={course.link}>{course.name}</Breadcrumbs.Item>
            <Breadcrumbs.Item href={phase.link}>{phase.name}</Breadcrumbs.Item>
        </Breadcrumbs>
    );
}

export default CourseBreadCrumb