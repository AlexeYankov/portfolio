'use client';

import { AnimatedCode } from '@/widgets/animatedCode/animatedCode';
import { AvatarAnimation } from '@/widgets/avatarAnimation/avatarAnimation';

export const MainPage = () => {
  return (
    <section className="flex items-center justify-center w-full h-full px-4">
      <div className="flex-col lg:flex lg:flex-row items-center justify-between w-full h-[100vh] max-w-[1140px] pb-12">
        <div className="flex mt-[120px] pb-2 sm:pb-12 lg:pb-0 items-center lg:mt-0 pointer-events-none flex-col lg:items-start justify-between w-[100%] lg:w-[50%]">
          <div className="flex flex-col mr-16 md:gap-4 gap-1">
            <h1 className="font-medium text-3xl sm:text-5xl">Front-end developer</h1>
            <h2 className="text-2xl sm:text-4xl pb-0 sm:pb-16">для Вашей команды</h2>
          </div>
          <AnimatedCode />
        </div>
        <AvatarAnimation />
      </div>
    </section>
  );
};
