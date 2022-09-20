import React from 'react'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {
    return (
        <div>

            <img className="itemDetailImg" src={product.image} alt="imagen" />
            <p>{product.description}</p>
            <p>{product.price}$</p>
            <div>
            <h1>{product.title}</h1>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail