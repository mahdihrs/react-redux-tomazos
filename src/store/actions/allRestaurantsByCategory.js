import api from '../../api/api'
import { FETCH_RESTOS_BY_CAT, FETCH_RESTOS_BY_CAT_ERROR } from '../reducers/actionType'
require('dotenv').config()

export function fetchRestosByCat(id) {
    return dispatch => {
        api({
            url: `/search?entity_id=74&entity_type=city&count=15&category=${id}`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`
            }
        })
        .then(({data}) => {
            dispatch({
                type: FETCH_RESTOS_BY_CAT,
                payload: data.restaurants
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_RESTOS_BY_CAT_ERROR,
                payload: err.response
            })
        })
    }
}