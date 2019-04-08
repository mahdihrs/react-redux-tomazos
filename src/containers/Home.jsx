import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchRestos, resetLogin } from '../store/actions/actions'
import { resetLoginReviews } from '../store/actions/restoReviews'
import Cities from '../components/Cities'
import Categories from '../components/Categories'
import HomepageContent from '../components/HomepageContent'

class Home extends Component {
    componentDidMount() {
        this.props.fetchRestos()
        this.props.resetLogin()
        this.props.resetLoginReviews()
    }

    render() {
        return (
            <div>
                {this.props.loading ?
                    <img className="my-5" src="http://smartvaforu.com/wp-content/uploads/2018/09/preloader.gif" alt="fetching-data" />
                    :
                    <div className="container col-sm-12">
                        <div className="row">
                            <div className="col-sm-2 px-0">
                                <Cities />
                            </div>
                            <div className="col-sm-8 px-0">
                                <HomepageContent />
                            </div>
                            <div className="col-sm-2 px-0">
                                <Categories />
                            </div>
                        </div>
                    </div>
                    // <div className="row">{this.props.restos.best_rated_restaurant.map(e => {
                    //     return (
                    //         <div key={e.restaurant.id} className="col-5 container">
                    //             <div className="card my-3 col-md-6" style={{ minWidth: '600px', minHeight: '450px', maxWidth: '600px', maxHeight: '450px' }}>
                    //                 <div className="card-body">
                    //                     <div style={{ minWidth: '400px', minHeight: '100px' }}>
                    //                         <img style={{ maxWidth: '400px', maxHeight: '300px' }} src={e.restaurant.featured_image} alt={e.restaurant.name} />
                    //                     </div>
                    //                     <div className="mt-3" style={{ fontSize: '0.85em' }}>
                    //                         <h5 className="card-title">{e.restaurant.name}</h5>
                    //                         <p className="card-text">{e.restaurant.location.address}</p>
                    //                     </div>
                    //                     <Link to={`/resto/${e.restaurant.id}`} className="btn btn-success btn-sm">Detail</Link>
                    //                 </div>
                    //             </div>
                    //         </div>
                    //     )
                    // })}
                    // </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    restos: state.fetchAllRestos.allRestos,
    loading: state.fetchAllRestos.loading
})

const mapDispatchToProps = (dispatch) => ({
    fetchRestos: () => dispatch(fetchRestos()),
    resetLogin: () => dispatch(resetLogin()),
    resetLoginReviews: () => dispatch(resetLoginReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
