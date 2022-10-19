import React, { useState, useEffect } from 'react'
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        } else { console.log("lo siento, pero no somos una tienda negativa ;)") }
    }

    const handleDecrement = () => {
        // desarrollo del decremento
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }

    //montaje del componente
    useEffect(() => {
        //El array vacio de dependeicas implica que el callback se ejecutara cuando se MONTA el componente por unica vez.
        console.log("se monto el item count");
    }, [])

    return (
        <div className="list-group-flush">
            <article>Cantidad: <button onClick={handleDecrement}>-</button> {count} <button onClick={handleAdd}>+</button></article>
            <button onClick={addCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount