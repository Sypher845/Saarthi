# Saarthi 🚗

A modern ride-sharing platform connecting riders with drivers, built with React and Node.js.

## 🌟 Features

- **User Registration & Authentication** - Secure signup/login for both riders and drivers
- **Real-time Ride Booking** - Connect riders with nearby drivers
- **Driver Management** - Comprehensive captain (driver) profiles and vehicle information
- **Secure Authentication** - JWT-based authentication with password hashing
- **Modern UI** - Responsive React frontend with Tailwind CSS and GSAP animations
- **RESTful API** - Well-structured backend with Express.js

## 🏗️ Project Structure

```
Saarthi/
├── Backend/                 # Node.js/Express API server
│   ├── controllers/         # Route controllers
│   ├── models/             # MongoDB data models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── middlewares/        # Custom middleware
│   └── db/                 # Database configuration
├── Frontend/               # React application
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
└── README.md              # Project documentation
```

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database with Mongoose ODM
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Animation library
- **Axios** - HTTP client
- **React Router** - Client-side routing

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/Saarthi.git
cd Saarthi
```

### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file in the Backend directory:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/saarthi
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

Create a `.env` file in the Frontend directory:
```env
VITE_API_URL=http://localhost:3000
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## 🔧 Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📚 API Endpoints

### Authentication
- `POST /users/register` - Register a new user
- `POST /users/login` - User login
- `POST /captains/register` - Register a new captain (driver)
- `POST /captains/login` - Captain login

### User Management
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile
- `POST /users/logout` - User logout

### Captain Management
- `GET /captains/profile` - Get captain profile
- `PUT /captains/profile` - Update captain profile
- `POST /captains/logout` - Captain logout

## 🗃️ Database Models

### User Model
- Personal information (firstName, lastName)
- Email and password
- Authentication methods

### Captain Model
- Personal information (firstName, lastName)
- Email and password
- Vehicle information
- Location data
- Status (available/busy)

## 🛡️ Security Features

- **Password Hashing** - Using bcrypt for secure password storage
- **JWT Authentication** - Stateless authentication with JSON Web Tokens
- **Input Validation** - Server-side validation using express-validator
- **CORS Protection** - Configured for secure cross-origin requests

## 🎨 UI/UX Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - GSAP-powered transitions and effects
- **Modern Interface** - Clean and intuitive user experience
- **Bootstrap Icons** - Comprehensive icon library

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables on your hosting platform
2. Configure MongoDB connection string
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to platforms like Netlify, Vercel, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👥 Authors

- **Suyash** - Initial work

## 🙏 Acknowledgments

- Thanks to all contributors who helped build this project
- Inspired by modern ride-sharing platforms
- Built with love for the community

---

**Happy Coding!** 🎉

For any questions or support, please open an issue or contact the maintainers.
