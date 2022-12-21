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
        <Hero.Content className="rounded-lg">
          <div className="flex flex-col md:flex-row md:space-x-3 ">
            <IndivudalLesson img="https://flatironschool.com/wp-content/uploads/2021/11/Product-Design-Hero-Image-8.svg" title="Product Design" description="The UX / UI product design program at Flatiron School focuses on digital product design — designing digital products such as websites, mobile applications, and computer programs." link="" />
            <IndivudalLesson img="https://flatironschool.com/wp-content/uploads/2021/11/SE-Hero-Image-2.svg" title="Software Engineering" description="Become a software engineer to help businesses develop software, build web apps, and products that will help shape the future of the company." link="" />
            <IndivudalLesson img="https://flatironschool.com/wp-content/uploads/2022/07/Frame-503-7.svg" title="Data Science" description="Become a data scientist to help businesses leverage data, analyze data, and provide data-driven insights so businesses can make informed decisions." link="" />
          </div>
        </Hero.Content>
    </Hero>
  );
}

export default Lessons;