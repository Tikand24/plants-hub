# Plants Hub - AI Coding Agent Instructions

## Project Overview
This is "Alto Jardin" - an Astro-based plant nursery catalog website for a Colombian business specializing in ornamental plants, succulents, palms, and flowers. The site features a content-managed plant database, quotation system, and Colombian peso pricing.

## Architecture & Tech Stack

**Framework**: Astro 5.7+ with SSR (server-side rendering) via Vercel adapter
**Styling**: Tailwind CSS 4.x (no config file - uses inline `@theme` in global.css)
**Content**: Astro Content Collections for type-safe plant data management
**Deployment**: Vercel with analytics enabled

## Key Components & Data Flow

### Content Management System
- **Plant Data**: Lives in `src/content/plants/*.md` frontmatter using strict Zod schema
- **Schema**: Defined in `src/content/config.ts` with required fields: `_id`, `name`, `price`, `medias[]`, `type[]`, timestamps
- **Images**: Referenced via `medias` array with `filename` (Astro Image component), `url`, and `_id`
- **Pricing**: Multi-tier system via `type` array (different sizes/varieties per plant)

### Component Patterns
- **CardPlant.astro**: Main plant display component with localStorage-based quotation cart
- **PlantList.astro**: Pagination system (9 items per page) with "Load More" functionality
- **Layout.astro**: Comprehensive SEO with JSON-LD structured data for garden center business

### State Management
- **Client-side cart**: Uses localStorage with key `quotationItems` (array of plant `_id`s)
- **Quotation flow**: Cart → `/solicitar-cotizacion?ids=comma,separated,ids` → Form submission
- **Button states**: Dynamic "Cotizar"/"Agregado" with CSS class switching

## Development Workflows

### Common Commands
```bash
npm run dev --host    # Dev server accessible on network
npm run build         # Type check + build (required for deployment)
npm run preview       # Test production build locally
```

### Adding New Plants
1. Create `src/content/plants/plant-name.md` with required frontmatter schema
2. Use existing plants as templates (see `abanos.md`)
3. Place images in `src/images/` and reference in `medias` array
4. Ensure `_id` is unique string, `price` is number, `type` array for variants

### Styling Conventions
- **Color System**: Custom CSS variables in `src/styles/global.css` (`--color-primary`, `--color-secondary`, etc.)
- **Currency**: Always format with `toLocaleString('es-CO', { style: 'currency', currency: 'COP' })`
- **Responsive**: Mobile-first design with `lg:` prefixes for desktop
- **Typography**: Spanish content, use proper accent marks and Colombian business terminology

## Critical Patterns

### Image Handling
```astro
// Fallback pattern used throughout
{firstImage ? (
  <Image src={firstImage} alt={name} width={400} height={300} />
) : (
  <Image src={logoFinal} alt={name} width={400} height={300} />
)}
```

### Client-side Scripts
- **Astro transitions**: Always wrap in `document.addEventListener("astro:page-load", fn)`
- **Persistence**: Cart state survives navigation via localStorage
- **Button state sync**: Check localStorage on page load to update button appearance

### SEO Structure
- **Multilingual**: Spanish primary language (`lang="es"`, `locale="es_CO"`)
- **Business Schema**: Garden center with Colombian address, COP currency
- **Meta patterns**: Every page needs title, description, and OG image

## File Structure Logic
```
src/
├── content/plants/     # Plant database (markdown + frontmatter)
├── components/         # Reusable Astro components
├── pages/             # Route-based pages (index, quotation, dynamic plant pages)
├── layouts/           # Layout wrapper with SEO and navigation
├── types/             # TypeScript interfaces (plants.d.ts)
└── styles/global.css  # Tailwind + custom properties
```

## Common Gotchas
- **TypeScript**: Strict Zod validation on content collections - match schema exactly
- **Image imports**: Use `import` statements for static images in components
- **Currency formatting**: Always use Colombian peso formatting for consistency
- **Client scripts**: Must handle Astro's page transitions - avoid standard DOM events
- **Content sorting**: Plants with images display first (see PlantList.astro sorting logic)

## Business Context
- **Target market**: Colombian plant enthusiasts, garden centers, landscapers
- **Pricing**: Colombian pesos (COP), wholesale-oriented pricing structure
- **Content**: Plants have detailed care instructions, toxicity warnings where applicable
- **Quotation system**: B2B-focused with quantity controls and transport considerations