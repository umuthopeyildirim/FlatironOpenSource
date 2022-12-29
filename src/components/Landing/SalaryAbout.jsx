import { Hero } from "react-daisyui";

function SalaryAbout(){
    return (
        <Hero className="rounded-lg px-10 py-10">
        <Hero.Content className="flex flex-col md:flex-row rounded-lg">
        <h1 className="text-5xl font-bold">
            Salary Information for Careers in Tech
        </h1>
        </Hero.Content>
        </Hero>
    )
}

export default SalaryAbout;