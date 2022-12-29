import CoreBar from "../../components/CoreBar";
import ErrorsHero from "../../components/Errors/ErrorsHero";
import CoreFooter from "../../components/CoreFooter";

function NotFound() {
  return (
    <div>
        <CoreBar />
        <ErrorsHero errorCode="404" errorTitle="You seem lost..." errorDescription="The page you been looking for has switched sides. Sorry about this page..." errorImage="https://http.cat/404" errorImageAlt="HTTP Cat 404" />
        <CoreFooter />
    </div>
  );
}

export default NotFound;