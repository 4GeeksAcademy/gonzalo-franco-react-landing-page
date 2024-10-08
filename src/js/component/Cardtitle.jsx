import React from "react";
import PropTypes from 'prop-types'

const Cardtitle = ({
    title = 'A Warm Welcome!',
    coment = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci? Repellendus, perspiciatis? Atque necessitatibus sapiente doloribus nihil deleniti in rerum modi quas, inventore facere laboriosam magni nulla, repellendus obcaecati tenetur.',
    buttonURL = '#',
    buttonLabel = 'Call to action!',
}) => {

    return (
        <div>
        <div className="container-fluid d-flex justify-content-center mt-3">
        <div className="cardTitle col-8">
            <div className="card-bodyb m-3">
                <h1 className="card-title">{title}</h1>
                <p className="card-text">{coment}</p>
                <a href={buttonURL} className="btn btn-primary">{buttonLabel}</a>
            </div>
        </div>
        </div>
        </div>
    )
}
Cardtitle.PropTypes = {
    title: PropTypes.string,
    coment: PropTypes.string,
    buttonURL: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Cardtitle;