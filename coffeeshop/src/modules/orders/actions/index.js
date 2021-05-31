import { orderService } from '../service'
import { COFFEE_ACTIONS, ORDER_ACTIONS } from './consts'

export function getOrders(dispatch) {
    dispatch({
        type: ORDER_ACTIONS.GET_ORDER,
        payload: []
    })
    orderService.getOrder()
        .then((orders) => {
            console.log(orders)
            dispatch({
                type: `${ORDER_ACTIONS.GET_ORDER}_SUCCESS`,
                payload: orders
            })
        }).catch(err => {
            dispatch({
                type: `${ORDER_ACTIONS.GET_ORDER}_ERROR`,
                payload: []
            })
        })
}