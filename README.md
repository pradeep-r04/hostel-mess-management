# 🍽️ Mess Food Management System (Campus Cravings)

A full-stack **web application** for managing hostel mess food services.  
It allows **students/faculty** to register, log in, select food items based on the day and meal type, generate a **QR code** for their orders, and enables the **admin** to scan and view all mess orders in a tabular format.

---

## 🚀 Features

### 👨‍🎓 Student / Faculty
- Register as a new user with details like:
  - Name, Mobile, Enrollment No / Faculty ID, Mess ID, Course
- Login with Enrollment No, Name, and Password
- Select day & meal type (**Breakfast, Lunch, Snacks, Dinner**)
- View **pre-defined menu** for the chosen day & meal
- Enter quantity of items
- Generate **QR code** with food order details

---

### 🛠️ Admin
- Login with admin credentials
- View all orders in a **tabular format**
  - Student/Faculty details (Name, Enrollment No, Mess ID)
  - Ordered food items with quantities
  - Order timestamp (day, time, meal type)
- Data stored securely in MySQL

---

## 🏗️ Project Structure
Project/
│
├── backend/ # Node.js backend  
│ ├── app.js # Main server file  
│ ├── db.js # Database connection  
│ ├── routes/ # Express routes  
│ │ ├── auth.js # User register/login  
│ │ ├── food.js # Food order & QR generation   
│ │ └── admin.js # Admin login & orders view  
│ ├── package.json # Dependencies  
│ └── schema.sql # Database schema  
│  
├── database/  
│ └── schema.sql # SQL script to create DB & tables  
│  
├── frontend/ # Frontend (HTML, CSS, JS)  
│ ├── index.html # Homepage  
│ ├── login.html # Student/Faculty login  
│ ├── register.html # User registration  
│ ├── food.html # Food selection + QR code   
│ ├── admin.html # Admin login & order table  
│ └── css/ # Stylesheets (if any)  
│  
└── README.md # Project documentation  


---

## ⚙️ Setup Instructions

### 1️⃣ Install Dependencies
Make sure you have:
- [Node.js](https://nodejs.org/) installed
- [MySQL](https://dev.mysql.com/downloads/) installed & running

Clone the repo and install dependencies:
```
cd backend  
npm install  
```
### 2️⃣ Setup Database

Login to MySQL and create database + tables:  
```
SOURCE C:/path/to/schema.sql;
```
The schema creates:  
- users table  
- orders table  
- admins table  
Update db.js with your MySQL credentials.

### 3️⃣ Run the Server
```
node app.js  
```
Server will start at:
👉 http://localhost:5000

### 4️⃣ Run Frontend

Open any frontend HTML file (index.html, login.html, etc.) in a browser.  
Recommended: use Live Server extension (VS Code) for smoother experience.  

---

📡 API Endpoints  
User  
- ```POST /auth/register``` → Register new user  
- ```POST /auth/login``` → Login user  

Food  
- ```POST /food/order``` → Place order + generate QR  

Admin  
- ```POST /admin/login``` → Admin login  
- ```GET /admin/orders``` → Fetch all orders (with user details)   

---

## 📷 Screenshots (Sample)
Homepage – with banner, navigation, and login/register buttons  
Food Selection – choose day, meal type, and quantities  
QR Code – generated for student order  
Admin Panel – table with all student/faculty orders   

---

## 🔮 Future Improvements  
- Allow admin to scan QR codes directly via camera  
- Add weekly menu editor for admin  
- Improve UI with Tailwind/Bootstrap  

---

## 👨‍💻 Author  
Developed by ***Pradeep Singh ✨***  
For CDAC Hostel Mess Management.  

---

## Connect with me:
| Name    | Email              | LinkedIn                                      | GitHub                      | Instagram                     |
|---------|--------------------|-----------------------------------------------|-----------------------------|-------------------------------|
| Pradeep | [Email](pradeep.singh04r@gmail.com)  | [LinkedIn](https://linkedin.com/in/pradeep-singh4) | [GitHub](https://github.com/pradeep-r04) | [Instagram](https://instagram.com/whypradeeep) |    


