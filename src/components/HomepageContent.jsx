import React from 'react'

const Homepage = (props) => {
    return (
        <div className="jumbotron jumbotron-fluid vh-100" style={{backgroundImage: `url('https://images.pexels.com/photos/459469/pexels-photo-459469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=640')`}}>
            <div className="container mt-5">
                <h1 className="display-4" style={{color: '#fff', fontWeight: '700'}}>TOMAZOS</h1>
                <div className="d-flex justify-content-center">
                    <input className="form-control mr-sm-2 col-10" type="search" placeholder="Find Restaurants" aria-label="Search" />
                </div>
                {/* <p className="lead" style={{color: '#fff'}}>Find recommended restaurants...</p> */}
            </div>
        </div>
    )
}

export default Homepage