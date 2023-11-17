import React,{useEffect, useState} from 'react'
import { getPokemonCount } from './API/PokeAPIs'


const MainPokedexScreen = () => {

  useEffect(() => {
    getPokemonCount()
  }, [])

  return (
    <div>MainPokedexScreen</div>
  )
}

export default MainPokedexScreen