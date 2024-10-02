import "dotenv/config";
import express from "express";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import { Server } from "socket.io";
import http from "http";
import { connectDb } from "./utils/config/features.js";
import { ErrorHandlerMiddleware } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import generateUsers from "./seeders/userSeeder.js";

const port = process.env.PORT || 3000;

//Step 1: create express server
const app = express();
// Step:2 pass express server to http server
const server = http.createServer(app);
// Step : 3 pass the http server to socket
const io = new Server(server);
// convert serelised data into Json
app.use(express.json());
// converts form data to json
// app.use(express.urlencoded());
// Use express.urlencoded() to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// cookie parser
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/chat", chatRoutes);
app.get("/", (res, req) => {
  res.send("Welcome...!!!");
});
app.use(ErrorHandlerMiddleware);
io.on("connection", (socket) => {
  console.log("User Connected..!", socket.id);

  socket.on("message", (data) => {
    console.log(data);
    socket.emit("return", { return: data });
  });
  socket.on("disconnect", () => {
    console.log("User Disconnected..!", socket.id);
  });
});
server.listen(port, async () => {
  await connectDb();
  // generateUsers(10);
  console.log(`server is running on ${port}`);
});
