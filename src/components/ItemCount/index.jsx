/*import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RopaImg from "../../images/musculosa-blanca-frente.jpg"
import { useState } from 'react';

function ProductCard() {
    const [count, setCount] = useState(1);

    let stock = 9

    const restar =  () => { 
        if (count <= 0) {
            console.log("lo siento, pero no somos una tienda negativa ;)");
        } else {setCount(count-1)} 
    }

const sumar =  () => {
    if (count > stock) {
        console.log("se nos acabo el stock");
    } else {setCount(count+1)} 
}

    return (
    <Card className="ropaCard" style={{ width: '18rem' }}>
        <Card.Title>Musculosa</Card.Title>
        <Card.Body>
            <Card.Img variant="top" src={RopaImg} />
            <Card.Text>
                *descripcion del producto
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroup.Item>Precio:4500$</ListGroup.Item>
            <ListGroup.Item>Cantidad: <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button></ListGroup.Item>
            <button>Agregar al carrito</button>
        </ListGroup>

    </Card>
);
}

export default ProductCard;*/