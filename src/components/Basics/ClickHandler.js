export const ClickHandler = () => {
    const clickHandler = (event) => {
        console.log('Clicked', event);
    }
    return (
        <div>
            <button onClick={clickHandler}>Click Here</button>
        </div>
    )
}