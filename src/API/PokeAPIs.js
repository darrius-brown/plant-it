import axios from "axios";
export const getPokemonCount = () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/'
    return axios.get(URL)
    .then(res => {
        return res.data
    })
}