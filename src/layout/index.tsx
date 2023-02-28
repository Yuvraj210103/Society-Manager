import React from 'react';

import Footer from './Footer';
import Nav from './Nav';
import SideBar from './SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex w-full'>
      <div className='sticky left-0 top-0'>
        <SideBar/>
      </div>
    <div className="relative flex w-full flex-col  bg-[#E8E8E8]">
      <Nav />
      
      <div className="min-h-[calc(100vh-4rem)] w-full p-4 md:px-8">{children}</div>
    
      <Footer />
     
    </div>
    </div>
  );
};

export default Layout;