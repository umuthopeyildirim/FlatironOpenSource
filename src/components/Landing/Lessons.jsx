import { Hero, Card, Button } from "react-daisyui";

function IndivudalLesson({ img, title, description, link}) {
  return (
    <Card bordered className="max-w-xs mt-6">
      <Card.Image
        src={img}
        alt={title}
      />
      <Card.Body>
        <Card.Title tag="h2">{title}</Card.Title>
        <p>{description}</p>
        <Card.Actions className="justify-end">
          <Button href={link} color="primary">Check it out</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
}

function Lessons() {
  return (
    <Hero className="rounded-lg px-10 py-10">
      <div className="flex flex-col lg:flex-row lg:space-x-3 ">
        <IndivudalLesson img="/img/Product-Design-Hero-Image-8.svg" title="Product Design" description="The UX / UI product design program at Flatiron School focuses on digital product design — designing digital products such as websites, mobile applications, and computer programs." link="/courses#product-design" />
        <IndivudalLesson img="/img/SE-Hero-Image-2.svg" title="Software Engineering" description="Become a software engineer to help businesses develop software, build web apps, and products that will help shape the future of the company." link="/courses#software-engineering" />
        <IndivudalLesson img="/img/DataScience.svg" title="Data Science" description="Become a data scientist to help businesses leverage data, analyze data, and provide data-driven insights so businesses can make informed decisions." link="/courses#data-science" />
        <IndivudalLesson img="/img/4-SE-Career.svg" title="Data Structures and Algorithms" description="An algorithm is just a procedure that solves a problem. If you're wondering if that's any different from the work you've already been doing, we've got good news: It's not!" link="/courses#data-structures-and-algorithms" />
      </div>
    </Hero>
  );
}

export default Lessons;