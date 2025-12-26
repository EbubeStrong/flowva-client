# Flowva

A React + TypeScript + Vite project for a dashboard-style web application.

This project recreates the Rewards page of Flowva using React and Supabase.

## Features

- **Routing:** Uses `react-router-dom` for client-side routing.
- **Authentication:** Includes authentication pages (Sign In, Sign Up, Forgot Password) and protected dashboard routes.
- **Error Handling:** Custom 404 Not Found page.
- Supabase authentication (email)
- Protected dashboard routes
- User-specific rewards tracking
- Daily claim logic with streak tracking
- Row Level Security (RLS)
- Loading and empty states


## Tech Stack
- React (Vite)
- Supabase (Auth + Database)
- Tailwind CSS
- React Router v6


🗄️ Database Schema

Table: `flowva_rewards`

| Column | Type |
|------|------|
| id | uuid |
| user_id | uuid |
| points | integer |
| streak | integer |
| last_claim_date | date |
| created_at | timestamptz |


## Security
Row Level Security ensures users can only access their own reward data.

## Project Structure

```
src/
  components/
    auth/
      layout.tsx
    common/
      check-auth.tsx
  pages/
    auth/
      login.tsx
      register.tsx
      forgot-password.tsx
    dashboard/
      layout.tsx
      home.tsx
      discover.tsx
      library.tsx
      tech-stack.tsx
      subscriptions.tsx
      rewards.tsx
      settings.tsx
    not-found/
      not-found.tsx
  providers/
    useAuth.ts
  App.tsx
```

## Routing Overview

- `/auth` – Authentication layout
  - `/auth/signin` – Login page
  - `/auth/signup` – Registration page
  - `/auth/forgot-password` – Password reset
- `/dashboard` – Dashboard layout (protected)
  - `/dashboard` – Home
  - `/dashboard/discover`
  - `/dashboard/library`
  - `/dashboard/tech-stack`
  - `/dashboard/subscriptions`
  - `/dashboard/earn-rewards`
  - `/dashboard/account-settings`
- `*` – 404 Not Found

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Notes

- Authentication checks are handled via the `CheckAuth` component (see `src/components/common/check-auth.tsx`).
- The project uses Vite for fast development and build times.
- ESLint and TypeScript are configured for code quality and type safety.
