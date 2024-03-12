// using Function expression
export const Greet = (props) => {
    return( 
    <div>
        <h1>Welcome {props.name} {props.nickname}</h1>
        {props.children}
    </div>
    )
}

// using Class syntax

// import React, {Component} from "react";
// class Greet extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Welcome {this.props.name}</h1>
//             </div>
//         )
//     }
// }

// export default Greet