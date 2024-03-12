// import React from 'react'

// function FunctionClick() {

//     function clickHandler() {
//         console.log("Button clicked");
//     };

//   return (
//     <div>
//         <div>FunctionClick</div>
//         <button onClick={clickHandler}>Click</button>
//     </div>
//   )
// }

import React, { Component } from 'react'

export class FunctionClick extends Component {

    clickHandler = () => {
        console.log("Button clicked");
    };
    
  render() {
    return (
        <div>
            <div>FunctionClick</div>
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
  }
}

export default FunctionClick