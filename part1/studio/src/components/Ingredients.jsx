import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = ["1 lb Ground Beef", "1 (16 ounce) jar chunky Salsa", "6 Cups Beef Broth", "1 (1 ounce) Package Taco Seasoning", "1 (10 ounces) Bag Frozen Corn"]

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}