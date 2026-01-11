# TravelTrucks

Web app for browsing campers, applying filters, saving favorites, and viewing camper details with tabs (Features / Reviews) and booking form.

## Tech Stack

- **Next.js** (App Router)
- **TypeScript**
- **TanStack Query** (data fetching + caching)
- **Zustand** (global state)
- **CSS Modules**

## Features

- Catalog page:
  - filters panel (location, type, amenities)
  - load more / pagination UX
- Camper details page:
  - main details section
  - tabs navigation: **Features** / **Reviews**
  - booking slot (parallel route) with booking form
- Favorites:
  - add/remove camper to favorites
- Booking draft:
  - form draft sync (persist input while navigating)

## Pages & Routing (Next.js App Router)

- `/` — Home page
- `/catalog` — catalog list (route group `(list)`)
- `/catalog/[id]` — camper details (route group `(details)`)
- `/catalog/[id]/features` — Features tab page
- `/catalog/[id]/reviews` — Reviews tab page

### Parallel routes (slots)

- `app/catalog/(list)/@filter/default.tsx` — filter panel slot on catalog page
- `app/catalog/(details)/[id]/@booking/default.tsx` — booking slot on details page

## Project Structure

```txt
app/
  page.tsx
  layout.tsx
  globals.css
  error.tsx
  loading.tsx
  not-found.tsx
  catalog/
    (list)/
      layout.tsx
      page.tsx
      Catalog.module.css
      @filter/
        default.tsx
    (details)/
      [id]/
        layout.tsx
        page.tsx
        CamperDetails.client.tsx
        Camper.module.css
        prefetch.ts
        @booking/
          default.tsx
        features/
          page.tsx
        reviews/
          page.tsx

components/
  CamperBadges/
  CamperCard/
  CamperList/
  CamperTabs/
  CatalogLoadMore/
  FiltersPanel/
  FormDraftSync/
  Header/
  Icon/
  OrderForm/
  TanStackProvider/

lib/
  api.ts
  filtersToParams.ts
  store/
    useCampersStore.ts
    useFavoritesStore.ts
    useBookingDraftStore.ts
```

## State Management

- `useCampersStore` — catalog list state (items, loading, pagination, filters integration)
- `useFavoritesStore` — favorites logic
- `useBookingDraftStore` — booking form draft (persist values between navigations)

## Data Fetching

- `lib/api.ts` — API client (campers list, single camper, etc.)
- TanStack Query provider: `components/TanStackProvider`

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open: `http://localhost:3000`

### Build (production)

```bash
npm run build
npm start
```

## Environment Variables

If your API or image domains require configuration, add them to `.env.local`.

Example:

```env
NEXT_PUBLIC_API_URL=...
```

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm start` — run production server
- `npm run lint` — lint

## Demo

- Live: (add link)
- Repository: https://github.com/Maryna-Tk-UA/travel-trucks

## Author

Maryna Tkachenko
