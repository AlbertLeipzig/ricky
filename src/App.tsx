import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { fetchData } from './utils/FetchData';
import { ICharacter } from './utils/interfaces';

function App() {
  const [characterData, setCharacterData] = useState<ICharacter>([]);
  useEffect(() => {
    const getDataFromEndPoint = async (endpoint: string) => {
      try {
        const data = await fetchData(endpoint);
        setCharacterData(data.results);
      } catch (error) {
        throw new Error(error);
      }
    };
    getDataFromEndPoint('character');
  }, []);
  return (
    <>
      <Header />
      <HomePage characterData={characterData} />
    </>
  );
}

export default App;
