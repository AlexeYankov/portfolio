import { usePathname } from 'next/navigation';
import { NavBar } from '../header/navBar';
import { useAppStore } from '@/shared/store/app-store';
import Link from 'next/link';
import s from './burgerAnimation.module.css';

export const BurgerMenu = () => {
  const { isBurger, setBurger } = useAppStore();
  const currentPath = usePathname();
  // const textColor = currentPath === '/agreements' ? 'text-black' : 'text-white';
  const toggleMenu = () => {
    setBurger(!isBurger);
  };
  return isBurger ? (
    <div className={isBurger ? s.scaleUp : ''}>
      <div className="flex flex-col gap-12 p-4 fixed h-full w-full bg-white/90">
        <NavBar
          name={
            'flex flex-col pl-6 pt-[90px] gap-4 text-2xl text-md xl:text-xl uppercase max-w-[1140px]'
          }
        />
        <Link
          href="/#contacts"
          className="flex ml-6 max-w-max text-white px-4 py-2 bg-gradient-to-t from-gray-900 to-gray-600 rounded-md"
            onClick={toggleMenu}
        >
          Связаться
        </Link>
      </div>
    </div>
  ) : null;
};
