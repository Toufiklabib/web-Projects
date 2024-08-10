import React  from 'react';
import useCartdata from '../hooks/useCartdata';

import {  MdDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxios from '../hooks/useAxios';
import { Helmet } from 'react-helmet-async';
import CartTitle from '../SharePages/CartTitle/CartTitle';
import { Link } from 'react-router-dom';



const UserCart = () => {
    
    const [cart,refetch] = useCartdata();

    
    
    




    

    const axiosLink = useAxios();
    
  
    const totalSum = cart.reduce((previousValue,currentItem) => {
            return previousValue + currentItem.price;
    },0)
  

   
    const handelDelete = (id) =>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         
         axiosLink.delete(`/carts/${id}`)
         .then(res=>{
            if(res.data.deletedCount > 0)
            {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
         })

        }
      });
    }


   
   



    return (
      
        <div className='w-[900px] ml-5' >
          <Helmet>
      <title>MY CART</title>
       </Helmet>  
      
     <CartTitle title={'ADD To My Cart'} ></CartTitle>

      <div className="overflow-x-auto ">
   <table className="table   w-full border   ">
  
    <thead>
      <tr >
        <th className='text-bold text-black'>#</th>
        <th className='text-bold text-black'>Item Image</th>
        <th className='text-bold text-black'>Item Name</th>
        <th className='text-bold text-black'>Price</th>
        <th className='text-bold text-black'>Favorite Color</th>
        <th className='text-bold text-black'></th>
      </tr>
    </thead>
     
    <tbody  >
      {
        cart.map((item,index)=> <tr key={item._id}>
           
           <td className='text-black font-bold'>{index+1}</td>

            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              
              </div>
            </td>
            <td>
             
              <h1 className='font-semibold' >{item.name}</h1>
            </td>
            <td>
              <h1 className='text-black font-semibold' > {item.price}</h1>
            </td>
            <th>
            <button  onClick={()=>handelDelete(item._id)}  className="btn btn-ghost btn-lg "> <MdDeleteForever color='red' size={25}></MdDeleteForever> </button>
            </th>
          </tr>
          
        )
      }

      </tbody>
   
  { (cart.length > 0) ? <>  <tfoot>
      <tr >
         
        <th className='font-semibold text-sm text-black ' >Total Item : {cart.length}</th>
        <th className='font-semibold text-sm text-black ' >Total Price : {totalSum} </th>
        <th></th>
        <th></th>
       <Link  to='/dashboard/payment' ><th> <button  className='btn btn-md btn-success text-white '> Check Out</button> </th></Link>
      </tr>
    </tfoot> </> :
     <> </> 
     }
    
  </table>
</div>




        </div>
        
    );
};

export default UserCart;