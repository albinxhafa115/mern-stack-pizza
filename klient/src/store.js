import { combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import { legacy_createStore as CreateStore } from 'redux'
import { getAllPizzasReducer, editPizzaReducer, getPizzaByIdReducer, addPizzaReducer } from './reducers/pizzaReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducer'
import { getAllUsersReducer, loginUserReducer, registerUserReducer,editUserReducer,getUserByIdReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrderReducer, getAllOrdersReducer } from './reducers/orderReducer'
import { getAllOffersReducer, addOfferReducer, getOfferByIdReducer, editOfferReducer} from './reducers/offerReducer'
import {getAllCsoonpizzasReducer, addCsoonpizzaReducer,getCsoonpizzaByIdReducer,editCsoonpizzaReducer} from './reducers/csoonpizzaReducer'
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
    getAllUsersReducer: getAllUsersReducer,
    editUserReducer: editUserReducer,
    getUserByIdReducer: getUserByIdReducer,
    getAllOffersReducer: getAllOffersReducer,
    addOfferReducer :addOfferReducer,
    getOfferByIdReducer: getOfferByIdReducer,
    editOfferReducer: editOfferReducer,
    editCsoonpizzaReducer: editCsoonpizzaReducer,
    getCsoonpizzaByIdReducer: getCsoonpizzaByIdReducer,
    addCsoonpizzaReducer: addCsoonpizzaReducer,
    getAllCsoonpizzasReducer: getAllCsoonpizzasReducer
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