import React, { useEffect, useState } from 'react'
import { getPokemonCount } from './API/PokeAPIs'

const MainPokedexScreen = () => {
  const [numberOfPokemon, setnumberOfPokemon] = useState();
  const [pokedexList, setPokedexList] = useState();
  const [userDatabase, setUserDatabase] = useState();

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
    const fetchData = async () => {
      try {
        setPokedexList(Array(numberOfPokemon).fill('______________________'));
      } catch (error) {
        console.error('Error setting data:', error);
      }
    };

    fetchData();
  }, [numberOfPokemon]);

  // useEffect(() => {
  //   setPokedexList(Array(numberOfPokemon).fill('______________________'));
  // }, [numberOfPokemon]);

  const renderPokedexList = () => {
    if (!pokedexList) {
      return (
        <h1>Loading....</h1>
      )
    }
    return pokedexList.map((item, index) => {
      if (userDatabase.contains(index)) {
        return (
          <li >name of pokemon</li>
        )
      } else {
        return (
          <li key={index}>{item}</li>
        )
      }
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