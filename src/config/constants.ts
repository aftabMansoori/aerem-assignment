// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://rickandmortyapi.com/api',
  ENDPOINTS: {
    CHARACTERS: '/character',
  },
  PAGINATION: {
    INITIAL_PAGE: 1,
  },
} as const;

// React Query Configuration
export const QUERY_CONFIG = {
  STALE_TIME: 1000 * 60 * 5, // 5 minutes
  GC_TIME: 1000 * 60 * 10, // 10 minutes
  RETRY: 1,
} as const;

// UI Configuration
export const UI_CONFIG = {
  SKELETON_COUNT: 20,
  GRID_MIN_WIDTH: 300,
} as const;

// Character Status Colors
export const STATUS_COLORS = {
  ALIVE: '#4ade80',
  DEAD: '#f87171',
  UNKNOWN: '#94a3b8',
} as const;

