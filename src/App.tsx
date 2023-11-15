import { HoverImageDrop, HoverRandomText } from 'vanya'

function App() {
    return (<div>
        <HoverRandomText mainLight='#ff00ff' fadedLight='#0000ff' lightShade='#ff0000'>
            <h1 className='howrt' style={{fontSize: "10vw", WebkitTextStroke: "2px orange", color: "blue", fontWeight: "900"}}>
                Inspire
            </h1>
        </HoverRandomText>
    </div>
    )
}

export default App;