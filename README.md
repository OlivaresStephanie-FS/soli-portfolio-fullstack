# Soli Portfolio — Full-Stack Developer Portfolio
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Node](https://img.shields.io/badge/Node.js-20-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![License](https://img.shields.io/badge/license-MIT-blue)

A modern full-stack developer portfolio showcasing projects, technical skills, and a fully integrated backend contact system.

This project demonstrates real-world full-stack architecture using React, Node.js, Express, and MongoDB.

---

# 🚀 Live Portfolio

🌐 https://soli.nyc

---

# 🧰 Tech Stack

## Frontend

- React
- Vite
- CSS
- Responsive layout
- Component-based architecture

## Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Nodemailer
- express-rate-limit

---

# ✨ Features

### Portfolio Website

- Responsive design
- Project showcase
- Skills and experience sections
- Smooth scrolling navigation

### Full-Stack Contact System

The portfolio includes a production-style contact system:

- React form with controlled inputs
- API requests using `fetch`
- Express backend endpoint
- MongoDB message storage
- Email notifications via Nodemailer
- Rate limiting to prevent spam
- Environment-based configuration

Messages are both:

• stored in MongoDB  
• delivered directly via email

---

# 📁 Project Structure

soli-portfolio-fullstack
│
├── portfolio-backend
│ ├── config
│ ├── controllers
│ ├── models
│ ├── routes
│ └── server.js
│
└── soli-portfolio
├── src
├── public
└── vite.config.js

---

# ⚙️ Environment Variables

## Backend (.env)

PORT=3001
MONGODB_URI=your_mongodb_connection_string

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_app_password
EMAIL_TO=your_email

CLIENT_URL=http://localhost:5173

## Frontend (.env)

VITE_API_URL=http://localhost:3001

---

# 💻 Running Locally

## 1️⃣ Clone the repository

git clone https://github.com/OlivaresStephanie-FS/soli-portfolio-fullstack.git

cd soli-portfolio-fullstack

---

## 2️⃣ Start Backend

cd portfolio-backend
npm install
npm run dev

Server runs on:

http://localhost:3001

---

## 3️⃣ Start Frontend

Open a new terminal:

cd soli-portfolio
npm install
npm run dev

Frontend runs on:

http://localhost:5173

---

# 📬 Contact

If you'd like to collaborate, discuss a project, or explore opportunities:

📧 soli@soli.nyc  
🔗 LinkedIn: https://www.linkedin.com/in/solinyc  
💻 GitHub: https://github.com/OlivaresStephanie-FS

---

# 👩‍💻 Author

**Stephanie Olivares**

Full-Stack MERN Developer focused on building thoughtful, scalable web applications and tools that solve real-world problems.
