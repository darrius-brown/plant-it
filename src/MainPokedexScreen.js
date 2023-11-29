import React, { useEffect, useState } from 'react'
import { getPokemon } from './API/PokeAPIs';

const MainPokedexScreen = () => {
  const numberOfPokemon = 1017;
  const [pokedexList, setPokedexList] = useState();
  const [userDatabase, setUserDatabase] = useState();
  const [pokemonNames, setPokemonNames] = useState();
  const testUserDatabase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 100, 101];

  const fetchPokemon = async (number) => {
    try {
      const res = await getPokemon(number);
      return res.name;
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const names = await Promise.all(testUserDatabase.map((num) => fetchPokemon(num)));
        console.log('Fetched Pokemon names:', names);
        setPokemonNames(names.filter(Boolean));
      } catch (error) {
        console.error('Error setting data:', error);
      }
    };

    fetchData();
  }, [testUserDatabase]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPokedexList(Array(numberOfPokemon).fill('______________________'));
      } catch (error) {
        console.error('Error setting data:', error);
      }
    };

    fetchData();
  }, [numberOfPokemon]);

  const renderPokedexList = () => {
    if (!pokedexList || !pokemonNames) {
      return <h1>Loading....</h1>;
    }
    return pokedexList.map((item, index) => {
      if (testUserDatabase.includes(index + 1)) {
        return <li key={index}>{pokemonNames[testUserDatabase.indexOf(index + 1)] || 'Loading...'}</li>;
      } else {
        return <li key={index}>{item}</li>;
      }
    });
  };

  console.log('Rendered Pokemon names:', pokemonNames);

  return (
    <div className='main-pokedex-screen'>
      <ol>{renderPokedexList()}</ol>
    </div>
  );
};

export default MainPokedexScreen;