# 🚀 JobHunt - Advanced Job Board Platform

[![GitHub Repo URL](https://img.shields.io/badge/GitHub-Sreenu--y%2FJobHunt-blue?style=flat&logo=github)](https://github.com/Sreenu-y/JobHunt)
[![Technology Stack](https://img.shields.io/badge/Stack-MERN%20%2B%20Vite-brightgreen)](https://mern.io/)
[![Live Application](https://img.shields.io/badge/Live%20Demo-Vist%20Now-blue)](https://jobhunt-ebsr.onrender.com/)

A comprehensive, production-ready **MERN stack** job board application that connects talented job seekers with innovative employers. Built with modern technologies, robust security, and an exceptional user experience.

---

## ✨ Key Features

This platform is designed with two core user roles:

### 🎯 For Job Seekers (Developers)
* **🔐 Secure Authentication** - JWT-based login/registration system.
* **🔍 Advanced Job Search** - Real-time search with multi-criteria filters (location, salary, job type, experience).
* **💼 One-Click Applications** - Streamlined application process.
* **📊 Application Tracking** - Monitor application status and history.
* **👤 Profile Management** - Comprehensive profile with resume upload capability.
* **📱 Mobile-First Design** - Fully responsive across all devices.

### 🏢 For Employers (Recruiters)
* **🎯 Job Posting Management** - Create, edit, and manage job listings with full CRUD support.
* **👥 Applicant Dashboard** - Review, filter, and manage applications efficiently.
* **✅ Application Management** - Accept/reject applications with direct feedback mechanisms.

---

## 🛠️ Technology Stack

The project leverages a modern, high-performance stack for both frontend and backend development.

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Core** | ⚛️ **React 19 (via Vite)** | Component-based UI built with the **Vite** next-gen tooling. |
| | 🎯 **Redux Toolkit** & **Redux Persist** | Robust state management with support for local storage persistence. |
| | 🧭 **React Router DOM** | Handles declarative client-side routing. |
| **Backend Core** | 🚀 **Node.js & Express.js** | High-performance, scalable server architecture (Inferred from structure). |
| | 🗄️ **MongoDB & Mongoose** | Scalable NoSQL database (Inferred from stack). |
| **Styling & UI** | 🎨 **Tailwind CSS** | Utility-first framework for rapid, custom styling. |
| | ♿ **Radix UI Primitives** | Provides highly accessible, unstyled components (Dialog, Popover). |
| | **Framer Motion** | Used for smooth, professional animations. |
| **Communication** | 📡 **Axios** | Promise-based HTTP client for API interaction. |

---

## 🚀 Quick Start Guide

This guide details how to set up the application on your local machine.

### Prerequisites

Ensure you have the following installed:

* **Node.js** >= 16.0.0
* **MongoDB** >= 5.0 (Running locally or accessible via URL)
* **npm** >= 8.0.0

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Sreenu-y/JobHunt.git](https://github.com/Sreenu-y/JobHunt.git)
    cd JobHunt
    ```

2.  **Install dependencies:**
    The project uses a monorepo structure (root for backend, `client` for frontend).
    ```bash
    # Install server dependencies (in the root folder)
    npm install

    # Install client dependencies (navigate to the client folder)
    cd client && npm install && cd ..
    ```

3.  **Environment Setup**
    * Create a **`.env`** file in the root directory for **Server** variables.
    * Create a **`client/.env`** file in the `client/` directory for **Client** variables.
    * Configure the required variables (listed in the next section).

4.  **Start Development Servers**
    * Start the **backend server (Port 3000)**:
        ```bash
        npm run dev 
        ```
    * In a **separate terminal**, start the **frontend (Vite, Port 5173)**:
        ```bash
        cd client && npm run dev
        ```

---

## 🌐 Live Application

The JobHunt platform is live and publicly accessible!

🚀 **Ready to revolutionize job hunting?** Visit the live application here:

**[https://jobhunt-ebsr.onrender.com/]**

---

## 🔧 Environment Variables

### Server (`.env`)
| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `MONGO_URL` | Your MongoDB connection string. | `mongodb://localhost:27017/jobhunt` |
| `SECRET_KEY` | Secret key for JWT signing. | `your_super_secure_jwt_secret_key_here` |
| `PORT` | Backend server port. | `3000` |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary name for file uploads. | `your_cloudinary_cloud_name` |
| `CLOUDINARY_API_KEY` | Cloudinary API Key. | `your_cloudinary_api_key` |
| `CLOUDINARY_API_SECRET` | Cloudinary API Secret. | `your_cloudinary_api_secret` |

### Client (`client/.env`)
| Variable | Description | Example Value |
| :--- | :--- | :--- |
| `VITE_API_BASE_URL` | Base URL of the backend API. | `http://localhost:3000` |

---

## 📚 API Documentation

The RESTful API is structured into versions (`/api/v1`) and organized by resource.

* **Public Endpoints (No Auth):** Login, Register, Get Jobs.
* **Protected Endpoints (Auth Required):** Post Job, Apply for Job, Get Applications.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the platform:

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4.  Push to the branch.
5.  Open a Pull Request.

---

Built with ❤️ by **Yelesam Sreenu**

**Sreenu-y** - [srinuyelesam123@gmail.com]

Project Link: [https://github.com/Sreenu-y/JobHunt](https://github.com/Sreenu-y/JobHunt)
***NOTE: The live application is now deployed. Run it locally to explore the development setup.***
