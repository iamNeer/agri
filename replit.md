# AgriVision - Smart Agriculture Platform

## Overview

AgriVision is an AI-powered precision farming platform that combines Machine Learning, Computer Vision, and real-time climate data to optimize agricultural yields. The application provides crop recommendations, soil analysis, disease detection, and weather integration through a modern web interface.

The project uses a hybrid architecture with a React frontend, Node.js/Express server for static file serving and proxying, and a Django backend for API endpoints and ML model inference.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **State Management**: TanStack React Query for server state and caching
- **Animations**: Framer Motion for UI animations
- **Form Handling**: React Hook Form with Zod validation

The frontend is a multi-page application with separate routes for Home, About, Features, Architecture, Tech Stack, Team, Demo, and Contact. Components are organized into layout components (Navbar, Footer, Layout) and section components for each feature area. Navigation between pages uses wouter routing.

### Backend Architecture
- **Primary Server**: Node.js with Express (serves frontend and proxies API requests)
- **API Backend**: Django with Django REST Framework for ML model inference and data processing
- **Proxy Pattern**: Express proxies all `/api/*` requests to Django running on port 8000

In development mode, the Express server automatically spawns the Django process (port 8000) and proxies `/api/*` requests to it. The Django backend handles contact form submissions and can be extended for ML model endpoints.

**Development Flow:**
1. `npm run dev` starts Express server on port 5000
2. Express automatically spawns Django on port 8000
3. API requests are proxied from Express to Django
4. React frontend served via Vite dev server

**Production Note:** For production deployment, Django must be deployed separately (e.g., Gunicorn + Nginx) and the proxy target updated accordingly.

### Data Storage
- **PostgreSQL**: Primary database configured via Drizzle ORM
- **Schema Location**: `shared/schema.ts` defines database tables using Drizzle
- **Django Models**: Separate Django models in `django_backend/api/models.py` for the Django-managed data
- **In-Memory Fallback**: `MemStorage` class in `server/storage.ts` for development without database

### Database Schema
Current schema includes:
- `contact_submissions`: Stores contact form entries with firstName, lastName, email, message, and timestamp

### Build System
- **Development**: Vite dev server with HMR for frontend, tsx for server
- **Production Build**: esbuild bundles server code, Vite builds frontend to `dist/public`
- **Database Migrations**: Drizzle Kit with `db:push` command

## External Dependencies

### Third-Party APIs (Planned)
- OpenWeather API for weather data
- NASA POWER for climate data
- AgroMonitoring for agricultural insights

### Key NPM Packages
- `@tanstack/react-query`: Data fetching and caching
- `drizzle-orm` / `drizzle-zod`: Database ORM and schema validation
- `framer-motion`: Animations
- `http-proxy-middleware`: API request proxying to Django
- Radix UI primitives: Accessible UI components

### Python Dependencies (Django)
- Django 5.x with Django REST Framework
- CORS headers middleware for cross-origin requests
- SQLite for development (configurable for PostgreSQL)

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required for Drizzle)
- `SECRET_KEY`: Django secret key (has insecure default for development)