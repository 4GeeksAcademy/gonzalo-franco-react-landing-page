import React from "react";
import PropTypes from 'prop-types'

const Cardbody = () => {
    return(
        <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div className="card-footer">
    <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  </div>
    )
}

export default Cardbody;