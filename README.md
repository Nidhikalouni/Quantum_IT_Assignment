# React + Node.js Authentication System

## Overview
This project is a full-stack authentication system built with **React.js** (frontend) and **Node.js + Express + MongoDB** (backend). It includes:

- User **Sign Up** and **Login**
- Password hashing with **bcrypt**
- JWT-based authentication
- Protected routes
- User table displaying logged-in user info and dummy data
- Responsive UI with **TailwindCSS**

---

## Features
- **Sign Up**: Users can register with name, date of birth, email, and password.
- **Login**: Users can login securely using email and password.
- **Token-based authentication**: Keeps users logged in across sessions.
- **Protected routes**: Users cannot access table page without login.
- **Responsive design**: Works on desktop and mobile.

---

## Screenshots
![Landing Page]<img width="949" height="898" alt="image" src="https://github.com/user-attachments/assets/e5ec59d4-5a23-4840-b2c8-89d22b3b9e03" />

![Login Page]<img width="735" height="582" alt="image" src="https://github.com/user-attachments/assets/c586233d-a1be-48a9-8d2b-4176cba53b2f" />

![Table Page]<img width="944" height="763" alt="image" src="https://github.com/user-attachments/assets/b55d3237-d7e2-4ea0-a554-33b1a91e75e9" />


---

## Tech Stack
- **Frontend**: React.js, React Router DOM, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt

---

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. Clone the repository:

git clone https://github.com/username/project-name.git
cd project-name

2.Install dependencies:
npm install

3.Create a .env file in root:

MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000

4. Start the backend:
node server.js

5.Start the frontend:

npm run dev

Open http://localhost:3000 in browser.

**Folder Structure**
project-name/
│
├─ client/          # React frontend
├─ server/          # Express backend
├─ routes/
├─ controllers/
├─ models/
├─ config/
├─ .env            
└─ README.md

**Usage**

Visit /signup to create an account.

Visit /login to login.

After login, /table will show your info and dummy users.

Logout clears session
