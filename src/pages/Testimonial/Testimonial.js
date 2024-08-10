import React, { useEffect, useState } from 'react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle1 from '../../SharePages/SectionHeading/SectionTitle1';
import { Rating } from '@smastrom/react-rating';


import '@smastrom/react-rating/style.css'
import useReview from '../../hooks/useReview';







const Testimonial = () => {

  const [review,loading,refetch] = useReview();

    // const [reviews, setReviews] = useState([]);
    // useEffect(() => {
    //     fetch('Review.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    console.log(review.length);



    return (
        <section>
            <SectionTitle1 heading={'What Our Client Say'} subheading={'OUR REVIEW'}></SectionTitle1>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    review.map(review => <SwiperSlide key={review._id} >

                        <div className=' flex flex-col items-center p-4  mx-20'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <h1>{review.details}</h1>
                            <h1 className='text-2xl text-amber-400 '>{review.name}</h1>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;