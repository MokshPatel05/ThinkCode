# 🚀 ThinkCode - Complete Setup Guide

## 📋 Table of Contents
1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running Both Services](#running-both-services)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

**ThinkCode** is a full-stack application with a Node.js/Express backend and a modern frontend built with Vue.js/React using Vite.

- **Backend**: RESTful API built with Node.js
- **Frontend**: Modern SPA with Vite build tool
- **Database**: MongoDB (configured via environment variables)

---

## 📂 Project Structure

```
ThinkCode/
├── Backend/
│   ├── models/              # Database models
│   ├── routes/              # API endpoints
│   ├── utils/               # Helper functions
│   ├── package.json         # Dependencies
│   ├── server.js            # Main entry point
│   └── .env                 # Environment variables (CREATE THIS)
│
├── Frontend/
│   ├── src/                 # Source code
│   ├── public/              # Static assets
│   ├── package.json         # Dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── eslint.config.js     # Linting rules
│   ├── index.html           # Entry HTML
│   └── .env                 # Environment variables (CREATE THIS)
│
└── .gitignore
```

---

## 🔧 Backend Setup

### Step 1: Navigate to Backend Directory
```bash
cd Backend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create `.env` File
Create a file named `.env` in the `Backend` directory with the following variables:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/thinkcode
MONGODB_USER=your_mongo_user
MONGODB_PASSWORD=your_mongo_password

# Authentication
JWT_SECRET=your_secret_jwt_key_here_change_in_production
JWT_EXPIRE=7d

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# API Keys (if applicable)
API_KEY=your_api_key_here

# Email Configuration (if applicable)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_password

# Logging
LOG_LEVEL=debug
```

**Variable Descriptions:**

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/thinkcode` |
| `MONGODB_USER` | MongoDB username | `admin` |
| `MONGODB_PASSWORD` | MongoDB password | `secure_password` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_super_secret_key` |
| `JWT_EXPIRE` | Token expiration time | `7d` |
| `CORS_ORIGIN` | Allowed frontend URL | `http://localhost:3000` |
| `API_KEY` | Third-party API key | `abc123xyz` |
| `EMAIL_HOST` | Email service host | `smtp.gmail.com` |
| `EMAIL_PORT` | Email service port | `587` |
| `EMAIL_USER` | Email account | `noreply@thinkcode.com` |
| `EMAIL_PASSWORD` | Email password/app token | `generated_app_password` |
| `LOG_LEVEL` | Logging verbosity | `debug`, `info`, `warn`, `error` |

### Step 4: Required Files to Create/Verify

**Existing Files:**
- ✅ `package.json` - Already present
- ✅ `server.js` - Main entry point
- ✅ `models/` - Directory for database schemas
- ✅ `routes/` - Directory for API routes
- ✅ `utils/` - Directory for helper functions

**Create These Files (if not present):**
```bash
# Create config file (optional but recommended)
touch config/database.js
touch config/jwt.js

# Create directories if empty
mkdir -p models
mkdir -p routes
mkdir -p utils
mkdir -p controllers
mkdir -p middleware
```

### Step 5: Update `server.js` (if needed)

Make sure your `server.js` uses environment variables:

```javascript
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
});
```

### Step 6: Start Backend Server

**Option A: Using Node directly**
```bash
node server.js
```

**Option B: Using Nodemon (auto-restart on file changes)**
```bash
# Install nodemon first (if not already installed)
npm install --save-dev nodemon

# Add to package.json scripts section:
"dev": "nodemon server.js"
"start": "node server.js"

# Run with:
npm run dev
```

✅ Backend should now be running on `http://localhost:5000`

---

## 🎨 Frontend Setup

### Step 1: Navigate to Frontend Directory
```bash
cd ../Frontend
# or from root: cd Frontend
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Create `.env` File
Create a file named `.env` in the `Frontend` directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=10000

# Application Configuration
VITE_APP_NAME=ThinkCode
VITE_APP_VERSION=1.0.0

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_DEBUG_MODE=true

# Third-party Services
VITE_SENTRY_DSN=your_sentry_dsn_here
VITE_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

**Variable Descriptions:**

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |
| `VITE_API_TIMEOUT` | API request timeout in ms | `10000` |
| `VITE_APP_NAME` | Application name | `ThinkCode` |
| `VITE_APP_VERSION` | Application version | `1.0.0` |
| `VITE_ENABLE_ANALYTICS` | Enable analytics tracking | `true` or `false` |
| `VITE_DEBUG_MODE` | Enable debug mode | `true` or `false` |
| `VITE_SENTRY_DSN` | Error tracking service URL | `https://key@sentry.io/id` |
| `VITE_GOOGLE_ANALYTICS_ID` | Google Analytics tracking ID | `GA-XXXXXXXX-X` |

### Step 4: Required Files to Create/Verify

**Existing Files:**
- ✅ `package.json` - Already present
- ✅ `vite.config.js` - Build configuration
- ✅ `eslint.config.js` - Linting configuration
- ✅ `index.html` - Entry HTML file
- ✅ `src/` - Source directory
- ✅ `public/` - Static assets directory

**Create These Files (if not present):**
```bash
# Create main app files
touch src/main.js
touch src/App.vue
touch src/api/client.js

# Create directories
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/stores
mkdir -p src/utils
mkdir -p public/images
```

### Step 5: Configure API Client

Create `src/api/client.js` to use the environment variable:

```javascript
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_TIMEOUT = import.meta.env.VITE_API_TIMEOUT || 10000;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
});

export default axiosInstance;
```

### Step 6: Start Frontend Development Server

```bash
npm run dev
```

✅ Frontend should now be running on `http://localhost:5173` (default Vite port)

---

## 🔄 Running Both Services (Complete Setup)

### Terminal 1: Start Backend
```bash
cd Backend
npm run dev
# Output: Server running on port 5000
```

### Terminal 2: Start Frontend
```bash
cd Frontend
npm run dev
# Output: Local: http://localhost:5173/
```

### Verify Everything is Working

**Backend Health Check:**
```bash
curl http://localhost:5000
# Should return a response from your API
```

**Frontend Access:**
- Open browser: `http://localhost:5173`
- Check browser console for any errors
- Verify API calls are going to `http://localhost:5000`

---

## 📝 Environment Variables Summary

### Backend (.env)
- **Server**: `PORT`, `NODE_ENV`
- **Database**: `MONGODB_URI`, `MONGODB_USER`, `MONGODB_PASSWORD`
- **Auth**: `JWT_SECRET`, `JWT_EXPIRE`
- **CORS**: `CORS_ORIGIN`
- **Email**: `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD`
- **Other**: `API_KEY`, `LOG_LEVEL`

### Frontend (.env)
- **API**: `VITE_API_URL`, `VITE_API_TIMEOUT`
- **App**: `VITE_APP_NAME`, `VITE_APP_VERSION`
- **Features**: `VITE_ENABLE_ANALYTICS`, `VITE_DEBUG_MODE`
- **Services**: `VITE_SENTRY_DSN`, `VITE_GOOGLE_ANALYTICS_ID`

---

## 🐛 Troubleshooting

### Backend Issues

**Port Already in Use**
```bash
# Find process using port 5000
lsof -i :5000
# Kill the process
kill -9 <PID>
```

**MongoDB Connection Error**
- Ensure MongoDB is running: `mongod`
- Check `MONGODB_URI` in `.env`
- Verify credentials if using authentication

**Module Not Found**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Frontend Issues

**Port 5173 Already in Use**
```bash
npm run dev -- --port 3001
```

**API Calls Not Working**
- Check `VITE_API_URL` in `.env` matches backend URL
- Verify backend is running on correct port
- Check browser console for CORS errors
- Ensure backend has CORS enabled

**Build Errors**
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Production Build

**Backend:**
```bash
NODE_ENV=production node server.js
```

**Frontend:**
```bash
npm run build
# Output will be in 'dist' folder
```

---

## 📚 Additional Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Vite Documentation](https://vitejs.dev/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8949)

---

## ✅ Quick Checklist

- [ ] Backend `.env` created with all required variables
- [ ] Frontend `.env` created with API URL pointing to backend
- [ ] MongoDB is running
- [ ] Backend dependencies installed (`npm install` in Backend)
- [ ] Frontend dependencies installed (`npm install` in Frontend)
- [ ] Backend server started (`npm run dev` in Backend)
- [ ] Frontend dev server started (`npm run dev` in Frontend)
- [ ] Can access frontend at `http://localhost:5173`
- [ ] Frontend can reach backend API
- [ ] No console errors in browser developer tools

---

**Happy Coding! 🚀**
