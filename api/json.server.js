import jsonServer from "json-server";
import dotenv from "dotenv";

dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router("data.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(process.env.PORT || 3000, () => {
  console.log("JSON Server is running");
});
