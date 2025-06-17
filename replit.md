# Wesley Monteiro - Portfolio Website

## Overview

This is a modern, responsive portfolio website for Wesley Monteiro, a full-stack developer. The application is built as a Single Page Application (SPA) using React with TypeScript, featuring a professional design with smooth animations and a contact form with backend integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: In-memory storage (currently using MemStorage class)
- **API**: RESTful endpoints for contact form submission

### Design System
- **Component Library**: shadcn/ui components built on Radix UI
- **Theme**: Custom design tokens with CSS variables
- **Typography**: Inter font family
- **Color Scheme**: Neutral-based palette with blue primary color
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Landing area with call-to-action buttons
- **About Section**: Personal information and skills showcase
- **Projects Section**: Filterable project portfolio with categories
- **Contact Section**: Contact form with validation and submission
- **Footer**: Social links and copyright information

### Backend Components
- **Express Server**: Main application server with middleware
- **Route Handlers**: API endpoints for contact form and data retrieval
- **Storage Layer**: Abstracted storage interface (currently in-memory)
- **Validation**: Zod schemas for request/response validation
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Contacts Table**: Stores contact form submissions
  - id: Serial primary key
  - name: Contact name (required)
  - email: Contact email (required)
  - subject: Message subject (required)
  - message: Message content (required)
  - createdAt: Timestamp of creation

## Data Flow

1. **Client Request**: User interactions trigger React component updates
2. **Form Submission**: Contact form data is validated client-side with Zod
3. **API Request**: TanStack Query sends POST request to `/api/contact`
4. **Server Processing**: Express server validates and processes the request
5. **Database Storage**: Contact information is stored in PostgreSQL
6. **Response**: Success/error response sent back to client
7. **UI Update**: Toast notifications inform user of submission status

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Framer Motion
- **Utilities**: clsx, class-variance-authority, date-fns
- **Development**: Vite plugins, Replit integration tools

### Backend Dependencies
- **Server**: Express.js, HTTP server utilities
- **Database**: Drizzle ORM, Neon serverless driver
- **Validation**: Zod schema validation
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESLint/Prettier**: Code formatting and linting (configured via shadcn/ui)
- **Vite**: Fast development server with hot module replacement

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static assets served from the public directory

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution
- **Production**: Runs compiled JavaScript with Node.js
- **Database**: Requires `DATABASE_URL` environment variable
- **Port**: Configurable via environment, defaults to 5000

### Replit Integration
- **Auto-deployment**: Configured for Replit's autoscale deployment
- **Development**: Hot reload with Vite development server
- **Database**: PostgreSQL module enabled in Replit environment

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```