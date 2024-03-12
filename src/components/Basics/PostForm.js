import { useState } from "react";

export const PostForm = () => {
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const PostFormData = ((event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    })

    return (
        <div>
            <form onSubmit={PostFormData}>
                <p>User Id</p>
                <input type="text" value={id} 
                onChange={(event) => {setId(event.target.value)}}
                ></input>

                <p>Title</p>
                <input type="text" value={title}
                onChange={(event) => {setTitle(event.target.value)}}
                ></input>

                <p>Body</p>
                <input type="text" value={body}
                onChange={(event) => {setBody(event.target.value)}}
                ></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}