import { ImagesContainer } from './imagesContainer';
import style from './ticker.module.css';

export const Ticker = () => {
  return (
    <section className="flex w-full relative flex-col">
      <div className={style.bodySub4MainStyleContainer}>
        <h1 className=" z-10 text-2xl sm:text-4xl pt-8">Технологии</h1>
        <div className={style.bodySub4}>
          <div className={style.bodySub4part1}>
            <ImagesContainer />
          </div>
          <div className={style.bodySub4part2}>
            <ImagesContainer />
          </div>
        </div>
      </div>
    </section>
  );
};
