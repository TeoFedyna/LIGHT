import React from 'react'
import Item from '../Item/Item'
import "./ItemList.css"

const ItemList = ({ products }) => {
    return (
        <div className="productosCards">
            {products.length ? products.map(product => {
                return <Item key={product.id} product={product} />
            })
                :
                <h2>Loading...</h2>
            }
        </div>
    )
}

export default ItemList