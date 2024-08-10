import React from 'react';

const CartTitle = ({title}) => {
    return (
        <div>
             <div className="divider border-1 bg-cyan-700  "></div>
              <h2 className='text-3xl text-center ml-35 mt-3 font-bold uppercase ' >{title}</h2>
              <div className="divider  border-1 bg-cyan-700  "></div>
        </div>
    );
};

export default CartTitle;