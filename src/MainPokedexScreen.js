import React,{useEffect, useState} from 'react'
import { getPokemonCount } from './API/PokeAPIs'
import Button from 'react-bootstrap/Button'


const MainPokedexScreen = () => {
  const [numberOfPokemon, setnumberOfPokemon] = useState()

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

  return (
    <div>
    <h1>MainPokedexScreen</h1>
    <Button onClick={() => {console.log(numberOfPokemon)}}></Button>
    </div>
  )
}

export default MainPokedexScreen