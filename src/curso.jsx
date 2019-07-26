import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Curso = ({id, image, title, price, profesor}) => (
    <article className="card" id={title}>
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <Link to={`/cursos/${id}`}>
                <img src={image } alt={title} />
            </Link>
            
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="center">{title}</h3>
            <div className="s-mb-2 s-main-center">
                <div className="card__teacher s-cross-center">
                    <div className="card__avatar s-mr-1">
                    <div className="circle img-container">
                        <img src="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/paula-leon_400x400.png" alt="AAA" />
                    </div>
                    </div>
                    <span className="small">{profesor}</span>
                </div>
            </div>
            <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="https://ed.team">{`$ ${price}`}</a>
            </div>
        </div>
    </article>
);
Curso.propTypes = {
    title : propTypes.string,
    image : propTypes.string,
    price : propTypes.string,
    profesor : propTypes.string,
}
Curso.defaultProps = {
    title : 'No se encontró titulo',
    image : 'http://blog.davidrojo.es/wp-content/uploads/2011/04/file-not-found.jpg',
    price : '--',
    profesor : ''
}
export default Curso;