import React from 'react'
import "./Count.css"
import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

    let stock = product.stock

    const restar = () => {
        if (count <= 0) {
            console.log("lo siento, pero no somos una tienda negativa ;)");
        } else { setCount(count - 1) }
    }

    const sumar = () => {
        if (count >= stock) {
            alert("se nos acabo el stock");
        } else { setCount(count + 1) }
    }
    return (
    <ListGroup className="list-group-flush">
        <ListGroup.Item>Cantidad: <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button></ListGroup.Item>
        <button>Agregar al carrito</button>
    </ListGroup>
    )
}

export default Count