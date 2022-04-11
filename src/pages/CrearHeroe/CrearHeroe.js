import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";


const CrearHeroe = ( {onSubmit} ) => {
    //Creamos un state sobre el form para mirar los cambios sobre los input
    const [heroes, setFormHeroes] = useState(
        {
            heroe: '',
            edad: '',
            imagen: '',
            nombre: '',
            superpoder: '',
            descripcion: '',
            debilidad: ''
        }
    );


    /*Al hacer cambio sobre un elemento en el input, me llamará esta función
    y esa función es la que me va a cambiar el State que tenemos más arriba*/
    const handleChange = (e) => { 
        setFormHeroes({
            ...heroes,
            //El e.target.name me permite reutilizar esta función en todos los inputs
            [e.target.name]: e.target.value
        })

        // console.log(heroes);
    }


    return (
        <div>
            <Container className='mb-3'>
                <h1>Añadir SuperHeroe</h1>
                <Form>
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
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSuperpoder">
                        <Form.Label>Superpoder</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Superpoder"
                            name="superpoder"
                            value={heroes.superpoder} 
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Descripcion"
                            name="descripcion"
                            value={heroes.descripcion} 
                            onChange={handleChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDebilidad">
                        <Form.Label>Debilidad</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Debilidad"
                            name="debilidad"
                            value={heroes.debilidad} 
                            onChange={handleChange}/>
                    </Form.Group>



                    {/* Aqui le pasamos la función que obtenemos por prop y le pasamos por parametro el
                    heroe a ingresar en firebase*/}
                    <Button variant="primary" type="button" onClick={ () => onSubmit(heroes) }> 
                        Crear
                    </Button>
                </Form>
            </Container>
        </div>
    );
}

export default CrearHeroe;