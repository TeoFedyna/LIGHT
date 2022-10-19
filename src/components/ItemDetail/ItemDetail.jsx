import React, { useState } from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useNavigate } from 'react-router-dom';

const ItemDetail = ({ product }) => {

  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity) => {
    setQty(quantity);
  }

  const handleFinish = () => {
    navigate('/cart');
  }

  console.log(qty);

  return (
    <div>
      <img className="itemDetailImg" src={product.image} alt="imagen" />
      <p>{product.description}</p>
      <p>{product.price}$</p>
      <div>
        <h1>{product.title}</h1>
        {!qty ? <ItemCount stock={10} initial={1} onAdd={addCart} /> : <button onClick={handleFinish}>Finalizar compra</button>}
      </div>
    </div>
  )
}

export default ItemDetail