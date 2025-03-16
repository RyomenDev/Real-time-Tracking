import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000", {
  reconnection: true, // Enable automatic reconnection
  reconnectionAttempts: 5, // Try reconnecting 5 times before failing
  reconnectionDelay: 3000, // Wait 3 seconds before retrying
  transports: ["websocket"], // Ensure WebSocket is used, not polling
});

const PageTracker = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to WebSocket Server");
    });

    // Listen for user count updates
    socket.on("updateUserCount", (count) => {
      console.log("Updated User Count:", count);
      setUserCount(count);
    });

    // Fetch initial user count
    // fetch("http://localhost:5000/api/current-users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("Fetched user count:", data.activeUsers);
    //     setUserCount(data.activeUsers);
    //   })
    //   .catch((err) => console.error("Error fetching user count:", err));

    return () => {
      // No need to disconnect manually, let WebSocket handle it
      socket.off("updateUserCount"); // Cleanup event listener
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center text-black">
        <h2 className="text-3xl font-bold mb-2">📌 Users on this Page</h2>
        <p className="text-xl text-blue-600 font-semibold">
          {userCount} users online
        </p>
      </div>
    </div>
  );
};

export default PageTracker;
