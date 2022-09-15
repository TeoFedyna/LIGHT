import React from 'react'

const ItemDetail = ({ product }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt="imagen"/>
            <p>{product.price}$</p>
            {/* <ItemCount (ItemCount tiene que tener una carpeta en componentests porque va en ItemDetail, no en ItemCard)/> */}
            <button>Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail