import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./Item.css"

const Item = ({product}) => {
    
    return (
        < Card className="ropaCard" style={{ width: '18rem' }}>
            <Card.Title>{product.title}</Card.Title>
            <Card.Body>
                <img src={product.image} alt="imagenProducto"/>
                <Card.Text>
                    *descripcion del producto
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>${product.price}</ListGroup.Item>              
                <button>Agregar al carrito</button>
            </ListGroup>
        </Card >
    )
}

export default Item










