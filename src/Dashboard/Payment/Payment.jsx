import React from 'react';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkoutfrom from './Checkoutfrom';

const Payment = () => {


    const stripePromise = loadStripe('pk_test_51PImcgRoYccx25OhTHXBBjjDf7ozyly67DMnFVLQwON1uChXhAsBT2VKpF27mjg26z9AJ6uhqtHkkSIfTZ7qMIEQ00OS4fQOXm');

    return (
        <div className='w-[900px] ml-5' >

            <CartTitle title={'Payment'} ></CartTitle>

            <div>
                <Elements stripe={stripePromise} >
                 <Checkoutfrom></Checkoutfrom>
                </Elements>
            </div>







        </div>
    );
};

export default Payment;