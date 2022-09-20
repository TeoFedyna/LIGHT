import React from 'react';
import CardWidget from '../CardWidget/CardWidget';
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {

  // console.log(props);

  return (
    <>
      <ul className="navbar">
        <Link to="/" className="boton">Home</Link>
        <Link to="/category/men's clothing" className="boton">Hombres</Link>
        <Link to="/category/women's clothing" className="boton">Mujeres</Link>
        <Link to="/category/electronics" className="boton">Electronicos</Link>
        <Link to="/category/jewelery" className="boton">Joyeria</Link>
        <Link to="" className="boton">Nosotros</Link>
        <CardWidget />
      </ul>
    </>
  );
}

export default NavBar
