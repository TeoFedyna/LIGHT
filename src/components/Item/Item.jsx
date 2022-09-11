import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Item.css"

const Item = ({product}) => {
    
    const [count, setCount] = useState(0);

    let stock = product.stock

    const restar =  () => { 
        if (count <= 0) {
            console.log("lo siento, pero no somos una tienda negativa ;)");
        } else {setCount(count-1)} 
    }

const sumar =  () => {
    if (count >= stock) {
        alert("se nos acabo el stock");    
    } else {setCount(count+1)} 
}

    return (
        < Card className="ropaCard" style={{ width: '18rem' }}>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Body>
                {/* {product.img ? <Card.Img variant="top" src={product.img}/> : <span>no image</span>} */}
                <Card.Text>
                    *descripcion del producto
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>${product.precio}</ListGroup.Item>              
                <ListGroup.Item>Cantidad: <button onClick={restar}>-</button> {count} <button onClick={sumar}>+</button></ListGroup.Item>
                <button>Agregar al carrito</button>
            </ListGroup>
        </Card >
    )
}

export default Item










