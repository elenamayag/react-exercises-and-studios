import styles from './Description.module.css';
import { Component } from 'react'; 
 
let recipeTitle = "Lazy Hazy Beef Chili"
let RecipeDescription = "Easy and flavorful chili, for a busy or lazy fall day!"

const RecipeAuthor = () => {
    let authorLink = "https://www.allrecipes.com/lazy-hazy-beef-chili-recipe-7562950";
    let authorPhoto = "https://www.allrecipes.com/thmb/rI3ImaTYU8HVtagwqw5HL2v1Tcs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chef-john-c50f1c2cb23f4e7786d66c30bddf8bcb.jpg";
    let authorName = 'John Mitzewich';
 
    return (
        <div className={styles.recipeAuthorBlock}>
            <img
                src={authorPhoto}
                alt={authorName}
                className={styles.imageUpdates}
            />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}> All Recipes</a>
            </div>
        </div>
    );
};

class recipeDescription extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{recipeTitle}</h1>
                    <p>{RecipeDescription}</p>
                </div>
                <RecipeAuthor />
            </div>
        );   
    }
}


export default recipeDescription;