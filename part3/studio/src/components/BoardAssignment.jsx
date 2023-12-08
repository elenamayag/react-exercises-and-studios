import { useState } from 'react'; 

export default function BoardAssignment () {

   const [boardName, setBoardName] = useState("No boards yet!");
   const boards = [
      {
         label: "Recipes to try!",
         value: "newRecipes"
      },
      {
         label: "Soups and others",
         value: "soups"  
      },
      {
         label: "Dinner Ideas",
         value: "dinnerIdeas"
      }
   ];

   let boardOptions = boards.map((board, index) => {
      return <option key={index} value={board.vaule}>{board.value}</option>;
   });

   const handleChange = (event) => {
      setBoardName(event.target.value); 
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boardOptions}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
