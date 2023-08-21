import AccentButton from "./Components/Buttons/AccentButton";
import PrimaryButton from "./Components/Buttons/PrimaryButton";
import Avaliacao from './Components/Avaliacao/Avaliacao'

import './assets/css/bootstrap-grid.min.css'
import './assets/css/bootstrap-reboot.min.css'
import "./App.css";
import Teste from "./Components/Teste/Teste";

function App() {
    // const Teste = () => {
    //     alert("clicked")
    // }

    const divInline = {
        display: "flex",
        flexFlow: "column nowrap",
        gap: "10px"
    }

    return (
        
        <>
            {/* <div style={divInline}>
                <AccentButton text="Clicka em mim" hasIcon={true} onClick={Teste}/>
                <PrimaryButton text="Clicka em mim" hasIcon={true} onClick={Teste} />
                <AccentButton text="Clicka em mim" hasIcon={false} onClick={Teste}/>
                <PrimaryButton text="Clicka em mim" hasIcon={false} onClick={Teste} />
            </div> */}
            <Avaliacao className={"joke"} />
        </>
    );
}

export default App;
