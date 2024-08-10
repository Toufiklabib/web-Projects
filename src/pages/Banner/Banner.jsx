import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from 'react-router-dom';


import Banner1 from '../../assets/Images/myimg/canteen3.jpg'
import Banner2 from '../../assets/Images/myimg/canteen.jpg'
import Banner3 from '../../assets/Images/myimg/canteen2.jpg'
import Banner4 from '../../assets/Images/myimg/canteen4.jpg'

const Banner = () => {
    return (
        <div>
             <div className="carousel w-full h-[600px]  ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={Banner3} className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold  '>SHEIKH RUSSEL HALL</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-primary mr-5"> <Link to='/menu' >CHECK MENU</Link>  </button>
                            <button className="btn btn-outline btn-secondary">  <Link to='/menu' >COMPLAINT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={Banner1} className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold l '>SHEIKH RUSSEL HALL</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-primary mr-5"> <Link to='/menu' >CHECK MENU</Link>  </button>
                        <button className="btn btn-outline btn-secondary">  <Link to='/menu' >COMPLAINT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={Banner2} className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold  '>SHEIKH RUSSEL HALL</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-primary mr-5"> <Link to='/menu' >CHECK MENU</Link>  </button>
                            <button className="btn btn-outline btn-secondary">  <Link to='/menu' >COMPLAINT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={Banner4} className="w-full " />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className='text-6xl font-bold  '>SHEIKH RUSSEL HALL</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-primary mr-5"> <Link to='/menu' >CHECK MENU</Link>  </button>
                            <button className="btn btn-outline btn-secondary">  <Link to='/menu' >COMPLAINT</Link></button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;