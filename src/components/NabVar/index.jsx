import React from 'react'
import CardWidget from '../CartWidget';
import "./Styles.css"

function Pepe(props) {
  
  // console.log(props);
  
  return (
    <>
    <ul className="navbar">
      {/* saco los <a><a/> del navbas temporalmente */}
      <p className="boton">Home</p>
      <p className="boton">Productos</p>
      <p className="boton">Nosotros</p>
      <CardWidget/>
    </ul>
    <div></div>
    </>
  );
}

export default Pepe
