import Player from "../components/Players";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player initialName ="player-0" symbol='X'/>
        <Player initialName ="player-1" symbol="O"/>

   
        </ol>
        Game Board
      </div>
      logo
    </main>
  );
}

export default App;
