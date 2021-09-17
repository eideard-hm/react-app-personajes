import { useState, useEffect } from "react"
import AddPosts from "../components/api/AddPosts";
import { getAllPosts } from "../components/api/Posts"

const PostsPage = () => {
    const [post, setPost] = useState([])

    useEffect(() => {
        getAllPosts()
            .then(posts => setPost(posts))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-auto mt-3">
                        <h2>Json Placeholder</h2>
                        <AddPosts />
                        <hr />

                        <button className="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row d-flex justify-content-between flex-wrap">
                    {post.map((post, index) => (
                        <div className="card" style={{ width: '18rem', marginTop: '20px' }} key={index}>
                            <div className="card-body">
                                <h5 className="card-title text-center">{post.titulo}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Id post: {post.id}</h6>
                                <h6 className="card-subtitle mb-2 text-muted">Id usuario: {post.userId}</h6>
                                <p className="card-text">{post.cuerpo}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default PostsPage
