export default {
  async fetch(request, env) {
    return await handleRequest(request, env).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  }
}

async function handleRequest(request, env) {
  const { pathname } = new URL(request.url);
  if (pathname.startsWith("/course/")) {
    const course = pathname.split("/")[2];
    return new Response(await env.COURSES.get(course), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
      }
    });
  }
  if (pathname.startsWith("/status")) {
    const httpStatusCode = Number(pathname.split("/")[2]);
    return Number.isInteger(httpStatusCode) 
    ? 
      fetch("https://http.cat/" + httpStatusCode) 
    : 
      new Response("That's not a valid HTTP status code.", {
        headers: { 
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://flatironopensource.com",
          "Access-Control-Allow-Methods": "GET",
        }
      });
  }
  return new Response("Hello! Welcome to Flatiron School's Workers! \nThis is our backend API. \nTo get started, try visiting /course/$course_key or /status/200. \nHere's the list of courses for $course_key: \nse-prep\nse-phase1\nse-phase2\nse-phase3\nse-phase4\nse-phase5\nds-prep\nds-phase1\nds-phase2\nds-phase3\nds-phase4\nds-phase5\ndata-structures-and-algorithms");
}
