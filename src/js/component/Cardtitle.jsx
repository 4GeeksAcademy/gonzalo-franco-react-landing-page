import React from "react";
import PropTypes from 'prop-types'

const Cardtitle = ({
    title = 'A Warm Welcome!',
    coment = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci? Repellendus, perspiciatis? Atque necessitatibus sapiente doloribus nihil deleniti in rerum modi quas, inventore facere laboriosam magni nulla, repellendus obcaecati tenetur.',
    buttonURL = '#',
    buttonLabel = 'Call to action!',
}) => {

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">A Warm Welcome!</h1>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci? Repellendus, perspiciatis? Atque necessitatibus sapiente doloribus nihil deleniti in rerum modi quas, inventore facere laboriosam magni nulla, repellendus obcaecati tenetur.</p>
                <a href="#" className="btn btn-primary">Call to action! </a>
            </div>
        </div>
    )
}

export default Cardtitle;