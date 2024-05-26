'use client';

import React from 'react';
import Header from '@/widgets/header';
import BurgerMenu from '@/widgets/burgerMenu';
import Footer from '@/widgets/footer';


export default function BaseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modal, setModal] = React.useState(false);
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <>
      <Header modalHandler={modalHandler} />
      {/* {isAppLoading && <Loader />} */}
      {/* <Header data={isAuth ? data : ({} as ProfileInfoType)} /> */}
      <BurgerMenu />
      {children}
      {/* <button onClick={() => toastWrapper('success')}>weee</button> */}

      {/* <!-- Main modal --> */}
      {modal ? (
        <div className="fixed top-0 right-0 left-0 h-full opacity-[0.5] bg-black z-0" />
      ) : (''
      )}
       <Footer />
     {/* <Dialog modal={modal} modalHandler={modalHandler}/> */}
    </>
  );
}
