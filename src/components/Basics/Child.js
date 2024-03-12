export const Child = (props) => {
    return (
        <div>
            <p>What you seeing is Child component</p>
            <button onClick={() => props.greetHandler('Im from Child comp')}>Greet Parent</button>
        </div>
    )
}

// here we are sending a parameter/message(using onClick Event) from Child comp to Parent comp. Now the method in parent received this as props
// and displays in Parent comp.