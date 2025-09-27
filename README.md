# 📱 WhatsApp-like Chat App (Node.js + MongoDB)

This is a simple **chat management web app** built with **Node.js, Express, MongoDB, and EJS templates**.  
It’s not a real-time chat app, but a learning project to practice **CRUD operations** (Create, Read, Update, Delete) using a WhatsApp-style interface.

---

## 🚀 Features
- View all chats stored in MongoDB  
- Create new chat (with sender, receiver, and message)  
- Edit an existing chat (update the message content)  
- Delete a chat (optional if you add the route)  
- Messages are displayed in styled chat bubbles with timestamps  

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB with Mongoose  
- **Templating:** EJS (server-side rendering)  
- **Styling:** CSS (basic WhatsApp-like UI)  
- **Middleware:**  
  - `express.urlencoded` → handle form data  
  - `method-override` → enable PUT/DELETE from forms  

---

## 🔧 How It Works
1. **Home Page** → Navigate to `/chats` to see all stored chats  
2. **Create Chat** → Button redirects to `/chats/new`, where you can add a new message  
3. **Edit Chat** → Each chat has an "Edit" button (`/chats/:id/edit`) to update its message  
4. **Delete Chat** → (If implemented) allows removal of a chat using method-override with DELETE  

---

## 🎯 Learning Goals
This project was built to practice:  
- Setting up a full-stack **CRUD application** with Node.js & MongoDB  
- Using **EJS templates** for dynamic rendering  
- Handling **form submissions** and **method overrides**  


---

## 📂 Project Structure
