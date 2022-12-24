import { Hero } from "react-daisyui";



function CourseHero() {
  return(
    <Hero>
    <Hero.Overlay />
    <Hero.Content className="text-center md:flex md:shrink-0">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Course</h1>
        <p className="py-6">
              Course HEROOOOO      
        </p>
      </div>
    </Hero.Content>
  </Hero>
  )
}

export default CourseHero;