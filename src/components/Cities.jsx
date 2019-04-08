import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cities extends Component {
    render() {
        return (
            <div>
                {this.props.loading ?
                    <h5>Please wait...</h5>
                    :
                    <div className="card">
                        <div className="card-header">
                            Locations
                        </div>
                        {this.props.allCities.map(e => {
                            return (
                                <ul key={e.id} className="list-group list-group-flush">
                                    <li className="list-group-item"><Link to={`/resto/${e.name}/${e.id}`}>{e.name}</Link></li>
                                </ul>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    allCities: state.cityList.allCities,
    loading: state.cityList.loading
})

export default connect(mapStateToProps)(Cities)