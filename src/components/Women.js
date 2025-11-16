import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Women = () => {
  return (
    <div>
        <p>Women Items:</p>
        <ul>
            <li><NavLink to="grooming">Grooming</NavLink></li>
            <li><NavLink to="shirt">Shirt</NavLink></li>
            <li><NavLink to="trouser">Trouser</NavLink></li>
            <li><NavLink to="jewellery">Jewellery</NavLink></li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Women