import { ISLOGIN, USERSIGNOUT } from '../reducers/actionType'

export function someoneLogin(email) {
    // console.log('mau login')
    return dispatch => {
        dispatch({
            type: ISLOGIN,
            payload: email,
        })
    }
}

export function userLogout() {
    return dispatch => {
        dispatch({
            type: USERSIGNOUT,
        })
    }
}