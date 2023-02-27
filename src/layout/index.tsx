import React from 'react';

import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex w-full flex-col  bg-[#E8E8E8]">
      <Nav />
      <div className="min-h-[calc(100vh-4rem)] w-full p-4 md:pl-[21.5%]">{children}</div>
     <div className='md:pl-[252px]'>
      <Footer />
      </div>
    </div>
  );
};

export default Layout;