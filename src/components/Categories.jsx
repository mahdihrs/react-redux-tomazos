import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../store/actions/categories'
import { Link } from 'react-router-dom'

class Categories extends Component {
    componentDidMount() {
        this.props.fetchCategories()
    }

    render() {
        return (
        <div>
            {this.props.loading ?
                <img className="my-5" src="http://smartvaforu.com/wp-content/uploads/2018/09/preloader.gif" alt="fetching-data" />
                :
                <div className="card">
                    <div className="card-header">
                        Categories
                    </div>
                    {this.props.categories.map(e => {
                    return (
                        <ul key={e.categories.id} className="list-group list-group-flush">
                            <li className="list-group-item"><Link to={`/categories/${e.categories.name}/restaurants/${e.categories.id}`}>{e.categories.name}</Link></li>
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
    categories: state.allCategories.allCategories,
    loading: state.allCategories.loading,
    errors: state.allCategories.fetchingErrors
})

const mapDispatchToProps = (dispatch) => ({
    fetchCategories: () => dispatch(fetchCategories())
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
