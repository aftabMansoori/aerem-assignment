// Centralized query keys factory for better type safety and consistency
export const queryKeys = {
  characters: {
    all: ['characters'] as const,
    lists: () => [...queryKeys.characters.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => 
      [...queryKeys.characters.lists(), { filters }] as const,
    details: () => [...queryKeys.characters.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.characters.details(), id] as const,
    paginated: (page: number) => 
      [...queryKeys.characters.all, 'paginated', page] as const,
  },
} as const;

