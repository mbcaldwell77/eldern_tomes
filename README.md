# Ældern Tomes Website

This is the official website for Ældern Tomes. This document provides all the necessary information for developers to get started with the project, understand its structure, and contribute effectively.

## Project Purpose

This project is a modern, responsive website built to serve as the online presence for Ældern Tomes. It is designed to be easily maintainable and scalable.

## Tech Stack

This project is built with a modern, component-based architecture using the following technologies:

- **Framework**: [React](https://react.dev/) with [Vite](https://vitejs.dev/) for a fast development experience.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.
- **UI Components**: A combination of custom components and primitives from [Shadcn/UI](https://ui.shadcn.com/), which uses Radix UI and `lucide-react` for icons.
- **Routing**: [React Router](https://reactrouter.com/) for client-side navigation.
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for schema validation.
- **Package Manager**: [pnpm](https://pnpm.io/) for efficient dependency management.
- **Linting**: [ESLint](https://eslint.org/) to ensure code quality and consistency.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/installation)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd eldern-tomes
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```bash
pnpm run dev
```

This will start the application on `http://localhost:5173` (or the next available port). The server supports Hot Module Replacement (HMR), so changes will be reflected in real-time.

## Building for Production

To create a production-ready build of the application, run:

```bash
pnpm run build
```

This command bundles the application and outputs the static files to the `dist/` directory.

## Deployment

This project is configured for seamless deployment on [Vercel](https://vercel.com/).

1.  **Push your code** to a GitHub, GitLab, or Bitbucket repository.
2.  **Import the project** into Vercel.
3.  Vercel will automatically detect the project as a Vite application and configure the build settings:
    - **Build Command**: `pnpm run build`
    - **Output Directory**: `dist`
4.  **Deploy** the project.

The site will be deployed to a live URL. Custom domains can be configured in the Vercel dashboard.
