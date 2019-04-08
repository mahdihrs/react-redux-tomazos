import api from '../../api/api'
import { FETCH_JAKSEL_RESTOS, RESTO_DETAIL, FETCH_ERROR, FETCH_DETAIL_ERROR, RESET_DETAIL_LOADING } from '../reducers/actionType'
require('dotenv').config()

export function fetchRestos() {
    return dispatch => {
        api({
            // url: `/location_details?entity_id=74004&entity_type=zone`, //Jaksel
            url: `/location_details?entity_id=74003&entity_type=zone`, //Jakut
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': '05d2f9480e0347e4c0e0ea6095c55a14'//`${process.env.REACT_APP_ZOMATOS}`
            }
        })
        .then(({data}) => {
            dispatch({
                type: FETCH_JAKSEL_RESTOS,
                payload: data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR,
                payload: err.response
            })
        })
    }
}

export function detailResto(id) {
    return dispatch => {
        api({
            url: `/restaurant?res_id=${id}`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': '05d2f9480e0347e4c0e0ea6095c55a14'//`${process.env.REACT_APP_ZOMATOS}`
            }            
        })
        .then(({data}) => {
            dispatch({
                type: RESTO_DETAIL,
                payload: {
                    all: data,
                    loc: data.location,
                    rate: data.user_rating
                }
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_DETAIL_ERROR,
                payload: err.response
            })
        })
    }
}

export function resetLogin() {
    return dispatch => {
        dispatch({
            type: RESET_DETAIL_LOADING
        })
    }
}