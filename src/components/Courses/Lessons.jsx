import { Hero, Button } from "react-daisyui";

function Lessons({ img, imgAlt ,title, description, link }) {
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
                    <p className="py-6">{description}</p>
                    <Button color="primary" size="lg" className="rounded-lg" href={link}>
                        Start Course
                    </Button>
                </div>
            </Hero.Content>
        </Hero>
    );
}

export default Lessons;