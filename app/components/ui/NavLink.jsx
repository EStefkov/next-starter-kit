'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

const NavLink = ({href, ...rest}) => {

    const pathname = usePathname()
    const isActive = href === pathname
    console.log(isActive);
  return (
    <Link className={isActive ? 'text-cyan-400' :'' }  href={href} {...rest}/>
  )
}

export default NavLink
