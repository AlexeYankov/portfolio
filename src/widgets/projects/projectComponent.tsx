import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type ProjectComponentType = {
  video: string;
  image?: string;
  title: string;
  techs: string[];
  icons: string[];
  tasks: string;
  code: string;
  demo: string;
};

export const ProjectComponent = ({ el }: { el: ProjectComponentType }) => {
  const swiperRefLocal = useRef(null);
  const videoRef = useRef<any>(null);
  // const [id, setId] = useState(false);
  // const [hovered, setHovered] = useState(false);
  // const handleMouseEnter = () => {
  // setId(true);
  //@ts-ignore
  // videoRef.current?.autoplay.start()
  // };
  // const handleMouseLeave = () => {
  //   setId(false);
  // };
  // useEffect(() => {
  //   if (!id) {
  //     setHovered(false);
  //     return;
  //   }

  //   if (id) {
  //     //open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
  //     setHovered(true);
  //   }
  // }, [id]);

  const buttonDisableStyle = !el.code
    ? 'cursor-not-allowed bg-gradient-to-t from-gray-200 to-gray-400'
    : 'bg-gradient-to-t from-gray-900 to-gray-600 ';

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      ref={swiperRefLocal}
      // onMouseLeave={handleMouseLeave}
      className="flex flex-col justify-center items-center rounded-lg w-full transition-all duration-300 hover:bg-gray-100 shadow-lg"
    >
      <h1 className="text-xl p-4 lg:text-2xl uppercase font-medium">
        {el.title}
      </h1>
      <div className="flex w-full p-4 lg:pr-8 lg:pl-8 lg:pb-8 lg:pt-0 flex-col justify-center md:flex-row">
        <div className="flex w-full justify-center items-center rounded-lg lg:w-[40%]">
          {el.image && (
            <img
              src={el.image}
              style={{ width: 'auto', height: 'auto' }}
              alt={el.title}
            />
          )}
          {el.video && (
            <video
              loop
              // // @ts-ignore
              // onMouseOver={event => event.target.play()}
              // // @ts-ignore
              // onMouseOut={event => event.target.pause()}
              data-autoplay=""
              autoPlay
              muted={true}
              playsInline
              ref={videoRef}
              preload="auto"
              style={{ width: '100%', height: '100%', borderRadius: '8px' }}
            >
              <source src={el.video} type="video/mp4"></source>
            </video>
          )}
        </div>
        <div className="flex w-full lg:max-w-[60%] flex-col gap-4 pt-4 sm:p-4 lg:px-8">
          <div className="hidden sm:flex flex-col w-full flex-wrap">
            <h2 className="text-md font-medium pb-2">Стек:</h2>
            <ul className="w-full flex flex-wrap gap-2 text-white">
              {el.icons.map((el, i) => {
                return (
                  <li key={i} className="flex rounded-md bg-gray-700 px-2 py-1">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col w-full flex-wrap">
            <h2 className="text-md font-medium pb-1">Задачи:</h2>
            <ul className="w-full flex flex-wrap gap-2">
              <li className="flex rounded-md py-1">{el.tasks}</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Link
              href={el.code}
              className={`flex px-4 py-1 rounded-md text-white ${buttonDisableStyle}`}
              title={el.code ? '' : 'подписал NDA'}
            >
              Code (Git)
            </Link>
            <Link
              href={el.demo}
              className="flex px-4 py-1 bg-gradient-to-t from-gray-900 to-gray-600 rounded-md text-white"
            >
              Demo (Production)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
