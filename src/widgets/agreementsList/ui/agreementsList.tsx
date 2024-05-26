import { list } from '../const';
import Bullet from '../../../public/icons/finger-pointer.svg';

export const AgreementsList = () => {
  return (
    <ul className="flex px-14 pb-16 flex-col gap-4 pt-[100px] bg-black/70">
      {list.map((el, i) => {
        return (
          <div key={i} className="flex flex-col gap-1 text-white">
            <label className="text-2xl underline underline-offset-8">
              {el.title}
            </label>
            {el.offer?.map((el) => {
              return <label key={el}>{el}</label>;
            })}
            {el.description?.map((el) => {
              return (
                <p key={el}>
                  <label className="before:content-['link']">{el}</label>
                </p>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
};
