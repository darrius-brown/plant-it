import axios from "axios";

export const getPokemonCount = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
  
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };