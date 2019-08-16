import React, { Fragment, useState } from 'react';
import useCourse from '../CustomHooks/useCourse';

const Course = ({ match }) => {

    const [comment, setComment] = useState("Sin comentarios");
    const course = useCourse(match.params.id);

    const setMyComment = event => {
        setComment(event.target.value)
    }
        return (
            <div className="ed-grid m-grid-3">
                {
                    course ? (
                        <Fragment className="ed-grid ">
                            <div className="l-block m-grid-3">
                                <h1 className="m-grid-3">{course.title}</h1>
                                <img className="m-grid-1" src={course.image} alt={course.title}/>
                                <p className="m-grid-2">Profesor: {course.profesor}</p>
                            </div>
                            <div className="ed-grid">
                                <h2 >Escribe tu comentario</h2>
                                <input type="text" placeholder="Escribe . . ."  onChange={setMyComment.bind(this)}/>
                                <p>{comment}</p>
                            </div>
                        </Fragment>
                    ):(
                        <h1>El curso no existe</h1>
                    )
                }
            </div>
        );  
} 

export default Course;