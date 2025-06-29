import type { PropsWithChildren } from 'react';
import { NavBar } from './nav-bar';
import { Footer } from './footer';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="absolute bg-gray-100 w-full h-full flex flex-col">
      <NavBar />
      <div
        className={
          'overflow-y-auto min-h-[30%] flex flex-col gap-6 pt-6 px-[0vw] lg:px-[5vw] xl:px-[10vw]'
        }>
        {children}
        <Footer />
      </div>
    </div>
  );
};
