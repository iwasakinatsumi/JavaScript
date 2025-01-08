const net = require("net");
const querystring = require("querystring");

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const [header, body] = request.split("\r\n\r\n");
    const [requestLine] = header.split("\r\n");
    const [method, path] = requestLine.split(" ");

    if (method === "GET" && path === "/") {
      const response = `
HTTP/1.1 200 OK
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <form action="/greeting" method="POST">
      <label for="greeting">Name:</label>
      <input type="text" id="name" name="name" />
      <input type="text" id="greeting" name="greeting" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>`;
      socket.write(response);
    } else if (method === "POST" && path === "/greeting") {
      const params = querystring.parse(body);
      const response = `
HTTP/1.1 200 OK
Content-Type: text/html

<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting</title>
  </head>
  <body>
    <h1>Hello, ${params.name}!</h1>
    <p>${params.greeting}</p>
  </body>
</html>`;
      socket.write(response);
    } else if (method === "GET" || method === "POST") {
      const response = `
HTTP/1.1 404 Not Found
Content-Type: text/plain

404 Not Found`;
      socket.write(response);
    } else {
      const response = `
HTTP/1.1 405 Method Not Allowed
Content-Type: text/plain

405 Method Not Allowed`;
      socket.write(response);
    }
    socket.end();
  });
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
