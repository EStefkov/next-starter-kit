'use client'

import { ThemeProvider } from 'next-themes';

const Providers = ({children}) => {
  return (
    <div>
      <ThemeProvider attribute='class'>{children}</ThemeProvider>
    </div>
  )
}

export default Providers
