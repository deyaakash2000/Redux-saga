import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../css/Header.css'
function Header() {
    const data = useSelector((state)=>state.cartData)
  return (
    <div>

        <div className="header">
          <Link to='/cart'>
            <div className="cart-div">
                <span>{data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header
