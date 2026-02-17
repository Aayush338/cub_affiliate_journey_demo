# Project Directory Structure

This project follows a scalable Next.js architecture using a `src` directory. Below is an explanation of the purpose for each folder.

## Root Directories

- `src/`: Contains all the application source code.
- `public/`: Contains static assets like images, fonts, and icons that are served directly.

## `src/` Subdirectories

- `app/`: The Next.js App Router directory. Contains routes, layouts, and pages.
- `components/`: Reusable UI components.
    - `ui/`: Atom-level components (buttons, inputs, etc., often from a library like Shadcn UI).
    - `common/`: Shared components used across different features.
    - `features/`: Complex components specific to certain features or pages.
- `lib/`: Shared utility functions, constants, and third-party library configurations (e.g., Prisma client, Supabase client).
- `hooks/`: Custom React hooks for shared logic.
- `services/`: Logic for API calls and data fetching.
- `types/`: TypeScript interfaces and type definitions.
- `assets/`: Global assets like images (that might need processing), SVG icons, etc.
- `styles/`: Global CSS/SCSS files and theme definitions.
- `context/`: React context providers for state management.

## Path Aliases

The project uses the following path aliases (configured in `tsconfig.json`):

- `@/*`: `src/*`
- `@components/*`: `src/components/*`
- `@lib/*`: `src/lib/*`
- `@hooks/*`: `src/hooks/*`
- `@services/*`: `src/services/*`
- `@types/*`: `src/types/*`
- `@assets/*`: `src/assets/*`
- `@styles/*`: `src/styles/*`
- `@context/*`: `src/context/*`
