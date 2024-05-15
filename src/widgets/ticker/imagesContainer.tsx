import Image from 'next/image';
import clsx from 'clsx';

import CSS3 from '../../../public/techs/CSS3.png';
import HTML5 from '../../../public/techs/HTML5.png';
import JS from '../../../public/techs/JS.png';
import Next from '../../../public/techs/Next.png';
import React1 from '../../../public/techs/React-icon.svg.png';
import TS from '../../../public/techs/TS.png';
import chakra from '../../../public/techs/chakra.png';
import firebase from '../../../public/techs/firebase.png';
import git from '../../../public/techs/git.png';
import material from '../../../public/techs/material-ui.png';
import nodeJS from '../../../public/techs/nodeJS.png';
import reactQuery from '../../../public/techs/react-query.png';
import redux from '../../../public/techs/redux.png';
import sass from '../../../public/techs/sass.png';
import webpack from '../../../public/techs/webpack.png';
import zustand from '../../../public/techs/zustand.png';
import tailwind from '../../../public/techs/tailwind.webp';

const imagesCase = [
  {
    img: CSS3,
    title: 'CSS3',
  },
  {
    img: HTML5,
    title: 'HTML5',
  },
  {
    img: TS,
    title: 'TS',
  },
  {
    img: JS,
    title: 'JS',
  },
  {
    img: Next,
    title: 'Next',
  },
  {
    img: chakra,
    title: 'chakra',
  },
  {
    img: firebase,
    title: 'firebase',
  },
  {
    img: nodeJS,
    title: 'nodeJS',
  },
  {
    img: React1,
    title: 'React1',
  },
  {
    img: git,
    title: 'git',
  },
  {
    img: material,
    title: 'material',
  },

  {
    img: reactQuery,
    title: 'reactQuery',
  },
  {
    img: redux,
    title: 'redux',
  },
  {
    img: sass,
    title: 'sass',
  },
  {
    img: tailwind,
    title: 'tailwind',
  },
  {
    img: zustand,
    title: 'zustand',
  },
  {
    img: webpack,
    title: 'webpack',
  },
];

export const ImagesContainer = () => {
  return (
    <ul className="flex w-full pt-8 gap-10 sm:pt-0 items-center justify-center">
      {imagesCase.map((el, i) => {
        const clsxStyle = clsx('flex max-w-[110px] max-h-[90px] ', {
          ['max-w-[68px]']: el.title === 'CSS3',
          ['max-w-[90px]']: el.title === 'HTML5',
          ['max-w-[255px]']:
            el.title === 'reactQuery' ||
            el.title === 'Next' ||
            el.title === 'zustand' ||
            el.title === 'chackra',
          ['max-w-[180px]']: el.title === 'sass',
          ['max-w-[100px] pr-2']: el.title === 'tailwind',
          ['max-w-[140px] mr-8']: el.title === 'webpack',
          ['max-w-[260px] mr-8']: el.title === 'chakra',
        });
        return (
          <li key={i} className="flex rounded-md">
            <Image
              src={el.img}
              width={0}
              height={0}
              className={clsxStyle}
              style={{
                filter: 'grayscale(100%)',
              }}
              alt=""
            />
          </li>
        );
      })}
    </ul>
  );
};
