'use client';

import { AnimatedCode } from '@/widgets/animatedCode/animatedCode';
import { AvatarAnimation } from '@/widgets/avatarAnimation/avatarAnimation';
import { Projects } from '@/widgets/projects/projects';
import { Skills } from '@/widgets/skills/skills';
import { Ticker } from '@/widgets/ticker/ticker';

export const MainPage = () => {
  return (
    <section id='main' className="flex flex-col items-center justify-center w-full">
      <div className="flex-col px-4 lg:flex lg:flex-row items-center justify-between min-h-[100dvh] w-full max-w-[1140px] pb-12">
        <div className="flex mt-[120px] pb-2 sm:pb-12 lg:pb-0 items-center lg:mt-0 pointer-events-none flex-col lg:items-start justify-between w-[100%] lg:w-[50%]">
          <div className="flex flex-col mr-16 md:gap-4 gap-1">
            <h1 className="text-3xl sm:text-5xl font-medium ">Front-end developer</h1>
            <h2 className="text-2xl sm:text-4xl pb-0 sm:pb-16">для Вашей команды</h2>
          </div>
          <AnimatedCode />
        </div>
        <AvatarAnimation />
      </div>

      <Ticker/>
      <Projects/>
      <Skills/>
    </section>
  );
};
