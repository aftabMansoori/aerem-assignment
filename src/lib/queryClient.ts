import { QueryClient } from '@tanstack/react-query';
import { QUERY_CONFIG } from '../config/constants';

// Create and configure QueryClient instance
export const createQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: QUERY_CONFIG.STALE_TIME,
        gcTime: QUERY_CONFIG.GC_TIME,
        retry: QUERY_CONFIG.RETRY,
        refetchOnWindowFocus: false,
      },
    },
  });
};

