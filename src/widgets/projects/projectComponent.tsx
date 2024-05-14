import Link from 'next/link';

type ProjectComponentType = {
  video: string;
  title: string;
  techs: string[];
  icons: string[];
  tasks: string;
  code: string;
  demo: string;
};

export const ProjectComponent = ({ el }: { el: ProjectComponentType }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg w-full pb-4 transition-all duration-300 hover:bg-gray-100 shadow-lg">
      <h1 className="text-xl p-4 lg:text-2xl uppercase font-medium">
        {el.title}
      </h1>
      <div className="flex w-full flex-col justify-center sm:flex-row">
        <div className="flex justify-center p-6 w-full lg:w-[40%]">
          <img
            src={'/techs/webpack.png'}
            style={{ width: 'auto', maxHeight: '200px' }}
            alt=""
          />
        </div>
        <div className="flex w-full lg:max-w-[60%] flex-col gap-4 p-4 lg:pr-8">
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
              className="flex px-4 py-1 bg-gradient-to-t from-gray-900 to-gray-600 rounded-md text-white"
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
