import Link from 'next/link';
import s from './Header.module.css';

export const Logo = () => {
  return (
    <Link href={'/#main'} className={`flex cursor-pointer`}>
      <h1 className={s.logo}>AI</h1>
      <div className="flex leading-[0.9rem] flex-col items-center justify-center pl-[8px] text-sm">
        <div className='mb-1'>
          <p>Alexey</p>
          <p>Iankov</p>
        </div>
      </div>
    </Link>
  );
};
