import { ICharacter } from '../utils/interfaces';

export const SingleCharacterCard = ({
  character,
}: {
  character: ICharacter;
}) => {
  return (
    <div className="single-character-card">
      <h3>{character.name}</h3>
      <p>{character.status}</p>
      <p>{character.species}</p>
    </div>
  );
};
