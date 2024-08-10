import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../SharePages/Footer/Footer';
import Header from '../SharePages/Header/Header';

const Main = () => {

    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;
    
  
    return (
        <div>
          {  noHeaderFooter ||  <Header></Header>}
            <Outlet></Outlet>
          { noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Main;