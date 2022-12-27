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
    let value = await env.COURSES.get(course);
    return new Response(JSON.stringify({ value }), {
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "*",
      }
    });
  }
  if (pathname.startsWith("/status")) {
    const httpStatusCode = Number(pathname.split("/")[2]);
    return Number.isInteger(httpStatusCode) ? fetch("https://http.cat/" + httpStatusCode) : new Response("That's not a valid HTTP status code.");
  }
  return fetch("https://flatironopensource.ml/404");
}
