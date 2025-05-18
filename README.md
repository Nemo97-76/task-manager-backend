# Task Manager Backend

A robust and scalable backend for a task management application, designed to handle CRUD operations for tasks, user authentication, and data persistence. This API serves as the backbone for a front-end task manager application, providing endpoints to manage tasks and user accounts efficiently.

## Features
- **Task Management**: Create, read, update, and delete tasks with properties like title, description, status, and due date.
- **User Authentication**: Secure user registration and login with JWT-based authentication.
- **Data Persistence**: Store tasks and user data in a MongoDB database.
- **RESTful API**: Well-documented endpoints following REST principles for easy integration with front-end applications.
- **Error Handling**: Comprehensive error responses for invalid requests or server issues.
- **Environment Configuration**: Use environment variables for secure configuration.

## Tech Stack
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for creating RESTful APIs.
- **MongoDB**: NoSQL database for storing tasks and user data.
- **Mongoose**: ODM library for MongoDB to manage database schemas.
- **JWT**: JSON Web Tokens for secure authentication.
- **Bcrypt**: Password hashing for secure user authentication.
- **Dotenv**: Environment variable management.
- **Nodemon** (dev): Auto-restart server during development.

## Prerequisites
Before setting up the project, ensure you have the following installed:
- Node.js (v16 or higher)
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Git

## Installation
Follow these steps to set up and run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nemo97-76/task-manager-backend.git
   cd task-manager-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add the following variables (replace with your own values):
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. **Start the Server**:
   - For development (with Nodemon):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

5. **Access the API**:
   - The server will run on `http://localhost:5000` (or the port specified in `.env`).
   - Use tools like Postman or cURL to test the API endpoints.

## API Endpoints
Below are the main API endpoints for the task manager backend. All endpoints require authentication (JWT token in the `Authorization` header) unless specified.

### **Authentication**
- **POST /api/auth/register**
  - Register a new user.
  - Body: `{ "name": "string", "email": "string", "password": "string" }`
  - Response: `{ "token": "jwt_token", "user": { "id": "string", "name": "string", "email": "string" } }`

- **POST /api/auth/login**
  - Log in an existing user.
  - Body: `{ "email": "string", "password": "string" }`
  - Response: `{ "token": "jwt_token", "user": { "id": "string", "name": "string", "email": "string" } }`

### **Tasks**
- **GET /api/tasks**
  - Retrieve all tasks for the authenticated user.
  - Response: `[ { "id": "string", "title": "string", "description": "string", "status": "string", "dueDate": "date" } ]`

- **POST /api/tasks**
  - Create a new task.
  - Body: `{ "title": "string", "description": "string", "status": "string", "dueDate": "date" }`
  - Response: `{ "id": "string", "title": "string", "description": "string", "status": "string", "dueDate": "date" }`

- **GET /api/tasks/:id**
  - Retrieve a specific task by ID.
  - Response: `{ "id": "string", "title": "string", "description": "string", "status": "string", "dueDate": "date" }`

- **PUT /api/tasks/:id**
  - Update a task by ID.
  - Body: `{ "title": "string", "description": "string", "status": "string", "dueDate": "date" }`
  - Response: `{ "id": "string", "title": "string", "description": "string", "status": "string", "dueDate": "date" }`

- **DELETE /api/tasks/:id**
  - Delete a task by ID.
  - Response: `{ "message": "Task deleted successfully" }`

## Example Request
**Create a Task**:
```bash
curl -X POST http://localhost:5000/api/tasks \
-H "Authorization: Bearer your_jwt_token" \
-H "Content-Type: application/json" \
-d '{"title":"Complete README","description":"Write a professional README for the repo","status":"pending","dueDate":"2025-05-20"}'
```

## Project Structure
```plaintext
/task-manager-backend
├── /controllers
│   ├── authController.js
│   ├── taskController.js
├── /models
│   ├── User.js
│   ├── Task.js
├── /routes
│   ├── authRoutes.js
│   ├── taskRoutes.js
├── /middleware
│   ├── authMiddleware.js
├── .env
├── .gitignore
├── server.js
├── package.json
├── README.md
```

## Contact
- **Email**: tasneemyoussef61@gmail.com

feel free to contact  
