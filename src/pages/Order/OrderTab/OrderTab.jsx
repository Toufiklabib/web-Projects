import React from 'react';
import OrderCart from '../OrderCart/OrderCart';

const OrderTab = ({items}) => {
    return (
        <div className='grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-8'>
                        {
                            items.map((item) => <OrderCart key={item._id} item={item} ></OrderCart>)
                        }
                    </div>
    );
};

export default OrderTab;