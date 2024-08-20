import React from 'react';
import styles from './Description.module.css';

const RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/shelia-johnson-7113612";
    let authorPhoto = "https://www.allrecipes.com/thmb/lO2OOrIbOROzq6ggStR3s_0PAZQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/CookingwithSheliaSheliaJohnson-911cfec63f3b433eb6a07f95f88edd77.jpeg";
    let authorName = "Shelia Johnson";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>allrecipes</a>
            </div>
        </div>
    );

}
class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>5 Ingredient Taco Soup</h1>
                    <p>This simple and delicious 5 ingredient taco soup is perfect for cool nights by the fireplace. Garnish with your favorite taco toppings.</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}
export default RecipeDescription;