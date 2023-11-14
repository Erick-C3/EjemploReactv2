import { useEffect, useState } from 'react';

const API = "https://pokeapi.co/api/v2/pokemon/";

function Tarjeta(props) {
    const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("def nombre");
  const [imagen, setImagen] = useState("def imagen");

  useEffect(  ()=>{
    async function fetchApi() {
      const res = await  fetch(API+ props.nombrePokemon);
      let info = "def info";
      if(res.ok){
        info = await res.json();
        console.log(info);
        setNombre(info.name);
        setImagen(info.sprites.front_default);
      }
    }

    fetchApi();
  });

  function aumentar() {
    setContador(contador+1);
  }

  return (
    <>
      <h1>Contador</h1>
      <button onClick={aumentar}>Aumentar</button>
      <h2>{contador}</h2>
      <h3>{nombre}</h3>
      <img src={imagen} alt={imagen} />
    </>
  )
}

export default Tarjeta;