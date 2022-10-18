import Banner from "components/Banner";
import styles from "./inicio.module.css";
import posts from "assets/json/posts.json";
import Post from "components/Post";

export default function Inicio(){
    return(
        <main>
            <Banner />
            <h1>teste</h1>
            <ul className={styles.posts}>
                {posts.map( (post) => {
                    {console.log(post)}
                    <li key={post.id}>
                        <Post post={post}/>
                    </li>
                })}
            </ul>
        </main>
    )
}