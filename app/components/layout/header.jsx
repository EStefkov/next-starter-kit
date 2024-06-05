import React from 'react'

import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
const Header = () => {
  return (
    <header className="bg-blue-100 p-4">
    <nav className='container'>
      <ul className="flex gap-3 m-4 ">
        <li>
        <NavLink href="/" >Home</NavLink>
        </li>
          <li>
          <NavLink href="/about" >About</NavLink>
          </li>
          <li>
          <NavLink href="/posts" >Posts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
