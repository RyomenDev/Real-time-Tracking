import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const PageTracker = () => {
  const [userCount, setUserCount] = useState(0);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Initialize WebSocket connection only when component mounts
    const newSocket = io(`${import.meta.env.VITE_SERVER_URL}`, {
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 3000,
      transports: ["websocket"],
    });

    setSocket(newSocket); // Store the socket instance

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket Server");
      newSocket.emit("pageReached", { page: "CouponClaim" }); // Notify server
    });

    newSocket.on("updateUserCount", (count) => {
      // other function ti be called
      console.log("Updated User Count:", count);
      setUserCount(count);
    });

    return () => {
      newSocket.disconnect(); // Disconnect when component unmounts
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
