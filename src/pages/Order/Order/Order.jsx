import React, { useState } from 'react';
import Cover from '../../../SharePages/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import orderCover from '../../../assets/Images/shop/banner2.jpg'
import useMenu from '../../../hooks/useMenu';


import {useParams} from 'react-router-dom'
import { Helmet } from 'react-helmet-async';
import OrderTab from '../OrderTab/OrderTab';


const Order = () => {
    const [menus] = useMenu();
    const categories = ['breakfast','lunch','dinner'];
    
    const {category} = useParams();
    
    console.log(category);

    const initalIndex = categories.indexOf(category);
    
    const [tabIndex ,setTabIndex] = useState(initalIndex);
   
   
   
    const breakfast = menus.filter(item => item.category === 'breakfast')
    const lunch =   menus.filter(item => item.category === 'lunch')
    const dinner =  menus.filter(item => item.category === 'lunch');
 
    

    return (
        <div>
                     
                <Helmet><title>ORDER</title></Helmet>
<Cover img={orderCover} title={'Order Our Menu'} ></Cover>
<Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
                    <Tab>BREKFAST</Tab>
                    <Tab>LUANCH</Tab>
                    <Tab>DINNER</Tab>
                  
  </TabList>
               <TabPanel className='my-7'>
                   <OrderTab items={breakfast} ></OrderTab>
                </TabPanel>

                <TabPanel className='my-7'>
                    <OrderTab items={lunch} ></OrderTab>
                </TabPanel>

                <TabPanel className='my-7'>
                <OrderTab items={dinner} ></OrderTab>
                </TabPanel>

                
</Tabs>
        </div>
    );
};

export default Order;