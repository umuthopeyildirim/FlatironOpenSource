import { Hero, Button } from "react-daisyui"

function LandingHero() {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Your last password manager</h1>
          <p className="py-6">
            The easiest and safest way to share logins, passwords, credit cards and more, with the people that matter most. 
            Go ahead, forget your passwords – MyPass Manager remembers them all for you.
          </p>
          <Button href="pricing" color="accent">Try MyPass for 14 days</Button>
          <br></br>
          <span>No credit card is required</span>
        </div>
        <img style={{left:"calc(50% + 80px)"}} src="https://flatironschool.com/wp-content/uploads/2021/11/SE-Hero-Image-2.svg" alt="Hero" className="object-cover h-96 rounded-xl mt-10" />

      </Hero.Content>
    </Hero>
  )
}

export default LandingHero;