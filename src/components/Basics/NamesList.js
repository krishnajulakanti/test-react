export const NamesList = () => {
    const list = ['apple', 'bat', 'cat'];
    
    const nameList = list.map((name) => {
        return <h2 key={name}>{name}</h2>
    })

    return (
        <div>{nameList}</div>
    )
}