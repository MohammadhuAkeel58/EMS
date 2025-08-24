# EMS - Employee Management System

## A full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) for managing employee records.

# 🛠️ Technologies Used

Frontend: React.js

Backend: Node.js with Express.js

Database: MongoDB Atlas

Routing: React Router (for frontend navigation)

Environment Variables: .env files for configuration


# Clone the Repository
git clone https://github.com/MohammadhuAkeel58/EMS.git

cd frontend
npm install

cd backend
npm install


# Set Up Environment Variables

Create a .env file in the root directory with:
MONGO_URI=your_mongodb_connection_string
PORT=5000



## You can run frontend using:
npm run dev

## You can run backend using:
npm start dev




## Open your browser at:
http://localhost:5000




# Employees

GET /api/employees - Get all employees

GET /api/employees/:id - Get a single employee

POST /api/employees/create - Add a new employee

PUT /api/employees/update/:id - Update an employee

DELETE /api/employees/delete/:id - Delete an employee


# ✅ Features

CRUD operations for employees

React UI

