import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ProductCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Title>Remera sin cuello</Card.Title>
            <Card.Body>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Text>
                    *descripcion del producto
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Precio:4500$</ListGroup.Item>
                <ListGroup.Item>Cantidad:<button /*onClick={}*/>-</button>0<button /*onClick={}*/>+</button></ListGroup.Item>
                <button>Agregar al carrito</button>
            </ListGroup>

        </Card>
    );
}

export default ProductCard;