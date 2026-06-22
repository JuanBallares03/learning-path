import Titulo from "./titulo";
import InteraccionUsuario from "./juego";
import './index.css';

function App() {
  return(
    <div className="centrado">
      <Titulo></Titulo>
      <InteraccionUsuario min={1} max={10}></InteraccionUsuario>
    </div>

  )

}

export default App
