import Link from 'next/link';
import { nav } from './constants';
import { useAppStore } from '@/shared/store/app-store';

const link = ['/#projects', '/#skills', 'https://drive.google.com/file/d/12mTO2qFvG_tlp80KbGuedHBvA4byuAkt/view?usp=sharing', '/agreements'];

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
