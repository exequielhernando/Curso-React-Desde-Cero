import React from 'react';
import Banner from './Banner/banner';
import Form from './Form/Form';
import Courses from './Course/Courses';
import Course from './Course/Course';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header/Header';
import History from './History/History';
import Users from './Users/Users';

const App = () => 
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Banner} />
            <Route path="/cursos/:id" component={Course} />
            <Route path="/cursos" component={Courses} />
            <Route path="/historial/:valor" component={History} />
            <Route path="/historial" component={History} />
            <Route path="/usuarios" component={Users} />
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
