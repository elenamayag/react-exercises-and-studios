import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.allrecipes.com/lazy-hazy-beef-chili-recipe-7562950";
   let authorPhoto = "https://www.allrecipes.com/thmb/rI3ImaTYU8HVtagwqw5HL2v1Tcs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chef-john-c50f1c2cb23f4e7786d66c30bddf8bcb.jpg";
   let authorName = 'John Mitzewich';

   return (
      <div>
         <img
            src={authorPhoto}
            alt=""
            style={{ objectFit: "contain", borderRadius: "50%" }}
            width="200px"
         />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a>
         </div>
      </div>
   );
}



const RecipeIngredients = () => {
   const ingredients = ["2 pounds ground beef", "2 tablespoons chili powder", "12 ounces hazy IPA beer", "1 (14.5 ounce) can diced fire-roasted tomatoes with green chilies", "2 (16 ounce jars) extra chunky salsa" , "2 (15 ounce) cans pinto beans, drained"];
   let ingredientListItems = ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient} </li>;
   })
   return (
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            {ingredientListItems}
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div>
         <div>
            <h1>Chili</h1>
            <p>What is better then a good bowl of soup on a fall day? ... A BOWL OF CHILI duhhhh!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.allrecipes.com/lazy-hazy-beef-chili-recipe-7562950"
         alt=""
         className="imageUpdates"
         height="450px" />
   );
}

export default function RecipeDisplay() {
   return (
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
