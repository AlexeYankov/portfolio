import { useState } from 'react';
import { ProjectComponent } from './projectComponent';
import { projectList } from './projectList';

export const Projects = () => {
  const [inputValue, setValue] = useState('');
  const getValue = (el: Array<string>, value: string) => {
    const techsValues = el.map((el) => {
      return el.toLowerCase().includes(value);
    });
    return techsValues.includes(true);
  };
  const filteredProjects = projectList.filter((el) => {
    if (inputValue) {
      return getValue(el.techs, inputValue.toLocaleLowerCase()) ? el : '';
    }
    return el;
  });
  return (
    <div className="flex select-none flex-col relative items-center justify-center w-full">
      <div id="projects" className="absolute left-2 top-[-50px]" />
      <div className="flex-col px-4 flex items-center justify-start w-full max-w-[1140px]">
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className=" z-10 text-3xl sm:text-4xl font-medium pt-8">
            Работы
          </h1>
          <p>
            Ниже приведены работы с использованием различных технологий. Вы
            можете воспользоваться поиском для поиска проектов с использованием
            нужных Вам технологий. От UI/UX проектирования до построения
            различных веб продуктов к примеру <strong>дизайн</strong>
          </p>
        </div>
        <div className="flex w-full justify-center items-center flex-col py-4 gap-8">
          <div className="w-full flex flex-col justify-start items-start">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setValue(e.currentTarget.value)}
              placeholder="введите что-либо"
              className="flex w-full lg:w-[35%] text-gray-500 border-2 outline-0 border-gray-400 shadow-md rounded-md px-4 py-1"
            />
          </div>
          {filteredProjects.map((el, i) => {
            return <ProjectComponent el={el} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};