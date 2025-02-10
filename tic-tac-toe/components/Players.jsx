import { useState } from "react";
import GameBoard from "./GameBoard";

export default function Player({ initialName, symbol, isActive, onChangeName }) {
  // Setting PlayerName
  const [PlayerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

//   over-riding the value of "value" in the input field
  function handleChange(event) {
    setPlayerName(event.target.value);
  }


  function handleIsEditing() {
    // Making sure it changes like a bolean
    setIsEditing((editing) => !editing);

    if(isEditing){ 
    onChangeName(symbol,PlayerName)
    }
  }


  let editablePlayerName = <span className="player-name">{PlayerName}</span>;
  if (isEditing) {
    // Adding "value" to the input field to show it intial
    editablePlayerName = <input type="text" value={PlayerName} onChange={handleChange} required />;
  }

  return (
    <li className={isActive? 'active': undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/*Adding a ternary operation to alter between "save" and "edit"  */}
      <button onClick={handleIsEditing}>{isEditing ? "Save" : "Edit"}</button>

    </li>
  );
}
