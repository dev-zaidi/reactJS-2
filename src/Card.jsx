import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'

const Card = ({...props}) => {
  return (
    <>
    <div className="card" >
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <button className='button'><small>NEW</small></button><br /><br />
        <h2 style={{fontSize:'25px'}} className="card-title"><b>{props.name}</b></h2>
        <p style={{fontSize:'20px'}} className="card-text"><small className="text-body-secondary">{props.description}</small></p>
        <p className="card-text mt-5"><b>Rs.{props.price}</b></p>
      </div>
    </div>
    <div className="col-md-4 p-2">
      <img id='image' src={props.url} className="img-fluid rounded-start" alt="..." />
    </div>

  </div>
</div>
    </>
  )
}

export default Card