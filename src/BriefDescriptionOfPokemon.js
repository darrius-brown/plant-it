import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPokemon } from './API/PokeAPIs';

const  BriefDescriptionOfPokemon = () => {
  const { index } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  //convert weight from hectograms to pounds
  //convert height from decimetres to ft

useEffect(() => {
  const fetchPokemon = async (number) => {
    try {
      const res = await getPokemon(number);
      setPokemonData(res)
      console.log(res)
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
      return null;
    }
  };
  fetchPokemon(index);
}, [index])
  


  return (
    <div>
      <h1>{pokemonData ? <h1>{pokemonData.weight}</h1> : <p>Loading...</p>}</h1>
    </div>
  )
}

export default BriefDescriptionOfPokemon