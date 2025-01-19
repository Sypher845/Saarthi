# API Endpoints

## User Endpoints

- **POST /users/register**
  - **Description**: Register a new user.
  - **Request Body**:
    - `fullname.firstName`: First name (min 3 characters)
    - `email`: Valid email address
    - `password`: Password (min 6 characters)
  - **Responses**:
    - **201 Created**: User successfully registered.
    - **400 Bad Request**: Invalid request data.
