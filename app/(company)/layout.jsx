'use client'

import React from 'react';
import { motion } from 'framer-motion';
import NavLink from '../components/ui/NavLink';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
  { href: '/posts', label: 'Posts' },
];

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const CompanyLayout = ({ children }) => {
  return (
    <section className='py-24'>
      <div className='container flex'>
        <div className='overflow-y-auto border-r border-gray-200 py-6 pr-12'>
          <nav className='flex flex-col'>
            <motion.ul
              role='list'
              className='flex flex-1 flex-2 flex-col gap-y-4'
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {navItems.map((item, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>
        <main className='grow ml-12 p-6 bg-gray-50'>{children}</main>
      </div>
    </section>
  );
};

export default CompanyLayout;
