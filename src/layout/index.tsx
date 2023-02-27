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
      <div className="min-h-[calc(100vh-4rem)] w-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;