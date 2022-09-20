import React from 'react'
import "./ItemDetail.css"
//import ItemCount from "./ItemCount/ItemCount.jsx"

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <img className="itemDetailImg" src={product.image} alt="imagen"/>
            <p>{product.price}$</p>
            {/* <ItemCount (ItemCount tiene que tener una carpeta en componentests porque va en ItemDetail, no en ItemCard)/> */}
            <button>Agregar al carrito</button>
        </div>

    )
}

export default ItemDetail