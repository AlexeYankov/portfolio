import Link from 'next/link';
import { nav } from '../constants';
import { useAppStore } from '@/entities/store/app-store';

const link = ['/#projects', '/#skills', 'https://drive.google.com/file/d/1ENzht8JTHVfQeS8QmWBJZQ4tzYL4V1_e/view?usp=drive_link', '/agreements'];

export const NavBar = ({ name }: { name?: string }) => {
  const { setBurger } = useAppStore();
  const clickHandler = () => {
    setBurger(false);
  };

  return (
    <ul className={`capitalize ${name}`}>
      {nav.map((el, i) => {
        return (
          <li key={i} className="flex items-center items-center'">
            <Link
              href={link[i]}
              className={`pr-10`}
              onClick={clickHandler}
            >
              {el}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
