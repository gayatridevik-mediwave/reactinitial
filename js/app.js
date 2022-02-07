

function App() {

    const initialState = [
        { id: 1, text: 'The Matrix' },
        { id: 1, text: 'The Dark Knight' },
        { id: 1, text: 'Ironman' },
    ]

    const [state, changeState] = React.useState(initialState);
    // const [name, setName] = React.useState('')

    // function handleChange(e) {
    //     setName(e.target.value)
    // }
    return (
        <div>
            <ul> {state.map(function (item) {
                return (
                    <li key={item.id}> {item.text}</li>
                )
            })}</ul>
        </div>
        // <div>
        //     <p>{name}</p>
        //     <br />
        //     <input type="text" value={name} onChange={handleChange} />
        // </div>
    )
}
    //   function App()
    //   {
    //       return <div> Hello world </div>
    //   }