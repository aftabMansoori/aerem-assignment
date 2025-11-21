import { memo } from 'react';
import { Character } from '../types/character';
import { getStatusColor } from '../utils/statusUtils';
import './CharacterCard.css';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = memo(({ character }: CharacterCardProps) => {

  return (
    <div className="character-card">
      <div className="character-avatar-container">
        <img 
          src={character.image} 
          alt={character.name}
          className="character-avatar"
        />
        <div 
          className="status-indicator" 
          style={{ backgroundColor: getStatusColor(character.status) }}
        />
      </div>
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        <div className="character-details">
          <span className="character-status" style={{ color: getStatusColor(character.status) }}>
            {character.status}
          </span>
          <span className="character-species">{character.species}</span>
        </div>
        <p className="character-location">{character.location.name}</p>
      </div>
    </div>
  );
});

CharacterCard.displayName = 'CharacterCard';

export default CharacterCard;

