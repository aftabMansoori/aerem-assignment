# Rick & Morty Characters App

A React + TypeScript application demonstrating efficient pagination using React Query. Browse through characters from the Rick and Morty universe with smooth pagination and caching.

## Features

- ✅ Paginated character list with Previous/Next navigation
- ✅ React Query for data fetching and caching
- ✅ Skeleton loaders for better UX
- ✅ Prefetching next page for smooth navigation
- ✅ keepPreviousData to prevent loading flashes
- ✅ Error handling and loading states
- ✅ TypeScript for type safety
- ✅ Optimized with memoization

## Tech Stack

- React 18
- TypeScript
- React Query (TanStack Query v5)
- Axios
- Vite

## API

Using **Rick and Morty API** for character data:
- Base URL: `https://rickandmortyapi.com/api`
- Characters Endpoint: `https://rickandmortyapi.com/api/character`
- Pagination: `?page={pageNumber}`
- Returns 20 characters per page
- Total: 826 characters across 42 pages

The API is completely free and doesn't require any authentication or API keys.

## Pagination Logic

Here's how the pagination works under the hood:

1. **State Management**: Current page is tracked using `useState` hook
2. **Data Fetching**: React Query handles all API calls with automatic caching
3. **Cache Strategy**: 
   - `staleTime`: 5 minutes (data considered fresh, won't refetch)
   - `gcTime`: 10 minutes (how long inactive data stays in memory)
4. **Prefetching**: When you're viewing a page, the next page is automatically prefetched in the background using `prefetchQuery`
5. **keepPreviousData**: While loading new page, previous page data stays visible (no skeleton flash)
6. **Navigation**: Previous/Next buttons with proper disable states based on current page

### How it works together:

```
User on Page 1 → Prefetch Page 2 in background
User clicks Next → Page 2 data already cached → Instant transition
If prefetch didn't complete → keepPreviousData shows Page 1 → Smooth transition
```

## Setup Instructions

### Prerequisites

Make sure you have these installed:
- Node.js (v18 or higher)
- npm 

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/aftabMansoori/aerem-assignment.git
```

2. **Install dependencies:**
```bash
npm install
```

This will install all the required packages including React, TypeScript, React Query, and Axios.

3. **Run development server:**
```bash
npm run dev
```

4. **Open your browser:**
The app should automatically open at `http://localhost:5173` (or check the terminal for the exact port)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── api/
│   ├── client.ts          # Axios instance & interceptors
│   └── characters.ts      # Character API calls
├── components/
│   ├── CharacterList.tsx  # Main pagination component
│   ├── CharacterCard.tsx  # Character card (memoized)
│   ├── SkeletonLoader.tsx # Loading skeleton
│   └── *.css              # Component styles
├── config/
│   └── constants.ts       # App-wide constants
├── hooks/
│   └── useCharacters.ts   # Custom React Query hook
├── lib/
│   └── queryClient.ts     # QueryClient configuration
├── types/
│   └── character.ts       # TypeScript interfaces
├── utils/
│   ├── queryKeys.ts       # Query keys factory
│   └── statusUtils.ts     # Status color utilities
├── App.tsx                # Main app component
├── main.tsx               # Entry point
└── index.css              # Global styles
```

## Performance Optimizations

1. **React Query Caching**: Configured with `staleTime` (5 mins) and `gcTime` (10 mins) for optimal cache behavior
2. **Prefetching**: Next page prefetched automatically using `useEffect` and `prefetchQuery`
3. **keepPreviousData**: Prevents loading flashes when navigating between pages
4. **Memoization**: CharacterCard component wrapped with `memo()` to prevent unnecessary re-renders
5. **Efficient Rerenders**: Only current page state triggers rerender, cached pages don't refetch

## How to Use

1. Start the dev server with `npm run dev`
2. Browse characters using Previous/Next buttons
3. Notice how smooth the transitions are - that's prefetching + keepPreviousData working together!
4. Try navigating quickly - the cache makes it instant

## License

MIT
