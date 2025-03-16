const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  //   pingInterval: 5000, // Prevents timeouts by sending a ping every 5 seconds
  //   pingTimeout: 25000, // Extends the timeout period before disconnecting
});

let activeUsers = new Set();

io.on("connection", (socket) => {
  //   console.log(`User connected: ${socket.id}`);
  activeUsers.add(socket.id);

  io.emit("updateUserCount", activeUsers.size);

  socket.on("disconnect", () => {
    // console.log(`User disconnected: ${socket.id}`);
    activeUsers.delete(socket.id);
    io.emit("updateUserCount", activeUsers.size);
  });
});

// API route to get the current active users
app.get("/api/current-users", (req, res) => {
  res.json({ activeUsers: activeUsers.size });
});

server.listen(5000, () => console.log("Server running on port 5000"));
