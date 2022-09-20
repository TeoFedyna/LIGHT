import React from 'react'
import "./ItemCount.css"
import { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);

    let stock = Count.stock

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
    <div className="list-group-flush">
        <article>Cantidad: <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button></article>
        <button>Agregar al carrito</button>
    </div>
    )
}

export default Count