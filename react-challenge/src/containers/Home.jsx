import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    const restos = props.restos.map(e => {
        return (
            <div key={e.restaurant.id} className="col-md-5 container">
                <div className="card my-3" style={{minWidth: '600px', minHeight: '450px', maxWidth: '600px', maxHeight: '450px'}}>
                    <div className="card-body">
                        <div style={{minWidth: '400px', minHeight: '100px'}}>
                            <img style={{maxWidth: '400px', maxHeight: '300px'}} src={e.restaurant.featured_image} alt={e.restaurant.name}/>
                        </div>
                        <div className="mt-3" style={{fontSize: '0.85em'}}>
                            <h5 className="card-title">{e.restaurant.name}</h5>
                            <p className="card-text">{e.restaurant.location.address}</p>
                        </div>
                        <Link to={`/resto/${e.restaurant.id}`} className="btn btn-success btn-sm">Detail</Link>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {restos}
        </div>
    );
}

export default Home;