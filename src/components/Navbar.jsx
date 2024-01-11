import React from 'react';
import { styles } from '@/app/styles';
import { navLinks } from '@/constants/constants';

const Navbar = () => {
  return (
    <div
      className={`${styles.paddingX} py-5 z-20 fixed flex items-center justify-between w-full top-0`}
    >
      <div className='flex flex-row items-center'>
        <img src='logo.svg' alt='logo' className='w-20 h-20' />
        <span className='font-bold text-xl'>Pratyush | Portfolio</span>
      </div>
      <ul className='flex flex-row gap-10 mr-3'>
        {navLinks.map((data) => (
          <li
            key={data.id}
            className='text-white font-medium max-w-10 hover:font-semibold hover:text-secondary text-[18px]'
          >
            <a href={`#${data.id}`}>{data.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
