import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Quick Hits", value: "Quick Hits"},
      {label: "Mexican Dinner", value: "Mexican Dinner"},
      {label: "Casual Lunch", value: "Casual Lunch"}
   ];
   const [boardName, setBoardName] = useState("no boards yet!")

   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (
            <option value={board.value}>{board.label}</option>
         ))}
      
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
