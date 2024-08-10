import React from 'react';
import Banner from '../Banner/Banner';
import BannerCategory from '../Banner/BannerCategory/BannerCategory';
import PopularMenu from '../PopularMenu/PopularMenu';

import Contact from '../../SharePages/Contact/Contact';
import Feature from '../Feature/Feature';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
const Home = () => {



    return (
        <div>
           <Helmet>
                <title>HOME</title>
            </Helmet>

          <Banner></Banner>
          <BannerCategory></BannerCategory>    
          <PopularMenu></PopularMenu>
          <Contact></Contact>
          <Feature></Feature>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;