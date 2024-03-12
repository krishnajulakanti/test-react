// using Class component & this.state
import React, { Component } from "react";
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Guest'
        }
    }

    changeMessage = () => {
        this.setState({
            message: 'Thanks for Subscribing.'
        })
    }

    render() {
        return <div>
            <h1>{this.state.message}</h1>
            {/* <button onClick={() => { this.changeMessage() }}>Subscribe</button> */}
            <button onClick={this.changeMessage}>Subscribe</button>
        </div>
    }
}

export default Message