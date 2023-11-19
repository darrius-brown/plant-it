import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPokedexScreen from './MainPokedexScreen';
import BriefDescriptionOfPokemon from './BriefDescriptionOfPokemon';
import DetailOfPokemon from './DetailOfPokemon';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <h1 className='main-title'>Pokèdex</h1>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/main' element={<MainPokedexScreen />} />
        <Route path='/brief' element={<BriefDescriptionOfPokemon />} />
        <Route path='/detail' element={<DetailOfPokemon />} />
      </Routes>
    </div>
  );
}

export default App;
