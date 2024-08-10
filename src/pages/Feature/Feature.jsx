import React from 'react';
import SectionTitle1 from '../../SharePages/SectionHeading/SectionTitle1';

import hallimg from '../../assets/Images/Banner/morning.jpg'

import './Feature.css';
const Feature = () => {
    return (
        <div className='my-8'>
            <section  className='feature_img bg-fixed'>
                <div className='pt-12'>
                 <SectionTitle1 heading={'Check it out'} subheading={'From Our Menu'} ></SectionTitle1>
                </div>
             
                <div className=' md:flex items-center justify-evenly md:w-[900px] mx-auto gap-5   py-8 px-16 pt-12 pb-12'>
                  <div className='w-1/2'>
                      <img className=' rounded-xl border-8 w-[300px] h-[270px] ' src={hallimg} alt="" />
                  </div>
                  <div className='w-1/2 text-white'>
                    <h4 className='text-3xl' >March 20,2024</h4>
                    <h4 className='text-3xl' >Here Can I Get Some?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos maiores vitae ut nihil itaque. Numquam optio aspernatur natus sunt eaque similique eos quas nobis explicabo a voluptate ducimus, nam veniam?</p>
                    <button className="btn btn-sm mt-2  btn-outline btn-secondary">Read More </button>
                  </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;