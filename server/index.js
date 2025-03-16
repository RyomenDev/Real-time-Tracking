const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server);

let usersOnPage = 0;

io.on("connection", (socket) => {
  usersOnPage++; // Increment when a user connects
  io.emit("updateUserCount", usersOnPage); // Notify all clients

  socket.on("disconnect", () => {
    usersOnPage--; // Decrement when a user disconnects
    io.emit("updateUserCount", usersOnPage);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
