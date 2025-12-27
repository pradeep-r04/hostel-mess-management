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
|  
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
## Homepage – with banner, navigation, and login/register buttons  
<img width="1919" height="1016" alt="Image" src="https://github.com/user-attachments/assets/068d4410-b263-4863-9290-a222abfb5f53" />  
<img width="1919" height="1016" alt="Image" src="https://github.com/user-attachments/assets/d330a6a5-afaf-439a-9758-428cf4f12e36" />  
<img width="1919" height="1015" alt="Image" src="https://github.com/user-attachments/assets/8a4c79e8-c83b-49fc-a362-587c7b675806" />  

---
## Food Selection – choose day, meal type, and quantities  
<img width="1919" height="1016" alt="Image" src="https://github.com/user-attachments/assets/d5c46e3a-c441-4436-94d7-92ecd1e1357c" />  

---
## Student/Faculty Login  
<img width="1919" height="1016" alt="Image" src="https://github.com/user-attachments/assets/f6f61376-785c-464d-8869-6a16ffbca7c3" />  

---
## Admin Login  
<img width="1919" height="1015" alt="Image" src="https://github.com/user-attachments/assets/5f715d79-4600-4a01-8745-39ebb12cf457" />   

---
## Register New User   
<img width="1919" height="1015" alt="Image" src="https://github.com/user-attachments/assets/4bd04397-bc97-44bd-a095-59edf16dffb0" />

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

## ✍️ About Developer  
<p align="center">
  <img src="https://github.com/user-attachments/assets/a615929b-6615-46fc-9046-19a7ed74d5c0" alt="Developer Image" width="200"/>
</p>

<h3 align="center">Pradeep Singh</h3>

<p align="center">
  <a href="https://github.com/pradeep-r04">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://www.linkedin.com/in/pradeep-singh4/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
  </a>
	<a href="https://www.instagram.com/in/whypradeeep/">
    <img src="https://img.shields.io/badge/Instagram-F72D3B?style=for-the-badge&logo=instagram&logoColor=white"/>
  </a>
</p>



## Connect with me:
| Name    | Email              | LinkedIn                                      | GitHub                      | Instagram                     |
|---------|--------------------|-----------------------------------------------|-----------------------------|-------------------------------|
| Pradeep | [Email](pradeep.singh04r@gmail.com)  | [LinkedIn](https://linkedin.com/in/pradeep-singh4) | [GitHub](https://github.com/pradeep-r04) | [Instagram](https://instagram.com/whypradeeep) |    


