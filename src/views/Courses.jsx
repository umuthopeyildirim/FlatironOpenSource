import CoreBar from "../components/CoreBar"
import CoursesHero from "../components/Courses/CoursesHero"
import Lessons from "../components/Courses/Lessons"
import CoreFooter from "../components/CoreFooter"

function Courses() {
  return (
    <div>
      <CoreBar />
      <CoursesHero />
      <div id="lessons">
        <Lessons img="/img/Product-Design-Hero-Image-8.svg" imgAlt="Product Design" title="Product Design" description="The UX / UI product design program at Flatiron School focuses on digital product design — designing digital products such as websites, mobile applications, and computer programs." link="/course/product-design" />
        <Lessons img="/img/SE-Hero-Image-2.svg" imgAlt="Software Engineering" title="Software Engineering" description="Become a software engineer to help businesses develop software, build web apps, and products that will help shape the future of the company." link="/course/software-engineering" />
        <Lessons img="/img/DataScience.svg" imgAlt="Data Science" title="Data Science" description="Become a data scientist to help businesses leverage data, analyze data, and provide data-driven insights so businesses can make informed decisions." link="/course/data-science"/>
      </div>
      <CoreFooter />
    </div>
  )
}

export default Courses;
