import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='container-home__body'>
        { children }
      </div>
      <Footer />
    </>
  );
};

export default Layout;
