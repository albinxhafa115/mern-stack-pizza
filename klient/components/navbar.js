import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../actions/userActions'
export default function Navbar() {
  const cartstate = useSelector(state => state.cartReducer)
  const userState = useSelector(state => state.loginUserReducer)
  const { currentUser } = userState;
  const dispatch = useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href='/' style={{ fontsize: '20px' }}>115's Pizza</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (<div><h1>{currentUser.name}</h1><h1><a style={{ textDecoration: 'none', color: 'black' }} href='/orders'>Orders</a></h1>

              <h4 onClick={() => dispatch(logoutUser())}>Signout</h4></div>
            ) : (<li className="nav-item active">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>)}



            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}