import React, { useEffect, useState } from 'react';
import SectionTitle1 from '../../SharePages/SectionHeading/SectionTitle1';
import SectionMenuGrid from '../../SharePages/SectionMenuGrid/SectionMenuGrid';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../../SharePages/MenuCategory/MenuCategory';

const PopularMenu = () => {


 
 const [menus] = useMenu();


 const dinner = menus.filter(item => item.category === 'dinner');
 



    return (
       
            <section className='my-10' >
            
            <div>
              <SectionTitle1 heading={'From Our Menu'} subheading={'Popular Items'}  ></SectionTitle1>
            </div>
          <MenuCategory items={dinner} ></MenuCategory>

            </section>
        
    );
};

export default PopularMenu;