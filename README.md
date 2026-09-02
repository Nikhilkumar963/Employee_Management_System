#  Employee Management System

A simple and organized tool to manage all your employee information in one place — no more scattered spreadsheets or lost records.

---

##  What is this?

Ever tried managing a team and realized employee info is everywhere — one person's details in a spreadsheet, another's in an email, attendance tracked on a sticky note? That's exactly the problem this project solves.

The **Employee Management System (EMS)** is a web application that lets HR teams and managers store, view, update, and manage employee data easily. Think of it as a central home for everything related to your workforce.

---

##  What can it do?

- **Store employee info** — names, contact details, job roles, and more
- **Track attendance** — know who's in and who's out
- **Monitor performance** — keep records that help with reviews and decisions
- **Manage roles** — assign and update job positions without any hassle
- **Quick access** — find any employee's details in seconds instead of digging through files

---

##  Tech Stack

This project is split into two parts — a backend that handles the data and logic, and a frontend that you actually see and interact with.

**Backend**
- Java 17
- Spring Boot 4.0.4 (REST APIs)
- Spring Data JPA (talks to the database)
- MySQL (stores all the data)
- Lombok (keeps the code clean)
- Maven (build tool)

**Frontend**
- JavaScript
- HTML & CSS
- Lives in the `PojectEMS-fs` folder

---

##  Project Structure

```
Employee_Management_System/
│
├── src/                    # All backend Java code lives here
│   └── main/java/...       # Spring Boot application, controllers, models, repos
│
├── PojectEMS-fs/           # Frontend code (JS, HTML, CSS)
│
├── .mvn/wrapper/           # Maven wrapper so you don't need Maven installed
├── pom.xml                 # Project dependencies and build config
├── mvnw                    # Run Maven on Linux/Mac
└── mvnw.cmd                # Run Maven on Windows
```

---

##  Getting Started

Follow these steps and you'll have it running locally in no time.

### What you'll need

- Java 17 or higher
- MySQL (make sure it's running)
- Node.js (for the frontend)
- A code editor (VS Code, IntelliJ, whatever you like)

### Step 1 — Clone the repo

```bash
git clone https://github.com/Nikhilkumar963/Employee_Management_System.git
cd Employee_Management_System
```

### Step 2 — Set up the database

Open MySQL and create a database:

```sql
CREATE DATABASE emp_management;
```

Then update the database credentials in:

```
src/main/resources/application.properties
```

Something like:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/emp_management
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### Step 3 — Run the backend

```bash
./mvnw spring-boot:run
```

On Windows:

```bash
mvnw.cmd spring-boot:run
```

The backend will start at `http://localhost:8080`

### Step 4 — Run the frontend

```bash
cd PojectEMS-fs
npm install
npm start
```

Open your browser and go to `http://localhost:3000` (or whichever port it starts on).

---

##  API Overview

The backend exposes REST APIs that the frontend uses. Here's a rough idea of what's available:

| Method | Endpoint | What it does |
|--------|----------|--------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get one employee |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/{id}` | Update employee details |
| DELETE | `/api/employees/{id}` | Remove an employee |

---

## Who is this for?

- HR teams who want a cleaner way to manage employee records
- Small to medium-sized businesses that don't need a heavy enterprise solution
- Developers looking to learn full-stack Java + JavaScript development
- Students building real-world portfolio projects
- To manage employe detailes easier and more organized

---

##  Author

**Nikhilkumar963**
GitHub: [@Nikhilkumar963](https://github.com/Nikhilkumar963)

---

## 📄 License

This project is open source. Feel free to use it, learn from it, or build on top of it.

---

> Built to make HR tasks simpler, faster, and less painful. 
