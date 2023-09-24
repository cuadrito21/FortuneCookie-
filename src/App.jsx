import { useState } from "react";
import Button from "./components/Button";
import {data} from "./data"

function App() {
  const [fondo , setFondo] = useState(1)
  const [mensaje, setMensaje] = useState(1)
  return (
    <>
      <div className={fondo===1 && "fondo4" || fondo===2 && "fondo3" || fondo===3 && "fondo2" || fondo===4 && "fondo1"  }>
        <h1 className="titulo ">GALLETAS DE LA FORTUNA</h1>
        <div className="mensaje_de_la_galleta mensaje_galleta">
          <p>{data[mensaje].phrase}</p>
          <p>{data[mensaje].author}</p>
        </div>
        <Button fondo={fondo} setFondo={setFondo} mensaje={mensaje} setMensaje={setMensaje} />
      </div>
    </>
  );
}

export default App;
