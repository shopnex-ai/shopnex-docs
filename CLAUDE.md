# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production (static export)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint with auto-fix
- `pnpm format` - Format code with Prettier

## Architecture Overview

This is a **Next.js documentation site** using:
- **Nextra** (nextra-theme-docs) - Static site generator for documentation
- **Next.js 15** with App Router architecture
- **Static export** configuration (output: 'export' in next.config.ts)
- **TypeScript** with strict configuration
- **Tailwind CSS** for styling
- **next-intl** for internationalization
- **MDX** for documentation content

### Key Structure

- `src/app/(docs)/` - Documentation pages using Nextra layout
- `src/app/layout.tsx` - Root layout with fonts and i18n setup
- `src/templates/Logo.tsx` - ImproveFolio brand logo component
- `src/messages/` - i18n message files (en.json, fr.json)
- `next.config.ts` - Configured for static export with Nextra and next-intl

### Important Notes

- Project uses **pnpm** as package manager
- Site is configured for **static export** - no server-side features
- Documentation content is written in **MDX** format
- Brand is "ShopNex.AI" Ecommerce platform despite "shopnex-docs" package name
- Uses custom Logo component with gradient styling and neutral mode