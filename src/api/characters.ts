import { ApiResponse } from '../types/character';
import { apiRequest } from './client';
import { API_CONFIG } from '../config/constants';

export interface FetchCharactersParams {
  page: number;
}


export const fetchCharacters = async (
  params: FetchCharactersParams
): Promise<ApiResponse> => {
  const { page } = params;
  
  return apiRequest<ApiResponse>(API_CONFIG.ENDPOINTS.CHARACTERS, {
    params: {
      page
    },
  });
};
