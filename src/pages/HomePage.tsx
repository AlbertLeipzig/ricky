import { useState, useEffect } from 'react';
import { ICharacter } from '../utils/interfaces';
import { SingleCharacterCard } from '../components/SingleCharacterCard';
export const HomePage = ({
  characterData,
}: {
  characterData: ICharacter[];
}) => {
  const [actualPage, setActualPage] = useState(1);

  const indexEntries = (_entries) => {
    const entries = structuredClone(_entries);
    const pages = [];
    while (entries.length > 0) {
      pages.push(entries.splice(0, 5));
    }
    return pages;
  };

  const actualResults = indexEntries(characterData)[actualPage];

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      {actualResults && (
        <ul>
          {actualResults.map((character) => (
            <SingleCharacterCard key={character.id} character={character} />
          ))}
        </ul>
      )}
      <ul>
        <li key={1} onClick={() => setActualPage(0)}>
          1
        </li>
        <li key={2} onClick={() => setActualPage(1)}>
          2
        </li>
        <li key={3} onClick={() => setActualPage(2)}>
          3
        </li>
      </ul>
    </div>
  );
};
