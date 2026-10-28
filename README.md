 <div align="center">

<img src="https://img.shields.io/badge/Status-In%20Development-f97316?style=flat-square" alt="Status" />
<img src="https://img.shields.io/badge/Version-0.1.0-853DD8?style=flat-square" alt="Version" />
<img src="https://img.shields.io/badge/License-MIT-22c55e?style=flat-square" alt="License" />

<br /><br />

# Signature Studio

**A modern workspace for creating and managing professional email signatures.**

Signature Studio is a web application in development that aims to help teams create, standardize, and manage professional email signatures through a centralized workspace.

The project currently focuses on the application layout, navigation, and appearance preferences, laying the foundation for a more complete signature management platform.

</div>

---

## Overview

Managing consistent email signatures across a team can be time-consuming. Signature Studio aims to simplify this process by bringing signature creation and management into one workspace.

The application is being developed with a focus on a clean interface, reusable components, maintainable architecture, and a foundation that can support future team management and signature generation features.

## Features

### Currently Implemented

- **Application layout:** Shared application structure and navigation.
- **Sidebar navigation:** Access to the main application sections.
- **Appearance settings:** Dedicated settings page for interface preferences.
- **Light and dark themes:** Manually selectable themes with local persistence.
- **System theme preference:** Support for following the operating system's appearance preference.
- **Font size settings:** Small, Default, and Large options.
- **Persistent preferences:** Theme and font size preferences are saved locally in the browser.
- **Responsive interface styling:** Utility-based styling with Tailwind CSS.
- **Reusable UI components:** Shared components for consistent interactions and visual states.

> Features are listed as implemented only when they are present in the current application code. See the roadmap for planned functionality.

### Planned Features

- **Signature editor:** Create and edit email signatures.
- **Dynamic templates:** Support reusable signature templates and configurable fields.
- **Live preview:** Preview signatures while editing.
- **HTML export:** Copy or export signatures for use in email clients.
- **Team management:** Organize users and signatures by team or department.
- **Authentication:** Secure sign-in and account management.
- **Role-based access control (RBAC):** Permission-based access to administrative features.
- **Multi-tenant architecture:** Support separate organizations and their settings.
- **Audit logs:** Track important changes to templates and user records.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js with App Router |
| Language | TypeScript |
| UI Library | React |
| Styling | Tailwind CSS 4 |
| Build Tooling | Next.js with Turbopack |
| Linting | ESLint |
| Package Manager | npm |

Additional infrastructure, including database persistence, authentication, and authorization, may be introduced as the application evolves.

---

## Project Structure

The project uses the Next.js App Router and organizes application routes and reusable components separately.

```text
signature-studio/
├── app/
│   ├── (app)/
│   │   ├── history/
│   │   ├── settings/
│   │   │   └── appearance/
│   │   ├── signatures/
│   │   └── team/
│   ├── globals.css
│   └── layout.tsx
├── components/
│   ├── font-size-selector.tsx
│   ├── theme-toggle.tsx
│   └── ...
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

*The tree above is a representative overview. Individual files and folders may change as development progresses.*

---

## Getting Started

### Prerequisites

- Node.js version compatible with the installed Next.js version.
- npm.

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/dev-nobre/Signature-Studio.git
cd Signature-Studio
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The application supports hot reloading during development.

### Run Linting

```bash
npm run lint
```

### Create a Production Build

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## Development Workflow

The project uses feature branches to keep changes focused and easier to review.

Examples:

```text
feat/appearance-settings
feat/signature-editor
```

Commit messages follow the Conventional Commits convention:

```text
feat: add appearance settings
fix: synchronize theme preferences
docs: update project README
```

Run linting and the production build before considering a change complete.

---

## Roadmap

- [x] Initial Next.js application setup
- [x] Application layout and navigation
- [x] Settings page structure
- [x] Light and dark theme preferences
- [x] Font size preferences
- [ ] Complete and validate system theme synchronization
- [ ] Signature editor interface
- [ ] Dynamic signature templates
- [ ] Live signature
