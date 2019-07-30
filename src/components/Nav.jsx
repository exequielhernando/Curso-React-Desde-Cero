import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => (
    <Fragment>
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cursos">Cursos</NavLink></li>
                <li><NavLink to="/formulario">Formulario</NavLink></li>
            </ul>
        </nav>
    </Fragment>
    
         
)
 export default Nav;