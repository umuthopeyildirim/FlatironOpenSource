import { Hero } from "react-daisyui";

function Salaries({ img, imgAlt, money ,title, description }) {
  return (
    <Hero className="rounded-lg px-10 py-10">
        <Hero.Content className="flex flex-col md:flex-row rounded-lg">
            <img
                alt={imgAlt}
                src={img}
                className="max-w-sm rounded-lg"
            />
            <div>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="pt-6">Average Salaries in 2022: <p className="font-bold">{money}</p></p>
                <p className="py-6">{description}</p>
            </div>
        </Hero.Content>
    </Hero>
  );
}

export default Salaries;