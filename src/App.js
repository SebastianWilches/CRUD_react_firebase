import './App.css';
import React, { useEffect, useState } from 'react';

//Import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Imports de componentes
import NavBar from './components/NavBar';
//Imports de paginas
import Home from './pages/home/Home';
import CrearHeroe from './pages/CrearHeroe/CrearHeroe';
//Rutas
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  //Hook constructor, apenas se levante el componente llama esta función
  useEffect(() => {
    fetchHeroes()
  }, [])



  // Deestructuracion para heroes y su funcion
  const [heroes, setHeroes] = useState(
    [{
      debilidad: "Electricidad",
      descripcion: "Pantera Negra (T'Challa) (del inglés original, Black Panther) es un superhéroe de la compañía estadounidense Marvel Comics, creado por Stan Lee y Jack Kirby para el número 52 de The Fantastic Four. Es el primer superhéroe de tez negra de la historia de Marvel y se debe destacar que el personaje fue creado con anterioridad al Partido Pantera Negra, el cual fue fundado en octubre del mismo año. Es el rey y protector de la ficticia nación africana de Wakanda.",
      edad: "37",
      heroe: "Black Panther",
      imagen: "https://www.pandaancha.mx/plds/articulos/76431d4c3416a6969d57cfff9e19e4b2945775064.png",
      nombre: "T'Challa",
      superpoder: "Garras de Titanio"
    },
    {
      debilidad: "No matar.",
      descripcion: "La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),14​15​16​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.",
      edad: "25",
      heroe: "Batman",
      imagen: "https://gogocatrina.com/wp-content/uploads/2020/01/comic-de-la-semana-batman-660x400@2x.jpg",
      nombre: "Bruce Wayne",
      superpoder: "No tiene."
    },
    {
      debilidad: "No matar.",
      descripcion: "La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),14​15​16​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.",
      edad: "25",
      heroe: "Batman",
      imagen: "https://gogocatrina.com/wp-content/uploads/2020/01/comic-de-la-semana-batman-660x400@2x.jpg",
      nombre: "Bruce Wayne",
      superpoder: "No tiene."
    },
    {
      debilidad: "No matar.",
      descripcion: "La identidad secreta de Batman es Bruce Wayne (Bruno Díaz en algunos países de habla hispana),14​15​16​ un multimillonario magnate empresarial y filántropo dueño de Empresas Wayne en Gotham City. Después de presenciar el asesinato de sus padres, el Dr. Thomas Wayne y Martha Wayne en un violento y fallido asalto cuando era niño, juró venganza contra los criminales, un juramento moderado por el sentido de la justicia. Bruce Wayne se entrena física e intelectualmente y crea un traje inspirado en los murciélagos para combatir el crimen, con sus gadgets de combate del batcinturón y sus vehículos.",
      edad: "25",
      heroe: "Batman",
      imagen: "https://gogocatrina.com/wp-content/uploads/2020/01/comic-de-la-semana-batman-660x400@2x.jpg",
      nombre: "Bruce Wayne",
      superpoder: "No tiene."
    }]

  )

  //Handle: Enviar o recibir datos, se lo pasamos por props a los componentes
  const handleSubmit = (nuevoHeroe) => {
    sendHeroes(nuevoHeroe);

    
    fetchHeroes();
  }

  const handleDelete = (idHeroe) => {
    deleteHeroes(idHeroe);

    fetchHeroes();
  }

  const handleUpdate = (idHeroe, objectHero) => {
    updateHeroes(idHeroe, objectHero);

    fetchHeroes();
  }



  //                    Metodos Firebase
  const urlFirebase = 'https://peticiones---giweb-default-rtdb.firebaseio.com/heroes';

  //Trae los heroes
  const fetchHeroes = async () => {
    const response = await fetch(`${urlFirebase}.json`);
    const data = await response.json();

    setHeroes(data);
  }

  const sendHeroes = async (objectHero) => {
    const response = await fetch(`${urlFirebase}.json`,
      {
        method: 'POST',
        body: JSON.stringify(objectHero),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const data = await response.json();
    console.log(data);

    fetchHeroes();
  }

  const deleteHeroes = async (id) => {
    const response = await fetch(`${urlFirebase}/${id}.json`, {
      method: 'DELETE'
    })

    const data = await response.json();
    console.log(data);

    fetchHeroes();
  }

  const updateHeroes = async (id, objectHero) => {
    const response = await fetch(`${urlFirebase}/${id}.json`, {
      method: "PUT",
      body: JSON.stringify(objectHero),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    const data = await response.json();
    console.log(data);
  }



  return (
    <div>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/home' element={<Home heroes={heroes} onDelete={handleDelete} onUpdate={handleUpdate}></Home>}></Route>
          {/* Le pasamos la funcion por parametro al componente de creación */}
          <Route path='/crearHeroe' element={<CrearHeroe onSubmit={handleSubmit}></CrearHeroe>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
