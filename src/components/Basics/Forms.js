import { useState } from "react";

export const Forms = () => {
    const [username, setUsername] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Form data is ${username}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text"  value={username} onChange={(event) => setUsername(event.target.value)} />
                <h1>{username}</h1>
                {/* <p>Text Area</p>
                <textarea value={username} onChange={(event) => setUsername(event.target.value)} /> */}

                {/* <p>Select Country</p>
                <select value={username} onChange={(event) => setUsername(event.target.value)}> 
                    <option>India</option>
                    <option>Brazil</option>
                    <option>China</option>
                </select> */}
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}