import { ICharacter } from '../utils/interfaces';
import { SingleCharacterCard } from '../components/SingleCharacterCard';
export const HomePage = ({
  characterData,
}: {
  characterData: ICharacter[];
}) => {
  console.log(characterData);
  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {characterData && (
        <ul>
          {characterData.map((character) => (
            <SingleCharacterCard key={character.id} character={character} />
          ))}
        </ul>
      )}
    </div>
  );
};
