import Link from 'next/link';
import { nav } from './constants';

const link = ['/', '/', '/', '/agreements']

export const NavBar = ({color}:{color: string}) => {
  const notFirstElement = 'border-s-2 flex items-center';
  const elementStyle = ' flex items-center';
  return (
    <ul className="flex pl-[40px] uppercase">
      {nav.map((el, i) => {
        return (
          <li key={i} className={i === 0 ? elementStyle : notFirstElement}>
            <Link
              href={link[i]}
              className={`px-[10px] font-medium ${color} transition ease-in-out delay-100 hover:text-red-600`}
            >
              {el}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
