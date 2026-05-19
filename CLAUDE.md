# Gruenloh Equipment LLC — Website

A local equipment rental marketing website for Gruenloh Equipment LLC, Jacksonville, MO.
Goal: generate phone calls and establish Google presence for a business currently not on Google Maps.

## Project

- **Client:** Gruenloh Equipment LLC
- **Owner:** Denver Gruenloh
- **Phone:** (660) 676-8499
- **Email:** ddgruenloh@yahoo.com
- **Location:** Jacksonville, MO (Pike County)
- **Service area:** ~40 mile radius — Pike County, Bowling Green, Louisiana MO, Hannibal, Perry, Clarksville
- **GitHub:** https://github.com/BrandmageLLC/gruenloh-equipment

## Tech Stack

- Next.js 16 App Router (TypeScript)
- Tailwind CSS v4
- Framer Motion (animations)
- next/font (Barlow Condensed + Inter)
- @vercel/analytics
- sharp (image optimization)

## Commands

```bash
npm run dev        # Start dev server
npm run build      # Build and type-check
npm run lint       # ESLint
npm run git        # Commit + push (SSL-safe method)
```

## Deploying

Use `npm run git` to commit and push — handles SSL cert issues on this machine.
Never use plain `git push` — will fail with SSL errors.

## Design System

See [design-guardian agent](.claude/agents/design-guardian.md) for the full design system.

**Colors:**
- Dark bg: `#0F0E0D`
- Surface: `#1A1917`
- Primary orange: `#E05C1A`
- CTA yellow: `#F0A500`
- Body text: `#E8E4DC`
- Light section bg: `#F5F0EB`

**Fonts:** Barlow Condensed Bold (headings, uppercase) + Inter (body)

**Key rules:**
- NO rounded-3xl — sharp corners on equipment cards (rounded-sm max)
- NO fade-every-element-on-scroll
- NO AI-slop copy ("passionate about", "seamless experience")
- ALL phone numbers are tap-to-call `<a href="tel:6606768499">` links
- Mobile sticky phone bar is required on every page

## Agents

Specialized agents live in `.claude/agents/`. Use them:

- **frontend-dev** — All UI, components, pages, Tailwind, layouts
- **seo-specialist** — Schema markup, meta tags, sitemap, local SEO, keywords
- **design-guardian** — Design system enforcement, anti-slop audits
- **animation-director** — Framer Motion animations, scroll effects, micro-interactions
- **content-writer** — All copy, headlines, descriptions, FAQ, CTAs

## Site Structure

```
/                          → Homepage (hero, equipment grid, why us, service area, testimonials, FAQ, CTA)
/equipment                 → Equipment catalog
/equipment/skid-steer-rental
/equipment/mini-excavator-rental
/equipment/trailer-rental
/equipment/compact-track-loader-rental
/equipment/brush-hog-rental
/equipment/generator-rental
/service-area              → Coverage map + town list
/about                     → About Denver + the company
/contact                   → Contact form + phone
```

## Equipment Inventory

Current/likely fleet:
- Skid steer loader (Bobcat)
- Mini excavator (Kubota)
- Compact track loader
- 20ft tilt deck trailer
- Brush hog / finish mower
- Generator
- Plate compactor
- Auger attachments

## Critical Implementation Notes

1. Phone `(660) 676-8499` appears in: header, hero, sticky mobile bar, each equipment page CTA, FAQ, footer
2. All phone numbers are `<a href="tel:6606768499">` links — never plain text
3. LocalBusiness JSON-LD schema on homepage (see seo-specialist agent for exact structure)
4. `generateMetadata` on every page with geo-specific title + description
5. All images via `next/image` with descriptive, location-tagged alt text
6. `viewport: { once: true }` on all Framer Motion scroll animations
7. Sticky bottom phone bar: `fixed bottom-0 w-full z-50 md:hidden`

## Image Placeholders

Until client provides real photos:
- `bg-[#2C2A27]` placeholder with centered equipment name text
- File naming: `[equipment-type]-rental-jacksonville-mo.jpg`
- Alt text: "[Equipment name] available for rental in Jacksonville, Missouri"

## SEO Priority

1. Homepage: "equipment rental Jacksonville MO"
2. Each equipment page: specific keyword + Pike County/MO location
3. Service area page: lists all towns in coverage radius
4. LocalBusiness schema with areaServed array of 20+ towns
