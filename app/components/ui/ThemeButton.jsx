'use client'

import { useTheme } from "next-themes"
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import { useEffect, useState } from "react"

const ThemeButton = () => {
    const {resolvedTheme,setTheme} = useTheme()

    const [monted,setMounted] = useState(false)

    useEffect(()=> setMounted(true),[])

    if(!monted){
        return null
    }

  return <button aria-label="Toggle Dark Mode" 
  type="button"
  className='flex items-center justify-center rounded-lg p-2 transition-'
   onClick={()=> setTheme(resolvedTheme ==='dark' ?'light' : 'dark')}
   >{resolvedTheme === 'dark' ? <SunIcon className='h-5 w-5 text-orange-300' /> :<MoonIcon className='h-5 w-5 text-slate-800' /> }</button>
}

export default ThemeButton
