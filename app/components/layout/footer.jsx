import React from 'react'
import styles from './footer.module.css'
import NavLink from '../ui/NavLink'

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <ul className={styles.nav}>
              <li><NavLink href="/about">About Us</NavLink></li>
              <li><NavLink href="/contact">Contact</NavLink></li>
              <li><NavLink href="/">Privacy Policy</NavLink></li>
            </ul>
          </div>
        </footer>
      )
  
}

export default Footer
