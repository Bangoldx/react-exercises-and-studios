import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.allrecipes.com/shelia-johnson-7113612";
   let authorPhoto = "https://www.allrecipes.com/thmb/lO2OOrIbOROzq6ggStR3s_0PAZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CookingwithSheliaSheliaJohnson-911cfec63f3b433eb6a07f95f88edd77.jpeg";
   let authorName = "Shelia Johnson";

   return (
      <div>
         <img src={authorPhoto} alt = "shelia johnson" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["1 lb Ground Beef", "1 (16 ounce) jar chunky Salsa", "6 Cups Beef Broth", "1 (1 ounce) Package Taco Seasoning", "1 (10 ounces) Bag Frozen Corn"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
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
      <img src="https://www.allrecipes.com/thmb/ZlfOoQjxcplOeHH6yAjk-VJ1LH8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/8350064_5-Ingredient-Taco-Soup_Shelia-Johnson_4x3-c7f7217cd2474126bd104e4abdac5621.jpg" alt="taco soup" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
