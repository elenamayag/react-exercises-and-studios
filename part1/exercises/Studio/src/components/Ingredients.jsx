import styles from './Ingredients.module.css'; 
 

const RecipeIngredients = () => {
    let ingredients = [ "2 pounds ground beef", "2 tablespoons chili powder", "12 ounces hazy IPA beer", "1 (14.5 ounce) can diced fire-roasted tomatoes with green chilies", "2 (16 ounce jars) extra chunky salsa" , "2 (15 ounce) cans pinto beans, drained"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
                <li>{ingredients[5]}</li>
            </ul>
        </div>
    );
};

export default RecipeIngredients;