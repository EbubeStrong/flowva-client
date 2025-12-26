# Flowva

A React + TypeScript + Vite project for a dashboard-style web application.

## Features

- **Routing:** Uses `react-router-dom` for client-side routing.
- **Authentication:** Includes authentication pages (Sign In, Sign Up, Forgot Password) and protected dashboard routes.
- **Dashboard:** Multiple dashboard sections:
  - Home
  - Discover
  - Library
  - Tech Stack
  - Subscriptions
  - Rewards
  - Account Settings
- **Layouts:** Separate layouts for authentication and dashboard pages.
- **Error Handling:** Custom 404 Not Found page.

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

- The root route (`/`) redirects to `/dashboard` for a better user experience.
- Authentication checks are handled via the `CheckAuth` component (see `src/components/common/check-auth.tsx`).
- The project uses Vite for fast development and build times.
- ESLint and TypeScript are configured for code quality and type safety.

## ESLint & TypeScript

See below for recommended ESLint configuration for type-aware linting and React-specific rules.

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

## License

MIT