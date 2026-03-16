# CafePOS

A simple Point-of-Sale (POS) system for a cafe — web interface for Cashier, Manager, and Admin, with a Node.js API backend for data management.

## Key Features

- Manage menu items and tables
- Process transactions and print receipts
- Transaction reports for managers
- User authentication (admin / cashier / manager)

## Project Structure

- `client/` — Frontend application (React + Vite)
- `server/` — API backend (Node.js, Express, Sequelize)

## Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express, Sequelize (MySQL/PostgreSQL)
- Migrations & seeders: Sequelize

## Requirements

- Node.js (LTS)
- npm or yarn
- Database (MySQL or PostgreSQL)

## Installation & Running

1. Clone the repository:

```bash
git clone <repo-url>
cd CafePOS
```

2. Setup backend:

```bash
cd server
npm install
#server/config/config.json or via environment variables
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

3. Setup frontend:

```bash
cd ../client
npm install
npm run dev
```

PORT ( `http://localhost:5173`) and use the backend API (`http://localhost:3000`).
