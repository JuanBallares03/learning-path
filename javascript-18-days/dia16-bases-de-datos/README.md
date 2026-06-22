# Day 16 – JavaScript Project: "University Management API with MongoDB"

## 📌 Description
This project focused on connecting Node.js with relational (MySQL) and non-relational (MongoDB) databases to implement CRUD operations.  
The final project builds a REST API with Express and MongoDB to manage students and grades, exposing endpoints to query, create, update, and delete records.

## ✨ Features
- Connection to MongoDB Atlas/local from Node.js using `MongoClient`.  
- **GET /estudiantes/:legajo** → search student by student ID.  
- **POST /estudiantes/create** → create a new student.  
- **POST /notas/create** → create a new grade record.  
- **PUT /notas/:id/update** → update grade by ID.  
- **DELETE /notas/:id/delete** → delete grade by ID.  
- **GET /notas/:codigo/aprobados** → filter approved grades (>= 6) by course code.  
- Previous exercises: CRUD with MySQL (`INSERT`, `SELECT`, `UPDATE`, `DELETE`) and CRUD with native MongoDB (`insertOne`, `find`, `updateOne`, `deleteOne`).  

## 🛠 Technologies
- Node.js  
- Express.js  
- MongoDB (native driver)  
- MySQL (only for preliminary exercises)  

## 📌 Visual Disclaimer
The images used in this project were sourced from free resources for decorative purposes only.  
They do not represent registered trademarks and are not associated with any real company.

## 🚀 How to Run
Open the project in your terminal:
```bash
# Navigate to the project folder
cd dia16-bases-de-datos/04-proyecto-dia16

# Install dependencies
npm install

# Run the server
node index.js
