import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';
const Nav = () => (
    <Fragment>
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cursos">Cursos</NavLink></li>
                <li><NavLink to="/formulario">Formulario</NavLink></li>
                <li><NavLink to="/usuarios">usuarios</NavLink></li>
                <CartCounter></CartCounter>
            </ul>
        </nav>
    </Fragment>
    
         
)
 export default Nav;