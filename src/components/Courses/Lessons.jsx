import { Hero, Button } from "react-daisyui";

function Lessons({ img, imgAlt, title, description, link }) {
  return (
    <Hero>
      <Hero.Content className="flex flex-col md:flex-row rounded-lg">
        <img alt={imgAlt} src={img} className="md:max-w-md rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>
          <Button
            color="primary"
            size="lg"
            className="rounded-lg"
            tag="a"
            href={link}
          >
            Start Course
          </Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default Lessons;
