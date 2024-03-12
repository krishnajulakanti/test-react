import { Child } from "./Child";

export const Parent = () => {
    const greetParent = (parameter) => {
        alert(`Hello Parent ${parameter}`);
    }

    return (
        <Child greetHandler={greetParent}/> // msg is received from child to Parent and taken as Parameter to show Alert pop-up.
    )
}