# 🏋️ Fitness Tracker Web Application

A fitness tracking web application built as a learning project to understand full-stack development using React and Node.js.

---

## 🚀 Features

### Frontend
- User Sign Up & Sign In UI
- Dashboard with fitness statistics
- Workout logging interface
- Charts and visual data cards
- Responsive UI using Styled Components
- Client-side routing with React Router

### Backend
- REST API using Node.js & Express
- MongoDB for data storage
- JWT-based authentication
- User and Workout models
- Protected routes using middleware

---

## 🧱 Tech Stack

### Frontend
- React
- Styled Components
- Redux Toolkit
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- bcrypt

---

## 📁 Project Structure

FitnessTracker/
│
├── client/        # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/        # Node.js backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
└── README.md

---

## 🔐 Backend Overview

The backend provides REST APIs for:
- User registration and login
- JWT authentication
- Workout creation and retrieval
- Dashboard data handling

### Authentication Flow
1. User registers or logs in
2. Server generates a JWT token
3. Token is sent to the frontend
4. Protected routes require `Authorization: Bearer <token>`

### Environment Variables

Create a `.env` file inside the `server/` folder:

MONGODB_URL=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
PORT=8080  

---

## ⚠️ Important Note

This project was created primarily for learning and academic purposes.

The frontend can be run independently using mock data for demonstration, even without backend integration.

---

## ▶️ Running the Project

### Frontend
cd client  
npm install  
npm start  

### Backend
cd server  
npm install  
npm start  

---

## 🎯 Purpose of the Project

- Learn full-stack development concepts
- Understand JWT-based authentication
- Practice React component design
- Work with REST APIs and MongoDB

---

## 📌 Future Improvements

- Improved backend data aggregation
- Better error handling
- Deployment to cloud platforms
- Enhanced workout analytics

---

## 👨‍💻 Author

Priyam
