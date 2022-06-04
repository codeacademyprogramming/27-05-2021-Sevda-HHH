import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { coffeeReducer } from '../modules/coffee/reducer';
import { orderReducer } from '../modules/orders/reducer';
const rootReducer = combineReducers({
    coffee: coffeeReducer,
    orders: orderReducer
})

const middlewares = [thunk]
const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer)