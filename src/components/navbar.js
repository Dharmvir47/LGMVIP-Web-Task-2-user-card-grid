import React from 'react'
export default function NavBar({onButtonClick}) {
  return (
    <div>
    <nav >
      <ul className='navbar'>
        <li className='navbar-item'>Premium users</li>
        <li className='li-fl' > <button className='navbar-item-fl' onClick = {onButtonClick}>Get users</button></li>
      </ul>
    </nav>
    </div>
  )
}
