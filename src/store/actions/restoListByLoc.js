import api from '../../api/api'
import axios from 'axios'
import { RESTOS_BY_LOC, FETCH_RESTOSBYLOC_ERROR } from '../reducers/actionType'
require('dotenv').config()

export function fetch(entity_id) {
    return dispatch => {
        console.log(entity_id)
        console.log(process.env.REACT_APP_ZOMATOS)
        
        axios({
            // url: `/location_details?entity_id=${entity_id}&entity_type=zone`,
            url: `https://developers.zomato.com/api/v2.1/location_details?entity_id=${entity_id}&entity_type=subzone`,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'user-key': `${process.env.REACT_APP_ZOMATOS}`,
            }
        })
        .then(({data}) => {
            console.log(data)
            dispatch({
                type: RESTOS_BY_LOC,
                payload: {
                    totalRes: data.num_restaurant,
                    cuisines: data.top_cuisines,
                    res: data.best_rated_restaurant
                }
            })
        })
        .catch(err => {
            console.log(JSON.stringify(err.response))
            dispatch({
                type: FETCH_RESTOSBYLOC_ERROR,
                payload: err.response
            })
        })
    }
}