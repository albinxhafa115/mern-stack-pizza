import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import { legacy_createStore as CreateStore } from 'redux'
import { getAllPizzasReducer, editPizzaReducer, getPizzaByIdReducer, addPizzaReducer } from './reducers/pizzaReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, loginUserReducer, registerUserReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrderReducer, getAllOrdersReducer } from './reducers/orderReducer'

const finalReducer = combineReducers({
    getAllPizzasReducer: getAllPizzasReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrderReducer: getUserOrderReducer,
    addPizzaReducer: addPizzaReducer,
    getPizzaByIdReducer: getPizzaByIdReducer,
    editPizzaReducer: editPizzaReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})
const store = CreateStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store 