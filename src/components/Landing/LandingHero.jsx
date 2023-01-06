import { Hero, Button } from "react-daisyui";

function LandingHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="flex flex-col md:flex-row text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Flatiron School Open Source
            <br></br> 
          </h1>
          <p className="py-6">
            Flatiron School Open Source is a hub for bootcamp graduates to have efficient access to course modules, lessons, and data. Use the app as a refresher, learn something new, or get ready for interviews. 
           <br></br> 
          </p>
          <p>
          Software Engineering, Data Science, Product Design, and Data Structures & Algorithms are curently available.
            Cybersecurity will be released in the near future.
            </p>
            <br></br>
            <p>
          <Button href="/#lessons" color="accent">Check out their lessons</Button>
          </p>
          <br></br>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default LandingHero;