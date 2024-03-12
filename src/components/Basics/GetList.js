import { useState, useEffect } from "react";

export const GetList = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((res) => setPosts(res))
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>   
    )
}