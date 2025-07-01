# 🏡 Real Estate Management App

A full-stack application for managing real estate agents, properties, and clients.  
Built using **Flask (Python)** for the backend and **React** for the frontend.

The assumption made is that this is an admin using the systmen not hte clients.
---

## ⚙️ Backend Setup

```bash
cd server
pipenv install
pipenv shell
export FLASK_App=app.py
flask run
```

Ensure your Flask app is running at:  
**http://localhost:5000**

---

## ⚛️ Frontend Setup

```bash
cd client
npm install
npm run dev
```

The React app should be available at:  
**http://localhost:3000**

---

## 🧠 Data Models

### Agent
- `id`: Integer  
- `name`: String  
- `number`: String  
- `email`: String  
- `phone_number`: String  

### Property
- `id`: Integer  
- `name`: String  
- `status`: String  
- `agent_id`: ForeignKey → Agent  

### Client
- `id`: Integer  
- `name`: String  
- `email`: String  
- `phone_number`: String  
- `agent_id`: ForeignKey → Agent  
- `property_id`: ForeignKey → Property  

---

## 🔄 API Endpoints

### Agents
- `GET /agents`  
- `POST /agents`  
- `DELETE /agents/<id>`

### Properties
- `GET /properties`  
- `POST /properties`

### Clients
- `GET /clients`  
- `POST /clients`

> All `POST` routes accept JSON payloads.

---

## 🧪 Validation

- **Frontend**:  
  Uses **Formik + Yup** for:
  - Required fields
  - Email format
  - Phone number pattern

- **Backend**:
  - Checks for required fields
  - Returns JSON errors with status codes

---

## 📂 Project Structure

```bash
root/
├── client/              # React frontend
│   └── src/
│       ├── components/
│       ├── api.js
│       ├── App.js
│       └── ...
├── server/              # Flask backend
│   ├── app.py
│   ├── models.py
│   ├── migrations/
│   └── ...
└── README.md
```

---

## 📌 Future Features (Stretch Goals)

- Many-to-many relationship for saved properties per client  
- Login system (JWT or sessions)  
- Filtering and sorting on frontend  
- Map view integration (e.g., Google Maps)  
- Upload property images  

---

## 🧑‍💻 Contributing

Feel free to fork and submit a PR if you'd like to add features or fix bugs.  
All contributions are welcome!

---


