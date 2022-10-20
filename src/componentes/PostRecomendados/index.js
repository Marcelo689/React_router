import PostCard from 'componentes/Post';
import posts from 'json/posts.json';
import styles from "./PostRecomendados.module.css";
export default function PostRecomendados({itemClicado}){

    var contador = 0;
    var postsRecomendados;
    var quantidadeSugeridos = 4;
    console.log(`item clicado = ${itemClicado.id}\n posts length = ${posts.length} `)
    if(itemClicado.id !== posts.length){
        postsRecomendados = posts.filter( (p) => {
            if(p.id > itemClicado.id && contador < quantidadeSugeridos){
                contador++;
                return p;
            }
        });
    }else{
        postsRecomendados = posts.filter( (p) => {
            if(p.id < itemClicado.id && (itemClicado.id - (quantidadeSugeridos +1)) < p.id && contador < quantidadeSugeridos){
                contador++;
                return p;
            }
        });
        console.log(postsRecomendados);
    }

    return (
        <>
            <h1>Posts Sugeridos</h1>
        
            <div className={styles.postsRecomendados}>
            
                {
                    postsRecomendados.map((p) => (
                    <li key={p.id}>
                            <PostCard post={p} />
                    </li>
                ))}
            </div>
        </>
    );
}