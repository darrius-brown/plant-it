import React from 'react'
import { useParams } from 'react-router-dom';

const  BriefDescriptionOfPokemon = () => {
  const { index } = useParams();
  return (
    <div>
    BriefDescriptionOfPokemon
    <h1>{parseInt(index) + 1}</h1>
    </div>
  )
}

export default BriefDescriptionOfPokemon