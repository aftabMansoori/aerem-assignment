import { useQuery, useQueryClient, keepPreviousData } from '@tanstack/react-query';
import { fetchCharacters } from '../api/characters';
import { queryKeys } from '../utils/queryKeys';
import { QUERY_CONFIG } from '../config/constants';


export const useCharacters = (page: number) => {
  return useQuery({
    queryKey: queryKeys.characters.paginated(page),
    queryFn: () => fetchCharacters({ page }),
    staleTime: QUERY_CONFIG.STALE_TIME,
    gcTime: QUERY_CONFIG.GC_TIME,
    retry: QUERY_CONFIG.RETRY,
    placeholderData: keepPreviousData,
  });
};

export const usePrefetchNextPage = () => {
  const queryClient = useQueryClient();

  const prefetchNextPage = (currentPage: number, totalPages: number) => {
    if (currentPage < totalPages) {
      queryClient.prefetchQuery({
        queryKey: queryKeys.characters.paginated(currentPage + 1),
        queryFn: () => fetchCharacters({ page: currentPage + 1 }),
        staleTime: QUERY_CONFIG.STALE_TIME,
      });
    }
  };

  return { prefetchNextPage };
};

