import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleIsEditing(){
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>
    if(isEditing) {
        // Adding "value" to the input field to show it intial
        playerName = <input type="text" value={name} required/>
    }
    
    return (
    <li>
      <span className="player">
       {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/*Adding a ternary operation to alter between "save" and "edit"  */}
      <button onClick={handleIsEditing}>{isEditing ? "Save": "Edit"}</button>
    </li>
  );
}
