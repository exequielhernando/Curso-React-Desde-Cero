import React, { Component } from 'react';
import Axios from 'axios';
import CourseGrid from './CourseGrid';

class Courses extends Component{
    constructor(props){
        super(props)
        this.state = {
            courses: []
        }
    }
    componentDidMount(){
        Axios.get('http://my-json-server.typicode.com/exequielhernando/json-db/cursos')
        .then (response => 
            this.setState({
                courses: response.data
            })    
        );
    }
    render(){
        const { courses } = this.state;
        return <CourseGrid courses={courses}/>
    }
}
export default Courses;