import { FETCH_CITIES, FETCH_CITIES_ERROR } from './actionType'
import CityList from '../../Dummies/cities'

const cities = {
    allCities: CityList,
    loading: false,
    error: {},
}

export default function cityList(state=cities, action) {
    const { type, payload } = action

    switch (type) {
        case FETCH_CITIES:
            return {
                ...cities,
                loading: false,
                allCities: payload
            }
        case FETCH_CITIES_ERROR:
            return {
                ...cities,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}