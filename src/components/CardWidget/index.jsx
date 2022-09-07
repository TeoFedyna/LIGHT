import React from 'react';
import cartImg from '../../images/img-carrito.png';

function CardWidget() {
  return (
    <div style={{width: "30px"}}>
    <img src={cartImg} alt="carrito"/>
    </div>
  )
}

export default CardWidget