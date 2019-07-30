import React from 'react';
import Banner from './banner';
import Form from './Form';
import CurseGrid from './CurseGrid';
import Course from './Course';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import History from './History';

const App = () => 
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="/cursos/:id" component={Course} />
            <Route path="/cursos" component={CurseGrid} />
            <Route path="/historial/:valor" component={History} />
            <Route path="/historial" component={History} />
            <Route path="/formulario" component={ () => <Form name="Página de contacto"/>} />
            <Route component={ () => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Página no encontrada</span>
                </div>
            )} />
        </Switch>
            
    </Router>
    

export default App;
