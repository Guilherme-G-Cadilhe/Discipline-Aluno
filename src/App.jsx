import Button from "./Components/Buttons/Button";
import "./App.css";

function App() {
    const Teste = () => {
        alert("clicked")
    }

    return (
        <>
            <Button text="Oba" hasIcon={false} onClick={Teste}/>
        </>
    );
}

export default App;
