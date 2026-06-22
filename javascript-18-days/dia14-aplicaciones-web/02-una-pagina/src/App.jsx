import Saludo from "./saludo";
import Mensaje from "./mensaje";

const App =()=>{
   return ( 
    <div>
      <Saludo nombre="Camilo"/>
      <Mensaje mensaje="Bienvenido a mi aplicacion React"/>
      <Saludo nombre="Laura"/>
    </div>
   )
}

export default App;

