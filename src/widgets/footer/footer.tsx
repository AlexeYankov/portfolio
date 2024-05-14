import Image from 'next/image';
import { Logo } from '../header/Logo';
import Link from 'next/link';

export const Footer = () => {
  return (
    <section className="flex justify-center items-center max-w-full bg-gradient-to-t from-gray-900 to-gray-800 rounded-t-[60px] text-white">
      <div className="flex justify-between flex-col lg:flex-row text-white w-full relative max-w-[1140px] px-4 pt-10 items-start lg:justify-between">
        <div className="flex w-full items-center lg:items-start flex-col pb-12">
          <Logo />
          <div>
            <h2 className="text-2xl py-2">На связи</h2>
            <p className="max-w-[300px] text-sm">
              Проживаю в г. Таганрог, Ростовской области. Готов к работе в Вашем
              проекте, удалённо или в офисе. Рассматриваю релокацию СПб, Москва,
              Краснодар, Ростов-на-Дону.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center lg:items-start ">
          <div className='flex flex-col w-[300px]'>
            <h2 className="flex text-2xl pb-4">Контакты</h2>
            <ul className="flex flex-col items-start justify-center">
              <li className="flex items-center pb-6 before:mr-2 justify-center before:content-mail before:w-6 before:h-6">
                Yankovav.wm@gmail.com
              </li>
              <li className="flex items-center pb-6 before:mr-2 justify-center before:content-phone before:w-6 before:h-6">
                @AlexeYankoV
              </li>
              <li className="flex items-center pl-[3px] before:mr-3 justify-center before:content-location before:w-5 before:h-6">
                г. Таганрог, <br /> г. Ростов-на-Дону
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full overflow-hidden lg:overflow-visible pt-[150px] lg:pt-0 lg:mb-[130px] justify-center lg:justify-end items-center z-20 relative">
          <div className="flex lg:mr-14 justify-end items-center mt-[-100px] lg:mt-[-40px] absolute flex-col text-black z-20">
            <Logo />
            <Link
              href="https://t.me/AlexeYankoV"
              className="flex text-sm items-center justify-start w-[145px] cursor-pointer shadow-2xl mt-4 gap-3 rounded-lg p-2 px-4"
            >
              <Image
                src={'/footer/contacts/telegram.png'}
                width={30}
                height={30}
                className="flex rounded-xl"
                alt=""
              />
              Telegramm
            </Link>
            <Link
              href="https://wa.me/79248133753"
              className="flex text-sm items-center justify-start w-[145px] cursor-pointer shadow-2xl mt-4 gap-1 rounded-lg p-2"
            >
              <Image
                src={'/footer/contacts/whatsapp.jpg'}
                width={45}
                height={30}
                className="flex rounded-xl"
                alt=""
              />
              Whatsapp
            </Link>
          </div>

          <Image
            src={'/footer/iphone.webp'}
            width={100}
            height={300}
            className="flex relative lg:mt-[-44px] scale-[2.65] lg:mr-[80px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
