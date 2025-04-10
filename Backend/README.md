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

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint allows an existing user to log in by providing their email and password. Upon successful authentication, a JSON Web Token (JWT) is generated and returned along with the user details.

## Request Body
The request body must be in JSON format and include the following fields:

- `email`: A string representing the user's email address (required, must be a valid email format).
- `password`: A string representing the user's password (required, minimum length: 6 characters).

### Example Request
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses

### Success Response
- **Status Code**: 200 OK
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
- **Status Code**: 401 Unauthorized
  - **Content**: 
{
  "message": "Invalid email or password"
}

## Notes
- Ensure that the request body adheres to the specified format and validation rules to avoid errors.
- The JWT token returned can be used for authenticating subsequent requests.

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint retrieves the profile of the currently authenticated user.

## Headers
- `Authorization`: Bearer token (required)

### Example Request
Headers:
```
Authorization: Bearer JWT_TOKEN
```

## Responses

### Success Response
- **Status Code**: 200 OK
- **Content**: 
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com"
}

### Error Responses
- **Status Code**: 401 Unauthorized
  - **Content**: 
{
  "message": "Unauthorized"
}

## Notes
- Ensure the JWT token is included in the `Authorization` header to access this endpoint.

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint logs out the currently authenticated user by blacklisting their token.

## Headers
- `Authorization`: Bearer token (required)

### Example Request
Headers:
```
Authorization: Bearer JWT_TOKEN
```

## Responses

### Success Response
- **Status Code**: 200 OK
- **Content**: 
{
  "message": "Logged out successfully"
}

### Error Responses
- **Status Code**: 401 Unauthorized
  - **Content**: 
{
  "message": "Unauthorized"
}

## Notes
- The token used for authentication will be blacklisted and cannot be reused.
- Ensure the JWT token is included in the `Authorization` header to access this endpoint.

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint allows a new captain to register by providing their full name, email, password, and vehicle details. Upon successful registration, a JSON Web Token (JWT) is generated and returned along with the captain details.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstName`: A string representing the captain's first name (required, minimum length: 3 characters).
  - `lastName`: A string representing the captain's last name (optional, minimum length: 3 characters).
- `email`: A string representing the captain's email address (required, must be a valid email format).
- `password`: A string representing the captain's password (required, minimum length: 6 characters).
- `vehicle`: An object containing:
  - `color`: A string representing the vehicle's color (required, minimum length: 3 characters).
  - `plate`: A string representing the vehicle's plate number (required, minimum length: 3 characters).
  - `capacity`: A number representing the vehicle's capacity (required, minimum value: 1).
  - `vehicleType`: A string representing the type of vehicle (required, must be one of `motorcycle`, `car`, or `auto`).

### Example Request
```json
{
  "fullname": {
    "firstName": "Jane",
    "lastName": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

## Responses

### Success Response
- **Status Code**: 201 Created
- **Content**: 
```json
{
  "token": "JWT_TOKEN",
  "captain": {
    "fullname": {
      "firstName": "Jane",
      "lastName": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Responses
- **Status Code**: 400 Bad Request
  - **Content**: 
```json
{
  "message": "Captain already exists"
}
```
- **Status Code**: 422 Unprocessable Entity
  - **Content**: 
```json
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
    },
    {
      "msg": "Color must be atleast 3 characters",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate number must be atleast 3 characters",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be atleast 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Vehicle type must be either motorcycle, car or auto",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

## Notes
- Ensure that the request body adheres to the specified format and validation rules to avoid errors.
- The JWT token returned can be used for authenticating subsequent requests.



