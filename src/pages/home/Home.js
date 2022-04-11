import React from "react";
import { Row } from "react-bootstrap";
import CardHero from "../../components/CardHero";


const Home = (props) => {
    return(
    <Row xs={1} md={3} className="g-5">
        {
            /* Iterar sobre heroes */
            Object.entries(props.heroes).map(([key, value]) => {
                return (
                    <CardHero 
                        heroe={value}
                        keyID={key} 
                        onDeleteFunction={props.onDelete} 
                        onUpdateFunction={props.onUpdate}></CardHero>
                )
            })

        }
    </Row>
    );
}

export default Home;