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