import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPokedexScreen from './MainPokedexScreen';
import BriefDescriptionOfPokemon from './BriefDescriptionOfPokemon';
import DetailOfPokemon from './DetailOfPokemon';

function App() {
  return (
    <div className="App">
      <h1>Pokèdex</h1>
      <h2>Welcome to "usersigned in"'s Pokedex!</h2>
      <Routes>
        <Route path='/main' element={<MainPokedexScreen/>}/>
        <Route path='/brief' element = {<BriefDescriptionOfPokemon/>}/>
        <Route path='/detail' element = {<DetailOfPokemon/>}/>
      </Routes>
    </div>
  );
}

export default App;
