import React from 'react'

const ItemDetail = ({product}) => {
    return (
        <div>
        <h1>{product.title}</h1>
        <p>{product.precio}</p>
        <img src="" alt=""/>
        {/* <ItemCount (ItemCount tiene que tener una carpeta en componentests porque va en ItemDetail, no en ItemCard)/> */}
        <button>Agregar al carrito</button>
        </div>
        
    )
}

export default ItemDetail