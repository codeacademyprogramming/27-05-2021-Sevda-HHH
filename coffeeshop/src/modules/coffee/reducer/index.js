
import { COFFEE_ACTIONS } from '../actions/consts'
import { ASYNC_STATUS } from '../../../redux/consts'


const initialState = {
    status: ASYNC_STATUS.IDLE,
    data: [],
    error: null
}
export function coffeeReducer(state = initialState, action) {
    switch (action.type) {

        case COFFEE_ACTIONS.GET_COFFEE:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: [],
                error: null

            }
        case `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`:
            return {
                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null

            }
        case `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                error: action.error,
                data: []
            }
        case `${COFFEE_ACTIONS.GET_COFFEE}_LOADING`:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                error: null,
            }
        default:
            break;
    }
    return state;
}