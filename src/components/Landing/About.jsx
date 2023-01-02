import { Hero } from "react-daisyui";

function About(){
    return (
        <Hero>
            <Hero.Content className="rounded-lg px-10 py-10">
                <div className="flex flex-col text-center">
                    <h1 className="text-5xl font-bold">
                        About Flatiron School
                    </h1>
                    <p className="py-6">
                        Flatiron's courses provide an immersive, outcomes-driven curriculum for students looking
                        to launch a career in Software Engineering, Cybersecurity, Data Science, or Product
                        Design. Courses are offered both online and in-person on campuses across the country.
                    </p>
                    <p>
                        Flatiron School is frequently ranked as a top coding bootcamp by industry publications.
                        In addition to student programs, Flatiron also offers targeted education solutions for organizations.
                    </p>
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default About;