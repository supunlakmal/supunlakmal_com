# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 application using the App Router architecture, React 19, TypeScript, and Tailwind CSS v4. The project was bootstrapped with `create-next-app` and uses Turbopack for faster builds.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack on http://localhost:3000. The app auto-reloads when files are edited.

### Building for Production
```bash
npm run build
```
Creates an optimized production build using Turbopack.

### Starting Production Server
```bash
npm start
```
Runs the production build locally (must run `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Architecture

### App Router Structure
- Uses Next.js App Router (`app/` directory)
- `app/layout.tsx`: Root layout with Geist font family (sans and mono variants)
- `app/page.tsx`: Home page component
- `app/globals.css`: Global styles with Tailwind directives

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` maps to project root
- Target: ES2017
- Module resolution: bundler

### Styling
- **Tailwind CSS v4** with PostCSS plugin (`@tailwindcss/postcss`)
- Configuration in `postcss.config.mjs`
- Global styles in `app/globals.css`
- Custom CSS variables for Geist fonts (`--font-geist-sans`, `--font-geist-mono`)

### ESLint Setup
- Uses flat config format (`eslint.config.mjs`)
- Extends `next/core-web-vitals` and `next/typescript`
- Ignores: `node_modules/`, `.next/`, `out/`, `build/`, `next-env.d.ts`

## Key Dependencies

**Runtime:**
- Next.js 15.5.4 with Turbopack
- React 19.1.0
- React DOM 19.1.0

**Development:**
- TypeScript 5.x
- Tailwind CSS v4 with PostCSS plugin
- ESLint 9.x with Next.js config

## Notes

- Turbopack is enabled by default for both dev and build commands
- Uses Next.js `next/font` optimization for Geist fonts
- Static assets are in `public/` directory
