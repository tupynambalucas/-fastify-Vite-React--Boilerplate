export default async function (server, opts) {
  server.get("/", async function (req, res) { return res.html()});
  server.get("/test", async function (req, res) { res.send({hello: "world"}) });
}