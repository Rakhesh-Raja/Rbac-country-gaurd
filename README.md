# Rbac-country-gaurd
Production-style authorization system built with NestJS, demonstrating JWT authentication, Role-Based Access Control (RBAC), and Country-based authorization using custom guards and decorators.

🔗 Why this project matters

This project demonstrates how real backend systems handle authorization, beyond basic login:

Fine-grained role control

Geo / country-based access

Custom Guards + Decorators

Scalable, modular NestJS design

This is the kind of backend logic used in SaaS, fintech, food delivery, and admin dashboards.

✨ Key Features

🔐 JWT Authentication (Passport)

🧑‍⚖️ Role-Based Access Control (Admin / Manager / User)

🌍 Country-based route protection

🧱 Custom Guards & Decorators

🗄️ TypeORM + SQLite (local dev)

🧩 Modular, maintainable structure

🧪 Ready for Postman / API testing

🧠 Concepts Demonstrated

Authentication vs Authorization

NestJS Guards lifecycle

Reflector & metadata usage

Enum-driven permissions

Clean separation of concerns

DB limitations handling (SQLite enums)

🛠️ Tech Stack
Layer	Technology
Framework	NestJS
Language	TypeScript
Auth	JWT + Passport
ORM	TypeORM
Database	SQLite
Runtime	Node.js
📁 Folder Structure
src/
├── auth/                 # Login, JWT strategy
├── common/
│   ├── decorators/       # @Roles, @AllowedCountries
│   ├── enums/            # Role, Country enums
│   └── guards/           # JWT, RBAC, Country guards
├── users/                # User entity & module
├── restaurants/          # Sample protected resource
├── orders/               # Sample protected resource
├── app.module.ts
└── main.ts

🔐 Authorization Flow

User logs in

Server issues JWT

Request passes through:

JwtAuthGuard

RolesGuard

CountryGuard

Access granted or denied

Request
  ↓
JWT Guard
  ↓
Role Guard
  ↓
Country Guard
  ↓
Controller

🧑‍⚖️ RBAC Example
@Roles(Role.ADMIN)
@UseGuards(JwtAuthGuard, RolesGuard)
@Get('admin')
getAdminData() {
  return 'Admin only';
}

🌍 Country Guard Example
@AllowedCountries(Country.INDIA)
@UseGuards(JwtAuthGuard, CountryGuard)
@Get('india-only')
getIndiaData() {
  return 'Accessible only in India';
}


⚙️ Setup Instructions
1️⃣ Clone the repo
git clone https://github.com/your-username/nestjs-rbac-country-guard.git
cd nestjs-rbac-country-guard

2️⃣ Install dependencies
npm install

3️⃣ Run the server
npm run start:dev


Server runs at:

http://localhost:3000

🗄️ Database Notes

Uses SQLite for simplicity

Database auto-creates on first run

Enums stored as TEXT (SQLite limitation)

Easily switchable to PostgreSQL for production.

🧪 API Testing

Use Postman or similar tool:

Authorization: Bearer <JWT_TOKEN>


Test:

Admin-only routes

Country-restricted routes

Unauthorized access

🚀 Future Enhancements

Swagger API documentation

Refresh tokens

User registration

Role & country seeding

PostgreSQL migration

Rate limiting
