import api from '../../api/api'
import { FETCH_CATEGORIES, FETCH_CATEGORIES_ERROR } from '../reducers/actionType'
require('dotenv').config()

export function fetchCategories() {
    return dispatch => {
        api({
            url: `/categories`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`
            }
        })
        .then(({data}) => {
            dispatch({
                type: FETCH_CATEGORIES,
                payload: data.categories
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_CATEGORIES_ERROR,
                payload: err.response
            })
        })
    }
}