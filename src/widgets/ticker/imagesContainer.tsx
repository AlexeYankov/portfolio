import Image from 'next/image';
import clsx from 'clsx';

import CSS3 from '../../../public/techs/CSS3.png';
import HTML5 from '../../../public/techs/HTML5.png';
import JS from '../../../public/techs/JS.png';
import Next from '../../../public/techs/Next.png';
import React1 from '../../../public/techs/React-icon.svg.png';
import SCSS from '../../../public/techs/SCSS.png';
import TS from '../../../public/techs/TS.png';
import chakra from '../../../public/techs/chakra.png';
import firebase from '../../../public/techs/firebase.png';
import git from '../../../public/techs/git.png';
import gulp from '../../../public/techs/gulp.png';
import material from '../../../public/techs/material-ui.png';
import nodeJS from '../../../public/techs/nodeJS.png';
import reactQuery from '../../../public/techs/react-query.png';
import react from '../../../public/techs/react.png';
import redux from '../../../public/techs/redux.png';
import sass from '../../../public/techs/sass.png';
import storybook from '../../../public/techs/storybook.png';
import webpack from '../../../public/techs/webpack.png';
import zustand from '../../../public/techs/zustand.png';
import tailwind from '../../../public/techs/tailwind.webp';
// import REST from '../../../public/techs/REST.webp';

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

  //   {
  //     img: SCSS,
  //     title: 'SCSS',
  //   },

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
  //   {
  //     img: gulp,
  //   },
  {
    img: material,
    title: 'material',
  },

  {
    img: reactQuery,
    title: 'reactQuery',
  },
  //   {
  //     img: react,
  //   },
  {
    img: redux,
    title: 'redux',
  },
  {
    img: sass,
    title: 'sass',
  },
  //   {
  //     img: storybook,
  //   },

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
          ['max-w-[82px]']: el.title === 'CSS3',
          ['max-w-[80px]']: el.title === 'HTML5',
          ['max-w-[255px]']: el.title === 'reactQuery' || el.title === 'Next' || el.title === 'zustand' || el.title === 'chackra',
          ['max-w-[180px]']: el.title === 'sass',
          ['max-w-[100px] pr-2']: el.title === 'tailwind',
          ['max-w-[140px] mr-8']: el.title === 'webpack',
          ['max-w-[260px] mr-8']: el.title === 'chakra',
        //   ['max-w-[280px] pr-0']:
        //     ,
        });
        return (
          <li key={i} className="flex rounded-md">
            <Image
              src={el.img}
              width={0}
              height={0}
              className={clsxStyle}
              style={{
                // maxHeight: '110px',
                // maxWidth: '150px',
                // height: '80px',
                // scale: '2',
                // width: '190px',
                // borderRadius: '8px',
                // marginLeft: '60px',
                // scale: '1.8',
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
