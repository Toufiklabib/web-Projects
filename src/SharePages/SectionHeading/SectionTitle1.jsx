import React from 'react';

const SectionTitle1 = ({heading, subheading}) => {
    return (
        <div className='text-center mx-auto md:w-4/12 lg:w-6/12 my-5'>
            <p className='text-2xl uppercase text-yellow-700 my-3'>{heading}</p>
            <h1 className='text-5xl border-y-4  py-4'>{subheading}</h1>
        </div>
    );
};

export default SectionTitle1;


//From 11.00am to 10.00pm
//--ORDER ONLINE--