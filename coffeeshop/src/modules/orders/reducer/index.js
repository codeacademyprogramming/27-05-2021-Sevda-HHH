import { ORDER_ACTIONS, ORDER_STATUS } from '../actions/consts'
import { ASYNC_STATUS } from '../../../redux/consts'


const initialState = {
    status: ASYNC_STATUS.IDLE,
    orderStatus: ORDER_STATUS.CREATED,
    data: {},
    error: null,
    count: 0
}
export function orderReducer(state = initialState, action) {
    switch (action.type) {

        case ORDER_ACTIONS.GET_ORDER:
            return {
                ...state,
                status: ASYNC_STATUS.LOADING,
                data: {},
                error: null,
                count: 0

            }
        case `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`:

            return {

                ...state,
                status: ASYNC_STATUS.SUCCESS,
                data: action.payload,
                error: null,
                orderStatus: ORDER_STATUS.CREATED,
                count: 1

            }
        case `${ORDER_ACTIONS.GET_ORDER}_ERROR`:
            return {
                ...state,
                status: ASYNC_STATUS.ERROR,
                error: action.error,
                data: []
            }
        case `${ORDER_ACTIONS.GET_ORDER}_LOADING`:
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