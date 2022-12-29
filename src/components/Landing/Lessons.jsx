import { Hero, Card, Button } from "react-daisyui";

function IndivudalLesson({ img, name, description, link }) {
  return (
    <Card bordered className="max-w-xs mt-6">
      <Card.Image
        src={img}
        alt={name}
        className="rounded-t-lg w-72"
      />
      <Card.Body>
        <Card.Title tag="h2">{name}</Card.Title>
        <p>{description}</p>
        <Card.Actions className="justify-end">
          <Button href={link} color="primary">Start Course</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

function Lessons({ coursesData }) {
  return (
    <Hero className="rounded-lg px-10 py-10">
      <div className="flex flex-col lg:flex-row lg:space-x-3 ">
        {coursesData.map((course) => (
          <IndivudalLesson key={course.name} img={course.image} name={course.name} description={course.description} link={course.link} />
        ))}
      </div>
    </Hero>
  );
}

export default Lessons;