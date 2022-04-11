import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { Button, Card, Col, Row, Container } from "react-bootstrap";

//Estilos
import './styles.css';

const CardHero = (props) => {

    //MODAL 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //MODAL 2
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    //Formulario del modal 2
    const [heroes, setFormHeroes] = useState(
        {
            heroe: props.heroe.heroe,
            edad: props.heroe.edad,
            imagen: props.heroe.imagen,
            nombre: props.heroe.nombre,
            superpoder: props.heroe.superpoder,
            descripcion: props.heroe.descripcion,
            debilidad: props.heroe.debilidad
        }
    );

    const handleChange = (e) => {
        setFormHeroes({
            ...heroes,
            [e.target.name]: e.target.value
        })

    }



    return (
        <div>
            <Col>
                <Container>
                    <Card style={{ width: '20rem' }} >
                        <Card.Img variant="top" src={props.heroe.imagen} />
                        <Card.Body>
                            <Card.Title >{props.heroe.heroe}</Card.Title>
                            <Card.Text>Nombre: {props.heroe.nombre}</Card.Text>
                            {/* <Card.Text>ID: {props.keyID}</Card.Text> */}
                            <Card.Text>Edad: {props.heroe.edad}</Card.Text>
                            <Button variant="primary" onClick={handleShow}>Más Información</Button>
                            <Button variant="danger" onClick={() => props.onDeleteFunction(props.keyID)}>BORRAR</Button>
                            <Button variant="secondary" onClick={handleShow2}>Actualizar</Button>
                        </Card.Body>
                    </Card>
                </Container>
            </Col>

            {/* Modal 1 - CONSULTAR MÁS INFORMACIÓN HEROE*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="fondoTarjeta letraTarjeta">
                    <Modal.Title>{props.heroe.heroe}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><span>Nombre: </span>{props.heroe.nombre}</p>
                    <p><span>Edad: </span>{props.heroe.edad}</p>
                    <p><span>Superpoder: </span>{props.heroe.superpoder}</p>
                    <p><span>Descripcion: </span>{props.heroe.descripcion}</p>
                    <p><span>Debilidad: </span>{props.heroe.debilidad}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>



            {/* Modal 2 - EDITAR SUPERHEROE*/}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton className="fondoTarjetaActualizar letraTarjeta">
                    <Modal.Title>{props.heroe.heroe}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicHeroe">
                            <Form.Label column sm={2}><span>Heroe:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Heroe"
                                    name="heroe"
                                    value={heroes.heroe}
                                    onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicNombre">
                            <Form.Label column sm={2}><span>Nombre:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre"
                                    name="nombre"
                                    value={heroes.nombre}
                                    onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicEdad">
                            <Form.Label column sm={2}><span>Edad:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Edad"
                                    name="edad"
                                    value={heroes.edad}
                                    onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicSuperpoder">
                            <Form.Label column sm={2}><span>Superpoder:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Superpoder"
                                    name="superpoder"
                                    value={heroes.superpoder}
                                    onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicDescripcion">
                            <Form.Label column sm={2}><span>Descripcion:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Descripcion"
                                    name="descripcion"
                                    value={heroes.descripcion}
                                    onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicDebilidad">
                            <Form.Label column sm={2}><span>Debilidad:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Debilidad"
                                    name="debilidad" 
                                    value={heroes.debilidad}
                                    onChange={handleChange}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicImagen">
                            <Form.Label column sm={2}><span>Imagen:</span></Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="text"
                                    placeholder="Imagen"
                                    name="imagen" 
                                    value={heroes.imagen}
                                    onChange={handleChange}/>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Cerrar
                    </Button>
                    <Button variant="success" onClick={() => props.onUpdateFunction(props.keyID, heroes)}>
                        Actualizar
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    );


}

export default CardHero