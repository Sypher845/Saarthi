# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint allows a new user to register by providing their full name, email, and password. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the user details.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstName`: A string representing the user's first name (required, minimum length: 3 characters).
  - `lastName`: A string representing the user's last name (optional, minimum length: 3 characters).
- `email`: A string representing the user's email address (required, must be a valid email format).
- `password`: A string representing the user's password (required, minimum length: 6 characters).

### Example Request
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses

### Success Response
- **Status Code**: 201 Created
- **Content**: 
{
  "token": "JWT_TOKEN",
  "user": {
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
  
### Error Responses
- **Status Code**: 400 Bad Request
  - **Content**: 
{
  "errors": [
    {
      "msg": "First name must be atleast 3 characters",
      "param": "fullname.firstName",
      "location": "body"
    },
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be atleast 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
  
## Notes
- Ensure that the request body adheres to the specified format and validation rules to avoid errors.
- The JWT token returned can be used for authenticating subsequent requests.