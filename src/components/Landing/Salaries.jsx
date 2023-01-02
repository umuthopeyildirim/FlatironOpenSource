import { Hero } from "react-daisyui";

function Salaries({ img, imgAlt, money ,title, description }) {
  return (
    <>                
    <h1 className="text-5xl font-bold px-6">
      Salary Information for Careers in Tech
    </h1>
    <Hero>
        <Hero.Content className="rounded-lg px-10 py-10">
          <div className="flex flex-col md:flex-row	items-center">
            <img
                alt={imgAlt}
                src={img}
                className="rounded-lg"
            />
            <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="pt-6">Average Salaries in 2022: <span className="font-bold">{money}</span></p>
                <p className="py-6">{description}</p>
            </div>
          </div>
        </Hero.Content>
    </Hero>
    </>
  );
}

export default Salaries;