import { data } from "autoprefixer";
import { useState } from "react";
import { Button, ButtonGroup } from "react-daisyui";
import { BsGithub } from "react-icons/bs";
import DOMPurify from "dompurify";
import "../../assets/css/course.css";

function CourseHero({ course, phase, phaseData }) {
  const [courseModule, setCourseModule] = useState(null);
  const [content, setContent] = useState(null);

  let testArray = phaseData.modules.map((mod) => (
    <Button onClick={() => setCourseModule(mod.name)} key={mod.name}>
      {mod.name}
    </Button>
  ));
  let courseModuleArray = phaseData.modules.find(
    (mod) => mod.name === courseModule
  );

  let handleSetContent = (data) => {
    DOMPurify.addHook("afterSanitizeAttributes", function (node) {
      // set all elements owning target to target=_blank
      if ("target" in node) {
        node.setAttribute("target", "_blank");
      }
      // set non-HTML/MathML links to xlink:show=new
      if (
        !node.hasAttribute("target") &&
        (node.hasAttribute("xlink:href") || node.hasAttribute("href"))
      ) {
        node.setAttribute("xlink:show", "new");
      }
    });
    let clean = DOMPurify.sanitize(data, {
      ADD_TAGS: ["iframe", "target"],
      ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
      USE_PROFILES: { html: true },
    });
    setContent(clean);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex md:flex-row flex-col mx-5">
          <ButtonGroup className="md:w-60 w-full" vertical>
            {course.phases.map((phase) => (
              <Button key={phase.name} tag="a" size="sm" href={phase.link}>
                {phase.name}
              </Button>
            ))}
          </ButtonGroup>
          <div className="flex flex-col w-full md:ml-5 mt-2.5">
            <div className="flex md:flex-row flex-row justify-between">
              <h1 className="text-3xl font-bold">
                {course.name}: {phase.name}
              </h1>
              {/* <Button startIcon={BsGithub} href={course.link} size="md">Fork Github</Button> */}
            </div>
            <div className="flex md:flex-row flex-col justify-between">
              <ButtonGroup className="md:w-100 w-full md:ml-5 mt-2.5" vertical>
                {testArray}
              </ButtonGroup>
              <ButtonGroup className="md:w-100 w-full md:ml-5 mt-2.5" vertical>
                {courseModule !== null ? courseModuleArray.name : null}

                {course.name !== "Product Design"
                  ? courseModule !== null
                    ? courseModuleArray.items.map((data) => (
                        <Button
                          onClick={() => window.open(data.content)}
                          key={data.title}
                          startIcon={<BsGithub />}
                        >
                          {data.title}
                        </Button>
                      ))
                    : null
                  : courseModule !== null
                  ? courseModuleArray.items.map((data) => (
                      <Button
                        onClick={() => handleSetContent(data.content)}
                        key={data.title}
                      >
                        {data.title}
                      </Button>
                    ))
                  : null}
              </ButtonGroup>
            </div>
          </div>
        </div>
        {course.name === "Product Design" ? (
          <>
            <div
              className="mx-5 md:ml-5 mt-2.5 courseScreen"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default CourseHero;
