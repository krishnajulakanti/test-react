// using Function expression
import { useState } from "react"

export const Message = () => {
    const [message, setMessage] = useState('Welcome Guest');  // state variable
    return( 
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('Thanks for Subscribing.')}>Subscribe</button>
        </div>
    )
}



// using Class component & this.state
// import React, {Component} from "react";
// class Message extends Component {
//     constructor() {
//         super()
//         this.state = {
//             message: 'Welcome Guest'
//         }
//     }

//     changeMessage() {
//         this.setState({
//             message: 'Thanks for Subscribing.'
//         })
//     }

//     render() {
//         return <div>
//             <h1>{this.state.message}</h1>
//             <button onClick={() => {this.changeMessage()}}>Subscribe</button>
//         </div>
//     }
// }

// export default Message

// A State is nothing but an object privately maintianed inside a Component.