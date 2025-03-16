# 📌 Real-Time User Tracking with Socket.io

This project tracks active users on a page in real-time using **Express, Socket.io, and React**. Each connected user's **IP address** is saved along with their **socket ID**, and the count of online users is updated dynamically.

## 🚀 Features

- **Real-time user tracking** with WebSockets
- **Stores IP address** of connected users
- **Live updates** on the frontend
- **API to get active users**
- **Handles user disconnects properly**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express, Socket.io
- **Frontend:** React, WebSockets

---

## 📂 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/repo-name.git
cd repo-name
```

### 2️⃣ Install dependencies

```sh
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd client
npm install
```

### 3️⃣ Start the servers

```sh
# Start backend (Express & Socket.io)
cd server
node index.js

# Start frontend (React)
cd client
npm start
```

---

### 🖥️ Backend: Express + Socket.io

#### 🔹 **Server Code (`server.js`)**

---

### 🎨 Frontend: React + WebSockets

#### 🔹 **React Component (`PageTracker.js`)**

---

## 📡 API Endpoints

| Method | Endpoint             | Description              |
| ------ | -------------------- | ------------------------ |
| GET    | `/api/current-users` | Get list of active users |

---

## 🔥 Expected Output

### **Console Logs (Backend)**

```sh
User connected: abc123 from IP: 192.168.1.10
User connected: xyz456 from IP: 192.168.1.11
User disconnected: abc123
```

### **UI on Frontend**

```
📌 Users on this Page
2 users online

1. IP: 192.168.1.10
2. IP: 192.168.1.11
```

---

## 🎯 Future Improvements

✅ Store user data in **Redis** for scalability  
✅ Use **GeoIP API** to display location info  
✅ Add **user authentication** for tracking logged-in users

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Feel free to submit issues or pull requests!

🔗 **GitHub Repository**: [your-repo-link](https://github.com/your-username/repo-name)
