import React from 'react';

const SectionMenuGrid = ({item}) => {


      const {name,image,recipe,price}  = item;

      

    return (
        <div className='flex items-center justify-center  border-s-8 border-amber-300  p-3  '>
            
            <img className='w-[90px] h-[90px] rounded-full' src={image} alt="" />
            <div className='mx-2'>
               <h3 className='uppercase  font-bold '>{name} </h3>
                <p>{recipe}</p>
            </div>
             <p className='text-md font-bold w-[60px]  '>TK {price}</p>
        </div>
    );
};

export default SectionMenuGrid;