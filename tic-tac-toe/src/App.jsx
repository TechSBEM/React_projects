import GameBoard from "../components/GameBoard";
import Player from "../components/Players";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer==='X'? 'O': 'X')
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player-0" symbol="X" isActive={activePlayer==='X'}/>
          <Player initialName="player-1" symbol="O" isActive={activePlayer==='O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>
      logo
    </main>
  );
}

export default App;
