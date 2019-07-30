import React from 'react';
const cursos = [
    {
        id: 1,
        title:'React desde cero',
        image:'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
        price: '40',
        profesor:'Beto Quiroga'
    },
    {
        id: 2,
        title:'Infraestructura de Redes',
        image:'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Infraestructura.png',
        price: '30',
        profesor:'Paula Leon'
    },
    {
        id: 3,
        title:'Android con Webservices',
        image:'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Webservice.png?itok=ZOCP4JVV',
        price: '50',
        profesor:'José Dimas Luján'
    },
    {
        id: 4,
        title:'Fundamentos de Redes',
        image:'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Fundamentos.png',
        price: '30',
        profesor:'Paula Leon'
    }
]
const Course = ({ match }) => {
    const cursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0]

    return(
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? (
                    <>
                        <h1 m-grid-3>{cursoActual.title}</h1>
                        <img className="m-grid-1" src={cursoActual.image} alt={cursoActual.title}/>
                        <p className="m-grid-2">Profesor: {cursoActual.profesor}</p>
                    </>
                ):(
                    <h1>El curso no existe</h1>
                )
            }
         
            
        </div>

    )
    }   

export default Course;