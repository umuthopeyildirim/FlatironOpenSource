import { Hero, Button } from "react-daisyui";

function LandingHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="text-center md:flex md:shrink-0">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            10 years of shaping tech talent,
            <br></br> They say...
          </h1>
          <p className="py-6">
            Flatiron School has been building tech talent since 2012. Their courses include software engineering, 
            cybersecurity, data science, and product design.<br></br> They say, so here all of them for free!
          </p>
          <Button href="/#lessons" color="accent">Check out their lessons</Button>
          <br></br>
          <span>For free ;)</span>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default LandingHero;