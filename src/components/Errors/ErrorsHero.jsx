import { Hero, Button } from "react-daisyui";

function ErrorsHero({ errorCode, errorTitle, errorDescription, errorImage, errorImageAlt }) {
  return(
    <Hero>
      <Hero.Overlay />
      <Hero.Content className="text-center md:flex md:shrink-0">
        <div className="max-w-md">
            <img className="py-3" src={errorImage} alt={errorImageAlt} />
            <h1 className="font-bold">
              {errorCode}
            </h1>
            <h1 className="text-5xl font-bold">
              {errorTitle}
            </h1>
            <p className="py-6">
              {errorDescription}
            </p>
            <Button href="/" color="accent">Go to main page</Button>
        </div>
      </Hero.Content>
    </Hero>
  );
}

export default ErrorsHero;