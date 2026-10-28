<div align="center">

<img src="https://img.shields.io/badge/Status-In%20Development-f97316?style=flat-square" alt="Status" />
<img src="https://img.shields.io/badge/Version-0.1.0-853DD8?style=flat-square" alt="Version" />
<img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square" alt="License" />

<br/><br/>

# ✒️ Signature Studio

**A modern, multi-tenant B2B email signature generator with dynamic mapping and RBAC.**

Signature Studio is a full-stack SaaS platform designed for companies to centrally manage, standardize, and distribute professional email signatures across different departments and tenants.

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</div>

---

## Overview

Signature Studio streamlines the creation of corporate email signatures. Instead of manually editing HTML files, administrators can paste raw HTML templates with variables (e.g., `${name}`, `${email}`). The system automatically parses these tags and builds a user-friendly, dynamic form.

Built with a multi-tenant architecture, the platform isolates templates and user bases per company, dynamically adapting the UI's primary colors to match the active tenant's branding.

---

## Features

**🛠️ Dynamic Signature Builder**
* **HTML Parsing:** Automatically detects variables (e.g., `${role}`, `${phone}`) from raw HTML inputs.
* **Dynamic Form Generation:** Maps extracted variables to a clean, user-friendly toggle and input list.
* **Live Preview:** Real-time visual rendering of the signature as data is typed.
* **Export & Copy:** Sanitized HTML export ready for Gmail, Outlook, or Apple Mail.

**Authentication & Multi-Tenant**
* OAuth 2.0 integration (Google & Microsoft Workspace).
* Complete data isolation per company/tenant.
* Dynamic UI theming (Accent colors dynamically change based on the active company).
* Native Light and Dark mode support.

**Role-Based Access Control (RBAC)**
* **Super Admin:** Global platform access and tenant creation.
* **Admin/Moderator:** Granular permissions (e.g., can manage templates but cannot add users).
* **Common User:** View-only access to assigned signatures.
* **Conditional UI:** Action buttons (Add, Edit, Delete) are strictly hidden from users without clearance.

**Audit & Management**
* User management by departments or roles (e.g., `@Devs`, `@Sales`).
* Signature assignment (Global, specific users, or by department).
* **Audit Logs:** Dedicated tracking for "Templates" and "Users" (tracks who created, edited, or deleted records).

---

## Tech Stack

| Layer | Technology | 
| ----- | ----- | 
| **Frontend** | React 18, TypeScript, Vite, Tailwind CSS, Lucide Icons | 
| **Backend** | Node.js, Express, TypeScript | 
| **Database** | PostgreSQL (via Prisma ORM) | 
| **Auth** | OAuth 2.0 (Google/Microsoft), JWT | 

---

## 📁 Project Structure

```text
Signature Studio/
├── frontend/          # React + Vite application
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       └── utils/     # Regex parsers for HTML tags
└── backend/           # Node.js + Express API
    └── src/
        ├── controllers/
        ├── middlewares/ # RBAC and Tenant validation
        ├── models/
        └── routes/
```

---

## Getting Started

### Prerequisites

* Node.js 18+
* PostgreSQL database
* Google/Microsoft OAuth credentials

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-nobre/Signature-Studio.git
cd Signature-Studio

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file inside `/backend`:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

### Running

```bash
# Start the backend (from /backend)
npm run dev

# Start the frontend (from /frontend)
npm run dev
```

* Frontend runs on `http://localhost:5173`
* Backend runs on `http://localhost:5000`

---

## Roadmap

- [x] Initial repository setup and architecture planning
- [ ] OAuth integration (Google & Microsoft)
- [ ] Multi-tenant database schema & RBAC middleware
- [ ] Dynamic Form Builder core logic (Regex HTML parser)
- [ ] UI/UX Layout (Sidebar, Live Preview, Dark/Light mode)
- [ ] Audit Logs module
- [ ] Export to HTML/Copy to clipboard functionality

---

## License

This project is licensed under the MIT License.

---

<div align="center">
  Built by <a href="https://github.com/dev-nobre">Gustavo Nobre</a>
</div>
