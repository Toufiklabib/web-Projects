import React from 'react';
import SectionMenuGrid from '../SectionMenuGrid/SectionMenuGrid';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title}) => {
    return (
       <section className='my-8'>
         <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8  '>
               
               {
                items.map(item => <SectionMenuGrid
                 key={item._id}
                 item = {item}
                ></SectionMenuGrid>)
               }
                  
            </div>
          <div className='flex items-center justify-center'>
          <Link to = {`/order/${title}`} > <button className="btn btn-info  mt-2 items-center btn-outline ">Read More </button></Link>
          </div>
      
       </section>
    );
};

export default MenuCategory;