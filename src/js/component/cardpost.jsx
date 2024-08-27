import React from "react";
import PropTypes from "prop-types";

const CardPost = ({
    imgUrl = "https://picsum.photos/500/325",
    tittle = "Card Title",
    description = "Random image from Picsum!",
    btnRef = "#",
    btnLabel = "Find Out More!"
}) => {
    return (
        <div className="col col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card m-2">
                <img src={imgUrl} className="card-img-top" alt="Just an image" />
                <div className="card-body">
                    <h5 className="card-title text-center">{tittle}</h5>
                    <p className="card-text text-center">{description}</p>
                </div>
                <div className="card-footer text-center">
                    <a href={btnRef} className="btn btn-primary">{btnLabel}</a>
                </div>
            </div>
        </div>
    )
}

CardPost.propTypes = {
    id: PropTypes.number,
    imgUrl: PropTypes.string.isRequired,
    tittle: PropTypes.string,
    description: PropTypes.string,
    btnRef: PropTypes.string,
    btnLabel: PropTypes.string
}

export default CardPost;