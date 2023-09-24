import { data } from "../data";

const randomNum = () => {
  return Math.floor(Math.random() * data.length);
};

const arrNumerosMostrados = [];

const Button = ({ fondo, setFondo, setMensaje }) => {
  const handleOnClick = () => {
    if (fondo < 4 && arrNumerosMostrados.length < data.length-1) {
      setFondo(fondo + 1);
    } else {
      setFondo(1);
    }
    mostrarPalabra();
    randomNum();
  };
  
  const mostrarPalabra = () => {
    let num = randomNum()
    console.log(num)
    if (arrNumerosMostrados.length < data.length-1) {
      if (arrNumerosMostrados.includes(num) ) {
        mostrarPalabra()
      } else {
        arrNumerosMostrados.push(num)
        setMensaje(arrNumerosMostrados[arrNumerosMostrados.length - 1]);
      }
    }
    console.log(arrNumerosMostrados)
  };

  return (
    <button type="button" className="btn btn-success" onClick={handleOnClick}>
      ver mensaje
    </button>
  );
};

export default Button;
