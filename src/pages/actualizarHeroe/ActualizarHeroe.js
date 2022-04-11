import React from "react";

const ActualizarHeroe = () => {



    return (
        <div>
            <Container>
                <h1>Actualizar Heroe</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Heroe</Form.Label>
                        <Form.Select disabled>
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicHeroe">
                        <Form.Label>Heroe</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Heroe"
                            name="heroe"
                            value={heroes.heroe}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEdad">
                        <Form.Label>Edad</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Edad"
                            name="edad"
                            value={heroes.edad}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImagen">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Imagen"
                            name="imagen"
                            value={heroes.imagen}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nombre"
                            name="nombre"
                            value={heroes.nombre}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSuperpoder">
                        <Form.Label>Superpoder</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Superpoder"
                            name="superpoder"
                            value={heroes.superpoder}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion"
                            name="descripcion"
                            value={heroes.descripcion}
                            onChange={handleChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDebilidad">
                        <Form.Label>Debilidad</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Debilidad"
                            name="debilidad"
                            value={heroes.debilidad}
                            onChange={handleChange} />
                    </Form.Group>



                    {/* Aqui le pasamos la función que obtenemos por prop y le pasamos por parametro el
                    heroe a ingresar en firebase*/}
                    <Button variant="primary" type="button" onClick={() => onSubmit(heroes)}>
                        Crear
                    </Button>
                </Form>
            </Container>
        </div>
    );

}

export default ActualizarHeroe;