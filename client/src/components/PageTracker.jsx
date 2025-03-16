import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const PageTracker = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    socket.on("updateUserCount", (count) => setUserCount(count));
    console.log({userCount});

    // Fetch initial count from API
    fetch("http://localhost:5000/api/current-users")
      .then((res) => res.json())
      .then((data) => console.log(data));
    //   .then((data) => setUserCount(data.activeUsers));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold">📌 Users on this Page</h2>
      <p className="text-lg text-blue-600 font-semibold">
        {userCount} users online
      </p>
    </div>
  );
};

export default PageTracker;
