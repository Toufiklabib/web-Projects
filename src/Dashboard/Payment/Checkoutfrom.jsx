import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import useCartdata from '../../hooks/useCartdata';
import easyinvoice from 'easyinvoice';

import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import logo from '../../assets/Images/menu Item/ju_logo.png'
import { useNavigate } from 'react-router-dom';
const Checkoutfrom = () => {
  const [error, setError] = useState('');
 
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const axiosLink = useAxios();
  const [cart] = useCartdata();

  const { user } = useAuth();

  const [clientSecret, SetClientSecret] = useState('');

  

  const totalSum = cart.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.price;
  }, 0)




  useEffect(() => {
    if (totalSum > 0) {
      axiosLink.post('/create-payment-intent', { price: totalSum })
        .then(res => {
          console.log(res.data.clientSecret);
          SetClientSecret(res.data.clientSecret);
        })
    }

    console.log(totalSum);


  }, [axiosLink, totalSum])




  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }


    const card = elements.getElement(CardElement);

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('[error]', error);
      setError(error.message);
    } else {
      console.log('PaymentMethod', paymentMethod);
      setError('')
    }


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        }
      }
    })

    if (confirmError) {
      console.log("payment Erroe");

    }
    else {
      console.log('payment intent', paymentIntent)
      if (paymentIntent.status === 'succeeded') {

        var payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          name: user.displayName,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuIds: cart.map(item => item.menuId),
          price: totalSum,
          status: 'pending',

        }

        var data = {
          apiKey: "free", 
          mode: "development", 
          images: {
            
            logo: "https://public.budgetinvoice.com/img/logo_en_original.png",
             
          },
          // Your own data
          sender: {
            company: "Sheikh Russel Hall",
            address: "Savar Dhaka",
            zip: "12000",
            city: "Dhaka",
            country: "Bnagladesh"
          },
         
          client: {
              company: `${user.displayName}`,
              address: "Savar Dhaka",
              zip: "12000",
              city: "Dhaka",
              country: "Bnagladesh"
           
          },
          information: {
            TransactionId: `${paymentIntent.id}`,
            date: `${new Date().getDate()}`,
            dueDate: `${new Date().getDate() + 1 }`, 
          },
         
          products: cart ,
         
        
          settings: {
              currency: "BDT", 
             
          },
          
          translate: {
             
          },
      
        
      };

        easyinvoice.createInvoice(data, function (result) {
          
          console.log('PDF base64 string: ', result.pdf);
          easyinvoice.download(`${user.displayName} Invoice`);
      });


        const res = await axiosLink.post('/payments', payment)

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Payment successful",
            text: `Your Transaction ID ${paymentIntent.id} `,
            icon: "success"
          });
        }
        navigate('/dashboard/paymenthistory')
      }
    }

  }






  return (
    <div>

      <div className='w-[600px]   p-5 mx-auto ' >
        <form onSubmit={handelSubmit} >

          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button className='btn btn-md btn-primary  mt-5 ' type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>


          <p className='text-red-600'  >{error}</p>

        </form>
      </div>




    </div>
  );
};

export default Checkoutfrom;