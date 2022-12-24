import { Hero } from "react-daisyui";

function CourseHero({course}) {
  return(
    <Hero>
    <Hero.Overlay />
    <Hero.Content className="text-center md:flex md:shrink-0">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">{course.course}</h1>
        <p className="py-6">
             Class: {course.course}
        </p>
      </div>
    </Hero.Content>
  </Hero>
  )
}

export default CourseHero;