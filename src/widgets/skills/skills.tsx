import Frontend from '../../../public/skills/Frontend.svg';
import Backed from '../../../public/skills/Backend.svg';
import Docker from '../../../public/skills/Docker.svg';
import Ui from '../../../public/skills/UI_UX.svg';

export const Skills = () => {
  return (
    <div className="flex select-none flex-col items-center justify-center w-full">
      <div className="flex-col px-4 flex items-center justify-start w-full max-w-[1140px] pb-12">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" z-10 text-3xl sm:text-4xl font-medium pt-8">
            Навыки
          </h1>
          <p>
            Могут быть полезны для Вашей команды. От UI/UX проектирования до
            построения различных веб продуктов.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-12 lg:pb-[140px] ">
          <div className="flex justify-center p-4 rounded-xl items-center flex-col transition-all duration-300 hover:bg-gray-100 shadow-xl">
            <div className="scale-50">
              <Frontend />
            </div>
            <p className="text-sm text-start">
              <strong>Frontend</strong>
              <br />
              Предпочитаемый стек Next js, TS, Zustand, Redux, RTK Query, React
              Query. Работал с Material UI, Radix UI, Chackra UI, Styled
              components, SASS, SCSS.
            </p>
          </div>

          <div className="flex justify-center p-4 rounded-xl items-center flex-col transition-all duration-300 hover:bg-gray-100 shadow-xl">
            <div className="scale-50">
              <Backed />
            </div>
            <p className="text-sm text-start">
              <strong>Backend</strong>
              <br />
              Серверная часть Node js, C# (Entity framework), PHP. <br />{' '}
              Работал с Express (Node js). Создание эндпоинтов (REST API).
              Разрабатывал чат на websocket (Websoket.io). Работа с БД
              PostgreSQL, MySQL, Mongodb.
            </p>
          </div>

          <div className="flex justify-center  p-4 rounded-xl items-center flex-col transition-all duration-300 hover:bg-gray-100 shadow-xl">
            <div className="scale-50">
              <Ui />
            </div>
            <p className="text-sm w-full text-start">
              <strong>UI/UX</strong>
              <br />
              Создание собственного прототипа дизайна Figma. <br />
              Уточнение, корректировка макета согласно пожеланиям заказчика.
            </p>
          </div>

          <div className="flex justify-center p-4 rounded-xl items-center flex-col transition-all duration-300 hover:bg-gray-100 shadow-xl">
            <div className="scale-50">
              <Docker />
            </div>
            <p className="text-sm w-full text-start">
              <strong>Docker</strong>
              <br />
              Веду разработку с использованием Docker контейнеров.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
