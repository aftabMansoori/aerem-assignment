import { STATUS_COLORS } from '../config/constants';

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';

export const getStatusColor = (status: string): string => {
  const normalizedStatus = status.toLowerCase();
  
  switch (normalizedStatus) {
    case 'alive':
      return STATUS_COLORS.ALIVE;
    case 'dead':
      return STATUS_COLORS.DEAD;
    default:
      return STATUS_COLORS.UNKNOWN;
  }
};

export const isValidStatus = (status: string): status is CharacterStatus => {
  return ['alive', 'dead', 'unknown'].includes(status.toLowerCase());
};

