import React, { useEffect, useState } from 'react'
import { getPokemonCount } from './API/PokeAPIs'

const MainPokedexScreen = () => {
  const [numberOfPokemon, setnumberOfPokemon] = useState();
  const [pokedexList, setPokedexList] = useState();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getPokemonCount();
        setnumberOfPokemon(res.count);
      } catch (error) {
        console.error('Error setting data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setPokedexList(Array(numberOfPokemon).fill('______________________'));
  }, [numberOfPokemon]);

  const renderPokedexList = () => {
    if (!pokedexList) {
      return (
        <h1>Loading....</h1>
      )
    }
    return pokedexList.map((item, index) => {
      return (
      <li key={index}>{item}</li>
      )
    })
  };

  return (
    <div className='main-pokedex-screen'>
      <ol>
        {renderPokedexList()}
      </ol>
    </div>
  )
};

export default MainPokedexScreen