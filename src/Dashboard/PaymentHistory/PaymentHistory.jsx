import React from 'react';
import CartTitle from '../../SharePages/CartTitle/CartTitle';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../../hooks/useAxios';

const PaymentHistory = () => {

   const {user} = useAuth();
   const axiosLink = useAxios();

    const {data : payments =[] } = useQuery({
      
        queryKey: ['payments' , user?.email ],
        queryFn: async() =>{
            const res = await axiosLink.get(`/payments/${user.email}`)
               
                return res.data ;
           
        }


    })



    return (
        <div className='w-[900px] ml-5'  >
            <CartTitle title={"Payment History"} ></CartTitle>
             
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Transaction ID </th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {

        payments.map((item , index) =>
            <tr key={item._id} >
            <th>{index + 1 }</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.transactionId}</td>
            <td>{item.date}</td>
          </tr>
        )
      }
    
    </tbody>
  </table>
</div>
              


        </div>
    );
};

export default PaymentHistory;