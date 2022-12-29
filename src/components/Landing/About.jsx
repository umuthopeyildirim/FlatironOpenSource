import { Hero } from "react-daisyui";

function About(){
    return (
        <Hero>
            <Hero.Overlay />
            <Hero.Content className="flex flex-row md:flex-col text-center">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        About Flatiron School
                    </h1>
                    <br></br> 
                    <p>
                        Flatiron's courses provide an immersive, outcomes-driven curriculum for students looking
                        to launch a career in Software Engineering, Cybersecurity, Data Science, or Product
                        Design. Courses are offered both online and in-person on campuses across the country.
                    </p>
                    <br></br> 
                    <p>
                        Flatiron School is frequently ranked as a top coding bootcamp by industry publications.
                        In addition to student programs, Flatiron also offers targeted education solutions for organizations.
                    </p>
                    <img
                        alt="Why do i need Flatiron School?"
                        src="/img/about.jpg"
                        className="rounded-lg"
                    />
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default About;