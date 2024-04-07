import React from 'react';
import { useCart } from "../context/CartContext";
import { Card, ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import '../index.css';

const Carrito = () => {
    // Importando fuciones del context para manipular carrito y dar formato a valores
    const { cartItems, addToCart, removeFromCart, formatNumber } = useCart();

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <Container className='containerCarrito'>
            <Row className="justify-content-md-center">
                <Col md={8}>
                    <Card>
                        <Card.Header as="h3">Detalle del Pedido</Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {cartItems.map((item) => (
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                        key={item.id}
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{item.name}</div>
                                            ${formatNumber(item.price)} x {item.quantity}
                                        </div>
                                        <div>
                                            <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>-</Button>
                                            <span className="badge bg-dark mx-3">
                                                <h6>${formatNumber(item.price * item.quantity)}</h6>
                                            </span>
                                            <Button variant="primary" size="sm" onClick={() => addToCart(item)}>+</Button>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item className="fw-bold">
                                    <div className='carritoPagar'>
                                        <p>Total: ${formatNumber(totalPrice)}</p>
                                        <Button variant="success" size="sm">Ir a Pagar</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Carrito;





