import React, { Fragment } from 'react';
import Banner from './banner';
import Formulario from './formulario';
import CurseGrid from './CurseGrid';
import Course from './Course';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import MainMenu from './MainMenu';
import Historial from './Historial';

const App = () => 
    <Router>
        <MainMenu />
        <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="/cursos/:id" component={Course} />
            <Route path="/cursos" component={CurseGrid} />
            <Route path="/historial/:valor" component={Historial} />
            <Route path="/historial" component={Historial} />
            <Route path="/formulario" component={ () => <Formulario name="Página de contacto"/>} />
            <Route component={ () => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )} />
        </Switch>
            
    </Router>
    

export default App;
