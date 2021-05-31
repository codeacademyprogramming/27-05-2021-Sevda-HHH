import { coffeeService } from '../service'
import { COFFEE_ACTIONS } from './consts'

export function getCoffee(dispatch) {
    dispatch({
        type: COFFEE_ACTIONS.GET_COFFEE,
        payload: []
    })
    coffeeService.getCoffee()
        .then(({ data }) => {
            dispatch({
                type: `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`,
                payload: data
            })
        }).catch(err => {
            dispatch({
                type: `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`,
                payload: []
            })
        })
}