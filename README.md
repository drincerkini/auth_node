# Authentication API

This is a simple authentication API built with Node.js, Express.js, and MongoDB. It provides endpoints for user registration, login, and a protected route that requires authentication using JSON Web Tokens (JWT).

## Prerequisites

-Node.js installed on your system. You can download it from nodejs.org.
-MongoDB installed and running locally or a MongoDB connection URI for a remote database

## Getting Started

1. Clone the repository:
git clone https://github.com/your-username/authentication-api.git
cd authentication-api

2. Install dependencies:
npm install

3. Set up your MongoDB database:

* Create a new MongoDB database.

* Create a .env file in the root directory and add your MongoDB connection 
URI:
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret

4. Start the server:
npm start

The server will run at `http://localhost:3000`.

## API Endpoints

* Register User
Endpoint: `POST /register`
Request Body:
{
  "username": "your_username",
  "password": "your_password"
}
* Response: User registered successfully

* User Login

Endpoint: `POST /login`
Request Body:
{
  "username": "your_username",
  "password": "your_password"
}
Response: JWT token for authentication

Protected Route
-Endpoint: GET /protected
-Headers: Authorization: Bearer your_jwt_token
-Response: Access to protected resource if the token is valid

## Error Handling
-Invalid or missing credentials: 401 Unauthorized
-Invalid token or unauthorized access: 403 Forbidden
-Internal server error: 500 Internal Server Error