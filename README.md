<div align="center">

# 🚗 Saarthi

### *Your Journey, Our Priority*

**A modern ride-sharing platform connecting riders with drivers**

[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

</div>

<div align="center">

## ✨ Features

</div>

<table>
<tr>
<td width="50%">

### 👥 **User Experience**
- 🔐 **Secure Authentication** - JWT-based login system
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful Tailwind CSS interface
- ⚡ **Real-time Updates** - Live ride tracking

</td>
<td width="50%">

### 🚙 **Driver Management**
- 👨‍✈️ **Captain Profiles** - Comprehensive driver information
- 🚗 **Vehicle Management** - Car details and status
- 📍 **Location Tracking** - Real-time positioning
- 💼 **Earnings Dashboard** - Revenue tracking

</td>
</tr>
</table>

<div align="center">

### 🛡️ **Security & Performance**

| Feature | Technology | Status |
|---------|------------|--------|
| 🔒 Password Hashing | bcrypt | ✅ Active |
| 🎫 Authentication | JWT Tokens | ✅ Active |
| 🌐 API Security | CORS + Validation | ✅ Active |
| 📊 Database | MongoDB + Mongoose | ✅ Active |

</div>

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

<div align="center">

## 🚀 Tech Stack

</div>

<table>
<tr>
<td width="50%" align="center">

### 🖥️ **Backend**

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,jwt" alt="Backend Technologies" />

| Technology | Purpose | Version |
|------------|---------|----------|
| 🟢 **Node.js** | Runtime Environment | Latest |
| 🚀 **Express.js** | Web Framework | ^4.21.2 |
| 🍃 **MongoDB** | Database | ^8.9.3 |
| 🎫 **JWT** | Authentication | ^9.0.2 |
| 🔐 **bcrypt** | Password Hashing | ^5.1.1 |

</td>
<td width="50%" align="center">

### 🎨 **Frontend**

<img src="https://skillicons.dev/icons?i=react,vite,tailwind,javascript" alt="Frontend Technologies" />

| Technology | Purpose | Version |
|------------|---------|----------|
| ⚛️ **React** | UI Library | ^19.0.0 |
| ⚡ **Vite** | Build Tool | Latest |
| 🎨 **Tailwind CSS** | Styling | ^4.1.3 |
| 🎬 **GSAP** | Animations | ^3.13.0 |
| 🌐 **Axios** | HTTP Client | ^1.8.4 |

</td>
</tr>
</table>

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

<div align="center">

## ⚡ Quick Start Guide

*Get Saarthi running in just 4 simple steps!*

</div>

### 🔥 **Step 1: Clone the Repository**
```bash
# Clone the project
git clone https://github.com/your-username/Saarthi.git
cd Saarthi
```

<details>
<summary><strong>🔧 Step 2: Backend Setup</strong></summary>

```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install
```

**Create `.env` file in Backend directory:**
```env
# Server Configuration
PORT=3000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/saarthi

# Security
JWT_SECRET=your_super_secret_jwt_key_here
```

**Start the backend server:**
```bash
npm start
```

✅ **Backend running on:** `http://localhost:3000`

</details>

<details>
<summary><strong>🎨 Step 3: Frontend Setup</strong></summary>

```bash
# Navigate to frontend directory
cd ../Frontend

# Install dependencies
npm install
```

**Create `.env` file in Frontend directory:**
```env
# API Configuration
VITE_API_URL=http://localhost:3000
```

**Start the development server:**
```bash
npm run dev
```

✅ **Frontend running on:** `http://localhost:5173`

</details>

<div align="center">

### 🎉 **Step 4: Access Your Application**

| Service | URL | Status |
|---------|-----|--------|
| 🌐 **Frontend** | [`http://localhost:5173`](http://localhost:5173) | 🟢 Ready |
| 🔌 **Backend API** | [`http://localhost:3000`](http://localhost:3000) | 🟢 Ready |

---

**🚀 You're all set! Start building amazing rides!**

</div>

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

<div align="center">

## 🤝 Contributing

*We love contributions! Here's how you can help make Saarthi even better.*

</div>

<table>
<tr>
<td width="33%" align="center">

### 🍴 **Fork**
```bash
# Fork the repo
git fork
```

</td>
<td width="33%" align="center">

### 🌿 **Branch**
```bash
# Create feature branch
git checkout -b feature/amazing-feature
```

</td>
<td width="33%" align="center">

### 📝 **Commit**
```bash
# Commit changes
git commit -m 'Add amazing feature'
```

</td>
</tr>
</table>

<div align="center">

### 🚀 **Submit Pull Request**

1. **Push** your branch: `git push origin feature/amazing-feature`
2. **Open** a Pull Request with a clear description
3. **Wait** for review and feedback
4. **Celebrate** your contribution! 🎉

---

**💡 Ideas for contributions:**
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage

</div>

## 📝 License

This project is licensed under the ISC License.

<div align="center">

## 👥 Meet the Team

<table>
<tr>
<td align="center">
<img src="https://github.com/Suyash.png" width="100px" alt="Suyash"/><br>
<sub><b>Suyash</b></sub><br>
<sub>🚀 Creator & Lead Developer</sub>
</td>
</tr>
</table>

---

## 🙏 Acknowledgments

<table>
<tr>
<td width="33%" align="center">

### 🌟 **Inspiration**
Modern ride-sharing platforms

</td>
<td width="33%" align="center">

### 💻 **Built With**
Love, coffee, and code

</td>
<td width="33%" align="center">

### 🤝 **Community**
Thanks to all contributors

</td>
</tr>
</table>

---

### 📞 **Get in Touch**

<div align="center">

[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-red?style=for-the-badge&logo=github)](https://github.com/your-username/Saarthi/issues)
[![Discussions](https://img.shields.io/badge/GitHub-Discussions-blue?style=for-the-badge&logo=github)](https://github.com/your-username/Saarthi/discussions)
[![Email](https://img.shields.io/badge/Email-Contact-orange?style=for-the-badge&logo=gmail)](mailto:your-email@example.com)

**🎉 Happy Coding! Let's build the future of transportation together! 🚗💨**

</div>

</div>
