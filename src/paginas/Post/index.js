import PostModelo from "componentes/PostModelo";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";
import PostRecomendados from "componentes/PostRecomendados";
export default function Post(){
    const parametros = useParams();

    const post = posts.find( (post) => {
        return post.id === Number(parametros.id);
    });

    if(!post){
        return <NaoEncontrada/>
    }
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao/>}>
                <Route index element={
                    <PostModelo 
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                        <PostRecomendados itemClicado={post} />
                    </PostModelo>
                }></Route>
            </Route>
        </Routes>
       
    );
}