import React from 'react'

import NavLink from '../ui/NavLink'
import ContactButton from '../ui/ContactButton'
import ThemeButton from '../ui/ThemeButton'
const Header = () => {
  return (
    <header className=" p-4">
    <nav className='container flex items-center justify-between'>
      <ul className="flex gap-6 m-2 text-gray-500 ">
        <li>
        <NavLink href="/" >Home</NavLink>
        </li>
          <li>
          <NavLink href="/about" >About</NavLink>
          </li>
          <li>
          <NavLink href="/posts" >Posts</NavLink>
          </li>
          <li>
          <NavLink href="/guestbook" >Guestbook</NavLink>
          </li>
        </ul>


        <ThemeButton />
      </nav>
    </header>
  )
}

export default Header
