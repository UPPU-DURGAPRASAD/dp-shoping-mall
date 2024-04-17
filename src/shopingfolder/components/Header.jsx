
import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
       <div className="left">
        <div className="logo">
          <img className='logo1' src="images/logo1.png" alt="shop logo" />
        </div>
       </div>
       <div className="center">
        <ul>
          <li>Men</li>
          <li>Woman</li>
          <li>Children</li>
        </ul>
       </div>
       <div className="search">
        <input type="text" placeholder='Search...' />
       </div>
       <div className="right">
        <div className="signin">
          SignIn / SignUp
        </div>
        <div className="cart">
          Cart
        </div>
       </div>

    </div>
    
  )
}

export default Header
