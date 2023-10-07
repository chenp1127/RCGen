import { useEffect, useState } from "react"
import allRecipePosts from '../../data/allRecipePosts'

const RecipePost = () => {
    const [recipePost, setRecipePost] = useState({});
    useEffect(() => {
        document.title = `${recipePost.name} | Pizza Time`;
    }, [recipePost.name]);
    useEffect(() => {
        setRecipePost(allRecipePosts.filter((post) => post.name.toLowerCase() === window.location.pathname.toString().substring(6).replaceAll('-', ' '))[0])
    }, [])
    return (
        <main className="recipe-post">
            <img src={recipePost.img} alt="" aria-hidden="true" />
            <section>
                <h2>{recipePost.name}</h2>
                <p>{recipePost.content}</p>
            </section>
        </main>
    )
}

export default RecipePost;