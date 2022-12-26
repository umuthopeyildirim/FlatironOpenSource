import { Hero } from "react-daisyui";

function CoursesHero({ course }) {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="text-center md:flex md:shrink-0">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{course.name} Phases</h1>
          <p className="py-6">
            We have a lot of courses for you to learn from, don't forget nothing is free in this world. 
            If you are having trouble with the courses don't give up. 
            You can always ask for help in our discord server.
          </p>
        </div>
      </Hero.Content>
    </Hero>
  )
}

export default CoursesHero;