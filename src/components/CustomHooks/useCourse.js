import { useState, useEffect } from 'react';
import Axios from 'axios';

const useCourse = ({id}) => {
    const [course, setCourse ] = useState({})

    useEffect( () => {            
        Axios.get(`http://my-json-server.typicode.com/exequielhernando/json-db/cursos/${id}`)
        .then (response => 
            setCourse(response.data)    
        );
    },)

    return course;
}

export default useCourse;