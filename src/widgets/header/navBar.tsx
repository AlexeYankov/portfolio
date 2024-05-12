import Link from 'next/link';
import { nav } from './constants';
import { useRouter } from 'next/navigation';

const link = ['/', '/', '/', '/agreements'];

export const NavBar = ({name}:{name?: string}) => {
  // const { isBurger, setBurger } = useAppStore();
  const navigate = useRouter();
  const clickHandler = (value: string) => {
    // setBurger(false);
    navigate.push(value);
  };

  return (
    <ul className={`capitalize ${name}`}>
      {nav.map((el, i) => {
        return (
          <li key={i} className="flex items-center scroll-smooth items-center'">
            <Link
              href={link[i]}
              className={`pr-4`}
              // onClick={clickHandler}
            >
              {el}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
