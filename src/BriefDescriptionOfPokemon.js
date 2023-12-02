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

const renderPokemonType = () => {
  if (!pokemonData) {
    return <h1>Loading....</h1>;
  }

  console.log(pokemonData.types[0].type.name)
  console.log(pokemonData.types.length)

  return pokemonData.types.map((item, index) => {
      return (
        <h1 to={`/brief/${index + 1}`} key={index}>
          <li>{pokemonData.types[index].type.name || 'Loading...'}</li>
        </h1>
      );
  });
};
  


  return (
    <div>
      <h1>{pokemonData ? <h1>{(pokemonData.weight / 4.536).toFixed(1)}lbs</h1> : <p>Loading...</p>}</h1>
      <h1>{pokemonData ? <h1>{(pokemonData.height / 3.048).toFixed(1)}ft</h1> : <p>Loading...</p>}</h1>
      <h1>{pokemonData ? <h1>{pokemonData.types.type}</h1> : <p>Loading...</p>}</h1>
      {renderPokemonType()}
      
    </div>
  )
}

export default BriefDescriptionOfPokemon