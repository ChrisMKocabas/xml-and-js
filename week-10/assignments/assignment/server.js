const http = require("http");

const people = require("./controller");

const PORT = 8888;

const parseURLParams = (paramsString) => {
  const params = new URLSearchParams(paramsString);

  return Array.from(params.entries()).reduce(
    (acc, [key, value]) => ({ ...acc, [key]: value }),
    {}
  );
};

const server = http.createServer(async (req, res) => {
  const [path, paramsString] = req.url.split("?");

  if (path === "/api/peopleConstant") {
    const params = parseURLParams(paramsString);

    const { code, data } = await people.getAll(params);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else if (path.match(/\/api\/peopleConstant\/\w+/)) {
    const id = path.split("/")[3];

    const { code, data } = await people.getById(id);

    res.writeHead(code, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = server;
