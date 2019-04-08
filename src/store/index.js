import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import fetchAllRestos from './reducers/allRestos'
import fetchRestoDetail from './reducers/restoDetail'
import userBucket from './reducers/userBucket'
import restoReviews from './reducers/restoReviews'
import allCategories from './reducers/allCategories'
import restosByCategory from './reducers/allRestaurantsByCategory'
import cityList from './reducers/cityList'
import restosByCity from './reducers/restosByCity'

const store = createStore (
    combineReducers({
        fetchAllRestos, 
        fetchRestoDetail, 
        userBucket,
        restoReviews,
        allCategories,
        restosByCategory,
        cityList,
        restosByCity
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
