# 🗂 Notes API - Backend

This is the backend for the Markdown Notes App.  
It’s built using **Node.js + Express + MongoDB Atlas**.  
The API supports creating, editing, deleting and listing notes.

---

## 🚀 Live API

🔗 `https://notes-backend-0g16.onrender.com/api/notes`

---

## 📦 Tech Used

- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- CORS  
- dotenv

---

## 📌 Features

✔ Create new notes  
✔ Edit existing notes  
✔ Delete notes  
✔ Fetch all notes  
✔ JSON based REST API

---

## 📁 Project Structure

```
backend/
 ┣ models/
 ┃ ┗ Note.js
 ┣ routes/
 ┃ ┗ noteRoutes.js
 ┣ server.js
 ┣ package.json
 ┗ .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Project

```sh
git clone https://github.com/Rishi00009/Notes-App.git
cd backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Create `.env` File

```
MONGO_URI=YOUR_MONGO_ATLAS_URI
PORT=5000
```

### 4️⃣ Start Server

```sh
npm start
```

---

## 📡 API Endpoints

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update an existing note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🚧 Future Improvements

- JWT Authentication  
- Pagination  
- User Accounts  

---

## 💬 Author

Made by **Rishi M**

