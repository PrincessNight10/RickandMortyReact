import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const URL = 'https://rickandmortyapi.com/api/character';

function App() {
  const [listCharacter, setListCharacter] = useState([]);

  const handleGetApi = async () => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      // Mapeamos los resultados para obtener los personajes
      const newCharacters = data.results.map((character) => ({
        character: character.name,
        image: character.image,
        gender: character.gender
      }));
      
      setListCharacter(newCharacters);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='app'>
      {listCharacter.map((element, index) => (
        <Card
          key={index}
          nameCharacter={element.character}
          imgCharacter={element.image}
          genderCharacter={element.gender}
        />
      ))}
      <button onClick={handleGetApi}>Generar Personaje</button>
    </div>
  );
}

export default App;
