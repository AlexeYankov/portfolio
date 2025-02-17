
import { NavBar } from './navBar';
import { useAppStore } from '@/entities/store/app-store';
import Link from 'next/link';

import { Logo } from './Logo';

export const Header = ({ modalHandler }: { modalHandler: () => void }) => {
  const { isBurger, setBurger } = useAppStore();
  const toggleMenu = () => setBurger(!isBurger);
  const openMenuBeforeStyle = isBurger ? 'after:rotate-46 after:mt-[0px]' : '';
  const openMenuAfterStyle = isBurger
    ? 'before:rotate-45 before:!mt-[2px]'
    : '';
  const contactStyle = isBurger
    ? 'hidden'
    : 'hidden sm:flex px-4 py-2 bg-gradient-to-t from-gray-900 to-gray-600 rounded-md text-white ';
  return (
    <div
      id="header"
      className="flex fixed items-center justify-center w-full bg-white z-50"
    >
      <div className="flex items-center w-full max-w-[1140px] p-4 justify-between">
        <Logo/>
        {!isBurger ? <NavBar name="hidden sm:flex" /> : null}

        <div className="flex gap-6 items-center justify-center">
          <Link href='/#contacts' className={contactStyle}>
            Связаться
          </Link>

          <div
            id="burger"
            className={`${
              isBurger ? ' !flex' : ''
            } sm:hidden w-[35px] cursor-pointer h-[35px]`}
            onClick={toggleMenu}
          >
            <div className="flex items-center flex-col justify-center w-full h-full">
              <span
                className={`relative flex w-[65%] items-center 
              before:content-[attr(before)] 
              before:absolute 
              before:w-[27px]
              before:mt-[50%] 
              before:left-[-2px] 
              before:border-2
              ${openMenuBeforeStyle}
              before:border-black
              before:transition before:ease-in-out before:duration-200

              after:content-[attr(after)] 
              after:absolute 
              after:w-[27px]
              after:mt-[-50%] 
              after:left-[-2px] 
              after:border-2
              ${openMenuAfterStyle}
              after:border-black
              after:transition after:ease-in-out after:duration-200
              `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
