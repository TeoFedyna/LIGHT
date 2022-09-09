import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//import ProductCard from './components/ItemCount';

const Item = ({product}) => {
    
    return (
        < Card className="ropaCard" style={{ width: '18rem' }}>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Body>
                <Card.Img variant="top" /*src={RopaImg}*//>
                <Card.Text>
                    *descripcion del producto
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{product.precio}</ListGroup.Item>              
                <ListGroup.Item>Cantidad: <button /*onClick={restar}*/>-</button> 0 <button /*onClick={sumar}*/>+</button></ListGroup.Item>
                <button>Agregar al carrito</button>
            </ListGroup>
        </Card >
    )
}

export default Item










