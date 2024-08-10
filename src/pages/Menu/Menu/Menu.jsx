import React from 'react';
import { Helmet } from 'react-helmet-async';

import Cover from '../../../SharePages/Cover/Cover';
import menu1 from '../../../assets/Images/Banner/morning.jpg'
import menu2 from '../../../assets/Images/myimg/noon.jpg'
import menu3 from '../../../assets/Images/myimg/feastnight.jpg'


import useMenu from '../../../hooks/useMenu';
import SectionTitle1 from '../../../SharePages/SectionHeading/SectionTitle1';
import MenuCategory from '../../../SharePages/MenuCategory/MenuCategory';

import hallimg from '../../../assets/Images/menu Item/hallmainpic.jpg'
const Menu = () => {
    
     
   const [menus] = useMenu();
   
   
    
   const breakfast = menus.filter(item => item.category === 'breakfast')
   const lunch =   menus.filter(item => item.category === 'lunch')
   const dinner =  menus.filter(item => item.category === 'lunch');

    return (
        <div>
            <Helmet><title>MENU</title></Helmet>

           <Cover
           img={hallimg}
           title={'Our menu'}
           ></Cover>
           <SectionTitle1 heading={`Don't Miss Today's item `}  subheading={'Todays Menu '} ></SectionTitle1>
         

           
           <Cover
            img={menu1}
            title={'breakfast '}
           ></Cover>
            <MenuCategory items={breakfast} title={'breakfast'}></MenuCategory>

          

           <Cover
            img={menu2}
            title={'lunch '}
           ></Cover>
            <MenuCategory items={lunch}   title={'lunch'} ></MenuCategory>
           
           
           <Cover
            img={menu3}
            title={'dinner'}
           ></Cover>
            <MenuCategory items={dinner} title={'dinner'}  ></MenuCategory>
           
          
        
           
        
           
          
        </div>
    );
};

export default Menu;