import React from 'react';
import logo from '../../../public/other/car-png.webp';
import Logo1 from '../../../public/social/instagram-brands.svg';
import Image from 'next/image';
import Link from 'next/link';
import { NavBar } from './navBar';
import { usePathname } from 'next/navigation';
import s from './Header.module.css';

export const Header = ({ modalHandler }: { modalHandler: () => void }) => {
  const currentPath = usePathname();
  const textColor = currentPath === '/agreements' ? 'text-white' : 'text-black';
  return (
    <div
      id="header"
      className="flex items-center w-full border-stone-300 p-4 justify-center h-[70px] fixed backdrop-blur-sm bg-white/10"
    >
      <div className="flex items-center w-full max-w-[1140px] justify-between">
        <Link href={'/'} className="flex cursor-pointer">
          <h1 className={s.logo}>AI</h1>
          <div className="flex leading-[0.85rem] flex-col items-center justify-center pl-[8px] text-sm">
            <p>Alexey</p>
            <p>Iankov</p>
          </div>
        </Link>
        <NavBar color={textColor} />
        <div className="flex gap-6 items-center justify-center text-lg">
          <a href="tel:+79248133753" className={`${textColor} font-medium`}>
            +7 924 813 37 53
          </a>
          <button
            className="px-4 py-2 text-sm transition ease-in-out delay-100 rounded-lg text-white hover:bg-red-500 bg-red-600"
            onClick={modalHandler}
          >
            Оставить заявку
          </button>
          {/* <Image
            src={logo1}
            height={20}
            width={20}
            alt={''}
            color='red'
            // style={{ fill: 'red', stroke: 'red', color: 'blue' }}
          /> */}
          {/* <div
            style={{
              maxWidth: '20px',
              maxHeight: '20px',
              fill: 'red',
            }}
          >
            <Logo1 />
          </div> */}
        </div>
      </div>
    </div>
  );
};
